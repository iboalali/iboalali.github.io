# Track Android-app referrals in TelemetryDeck

## Context

The Android apps owned by the site author link to two destinations on iboalali.com:

1. The privacy-policy section of the corresponding app page (e.g. `/app/basic_root_checker/#privacy`)
2. The site home page (`/`)

Today the site loads the TelemetryDeck Web SDK in `_includes/main_layout.njk:32-36` and relies on its auto-pageview. There is no way to tell, in the dashboard, whether a given pageview originated from one of the author's own apps versus organic traffic.

We want a clean, named TelemetryDeck signal — `App.Referral` — that fires whenever a visitor lands on the site via a URL the author tagged from inside one of their Android apps, and stays attributed for the rest of the browsing session. Untagged traffic must continue to look like normal pageviews (no `App.Referral` signal).

The Android-side change (appending UTM params to the two outbound URLs in each app) is out of scope for this repo; this plan covers only the website side.

## Approach

Add a small JS module that runs on every page load and:

1. Parses `utm_source`, `utm_campaign`, `utm_content` from `window.location.search`.
2. If `utm_source === 'android_app'`, stores `{ campaign, content, landingPath, ts }` in `sessionStorage` under a single key (`td_referral`). This survives same-tab navigation but resets on a new session, which matches "this visit came from app X".
3. On *every* page load (including internal navigations) — if a `td_referral` entry exists in `sessionStorage`, fire one `App.Referral` TelemetryDeck signal with the payload below. Use a per-page-load guard (a flag on `window`) so a single page load never double-fires; sessionStorage is intentionally *not* used as the dedupe key, because we want one signal per pageview the user actually performs within the session, mirroring the auto-pageview cadence.
4. TelemetryDeck Web SDK queues calls internally, so calling `window.td.signal(...)` on script execution is safe even if the SDK hasn't finished initializing.

### Signal shape

```js
window.td.signal('App.Referral', {
  'App.Referral.campaign': 'basic_root_checker', // which app sent them
  'App.Referral.content':  'privacy',            // which link inside the app
  'App.Referral.landing':  '/app/basic_root_checker/', // first page of the visit
});
```

Naming follows TelemetryDeck's `Scope.SubScope.key` convention (verified against their JavaScript-setup and signals-reference docs).

### URL convention the Android apps must use

- Privacy link: `https://iboalali.com/app/<slug>/?utm_source=android_app&utm_campaign=<slug>&utm_content=privacy#privacy`
- Home link:    `https://iboalali.com/?utm_source=android_app&utm_campaign=<slug>&utm_content=home`

Where `<slug>` mirrors the existing markdown filenames under `app/` — `basic_root_checker`, `billboard`, `book_keeper`, `hide_persistent_notification`. This keeps app-side and site-side identifiers in sync.

## Files to modify

- **`main.js`** — append a new IIFE (matching the existing style at `main.js:11-90`) that does the parse → persist → signal flow. No new files; `main.js` is already loaded on every page via `_includes/main_layout.njk:77`.

No changes needed to:

- `_includes/main_layout.njk` — TelemetryDeck script tag is already present at lines 32-36.
- `_includes/app_layout.njk` — referral logic is page-agnostic and lives in `main.js`.
- `.eleventy.js` / shortcodes — no template-level work required.
- App content under `app/*.md` — no per-app HTML changes; the slug is read off the URL.

## Implementation sketch (for the new IIFE in `main.js`)

```js
;(function () {
  var KEY = 'td_referral';
  var params = new URLSearchParams(window.location.search);

  if (params.get('utm_source') === 'android_app') {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({
        campaign: params.get('utm_campaign') || '',
        content:  params.get('utm_content')  || '',
        landing:  window.location.pathname,
      }));
    } catch (e) { /* sessionStorage disabled — silently ignore */ }
  }

  var raw;
  try { raw = sessionStorage.getItem(KEY); } catch (e) { return; }
  if (!raw) return;

  var data;
  try { data = JSON.parse(raw); } catch (e) { return; }

  if (window.__tdReferralFired) return;
  window.__tdReferralFired = true;

  function fire() {
    if (!window.td || typeof window.td.signal !== 'function') return false;
    window.td.signal('App.Referral', {
      'App.Referral.campaign': data.campaign,
      'App.Referral.content':  data.content,
      'App.Referral.landing':  data.landing,
    });
    return true;
  }

  if (!fire()) {
    // SDK not ready yet — retry briefly. The Web SDK queues internally
    // once initialized, so a couple of retries is enough.
    var tries = 0;
    var iv = setInterval(function () {
      if (fire() || ++tries > 20) clearInterval(iv);
    }, 100);
  }
})();
```

Notes:

- We deliberately *do not* strip the UTM params from the URL via `history.replaceState` — the auto-pageview has likely already captured the URL by the time `main.js` runs, and stripping it would only affect the visible address bar, not what was sent. Keeping it also means the first dashboard pageview row is filterable on `utm_source` directly, which is a useful cross-check against the `App.Referral` count.
- `window.td` is the global the Web SDK exposes (confirmed against the official JavaScript-setup docs).

## Verification

1. **Local build:** `npx @11ty/eleventy --serve`, then open `http://localhost:8080/?utm_source=android_app&utm_campaign=basic_root_checker&utm_content=home` and confirm in the **Network** tab that a request to `nom.telemetrydeck.com/v2/` fires with `App.Referral` in its body, payload containing `campaign=basic_root_checker`, `content=home`, `landing=/`.
2. **Persistence:** From the same tab, click into "About" in the nav. Confirm a *second* `App.Referral` signal fires (auto-pageview + `App.Referral`), still carrying the original `campaign`/`content`/`landing` from sessionStorage.
3. **Untagged traffic:** Open `http://localhost:8080/` in a fresh private window with no UTM params. Confirm the auto-pageview fires but **no** `App.Referral` signal is sent. Verify by inspecting Network requests.
4. **Cross-page tagging:** Open `http://localhost:8080/app/basic_root_checker/?utm_source=android_app&utm_campaign=basic_root_checker&utm_content=privacy#privacy` and confirm `App.Referral.content=privacy` and `landing=/app/basic_root_checker/`.
5. **Storage hygiene:** In DevTools → Application → Session Storage, confirm `td_referral` is set on tagged entry and survives internal navigation; opening the site in a brand-new tab without UTM params shows no `td_referral` key.
6. **Dashboard check (post-deploy):** After merging to `main` and the GitHub Pages deploy completing, confirm in the TelemetryDeck dashboard that an `App.Referral` signal type appears with sliceable `campaign`/`content` values.
