# Add multi-language support with a language switcher

## Context

The site is currently English-only. Every page is a top-level Markdown file (`index.md`, `about.md`, `contact.md`, `privacy.md`, `404.md`), every app is `app/<slug>.md` with a per-app privacy page at `app/<slug>/privacy.md`, and all UI chrome (nav labels, footer, shortcode button alt-text, theme-toggle tooltips, `<html lang="en">`) is hardcoded English across `_includes/main_layout.njk`, `_includes/app_layout.njk`, `.eleventy.js`, and `main.js`.

We want to serve the site in more than one language with a visible language switcher, while keeping the existing build (Eleventy v3 → GitHub Pages), the four-mode theme toggle, the view transitions, and the TelemetryDeck analytics working unchanged.

Eleventy v3 ships an official [I18n plugin](https://www.11ty.dev/docs/plugins/i18n/) (`@11ty/eleventy/i18n` — bundled, no new dependency). It provides `locale_url`, `locale_links`, and automatic `hreflang` alternates. This plan covers the website side only; the actual translation copy is a content task tracked separately.

## Decisions to confirm before building

These change the scope materially and should be settled first:

1. **Which languages?** Plan assumes **English (default) + German**, with the structure ready to add a third. Arabic is called out separately because it pulls in RTL.
2. **RTL (Arabic)?** If Arabic is in scope, add `dir` handling and audit `styles.css` for physical vs. logical properties (margins/paddings/`left`/`right`). Decide up front — retrofitting RTL later is more work than building it in now.
3. **Translate everything, or chrome + marketing only?** App changelogs / "What's New" bodies are the bulk of the prose. Option to leave app *body* content in English initially and only localize the home, about, contact, privacy, and shared UI. The structure below supports either.

## URL strategy

Default language (English) stays at the root for backward compatibility and SEO; additional languages get a path prefix:

```
/                         en  (default — URLs unchanged from today)
/about/                   en
/app/billboard/           en
/de/                      de
/de/about/
/de/app/billboard/
/de/app/billboard/privacy/
```

Keeping English at the root means **no existing URL changes** — important because the Play Store listings, the Android apps' `?utm_source=android_app` referral links (see `docs/track-app-referrals-plan.md`), and Google Play Console privacy URLs all point at current paths.

## Approach

### 1. Locale config via directory data

Reorganize content into per-locale folders and use [Eleventy directory data files](https://www.11ty.dev/docs/data-template-dir/) so locale + permalink prefix are set once per folder instead of in every file's frontmatter.

Proposed layout:

```
content/
  en/
    en.11tydata.js        # { lang: "en", dir: "ltr" }  (no permalink prefix → root)
    index.md
    about.md
    contact.md
    privacy.md
    app/
      billboard.md
      billboard/privacy.md
      ...
  de/
    de.11tydata.js        # { lang: "de", dir: "ltr", permalink prefix "/de/" }
    index.md
    ...
```

(Exact directory naming TBD — could also keep `en` at the repo root and only nest non-default locales. Decide during implementation to minimize churn / git history noise.)

Each `*.11tydata.js` sets at minimum:
- `lang` — used for `<html lang>` and the I18n plugin
- `dir` — `"ltr"` / `"rtl"` for `<html dir>`
- a permalink computed-prefix for non-default locales

### 2. Enable the I18n plugin in `.eleventy.js`

```js
const { I18nPlugin } = require("@11ty/eleventy");
eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: "en" });
```

This adds the `locale_url(url, locale)` and `locale_links(url)` filters used by the switcher and the `hreflang` alternates.

### 3. UI string dictionary for shared chrome

Add `_data/i18n.js` (or `.json` per locale) holding the strings that live in templates/shortcodes rather than page bodies:

- Nav labels: Home / About / Contact / Privacy
- Footer: "View this site's source on GitHub", "Last updated …"
- Shortcode alt-text: "Download {app} from the Play Store", "View {app} source on GitHub"
- Theme-toggle tooltips (currently English literals in `main.js`)
- `<meta name="description">`, OG description, keywords

Templates then look up `i18n[lang].nav.home` etc. instead of literal English.

### 4. Localize the templates

- `_includes/main_layout.njk`: `<html lang="{{ lang }}" dir="{{ dir or 'ltr' }}">`; nav labels and footer from the dictionary; add `{{ locale_links(page.url) }}`-driven `hreflang` alternates in `<head>`.
- `_includes/app_layout.njk`: hero CTA / "View source" text from the dictionary.
- `.eleventy.js` shortcodes (`app`, `github`, Play Store badge alt): accept a `lang` argument or read page locale so embedded English text is translatable. Play Store and GitHub *URLs* stay identical (Google localizes the store by account).

### 5. The language switcher

A small nav control rendered from `locale_links(page.url)`, which returns the same page in the other available languages (and gracefully omits languages where the page doesn't exist).

- **Markup**: a `<nav>`/dropdown listing the alternates, placed near the theme toggle.
- **Persistence**: store the chosen language in `localStorage` (key `lang`), mirroring the existing theme-toggle pattern in `main.js`.
- **First-visit hint (optional)**: on the root page, if a stored `lang` exists and differs from the current page's language, offer/redirect to the matching localized URL. Keep it non-intrusive and JS-only so no-JS users still get the default.
- Styling reuses the theme-toggle conventions and CSS custom properties.

### 6. Theme toggle, view transitions, analytics

- **Theme toggle**: unchanged mechanism; only its tooltip strings move into the dictionary.
- **View transitions**: same-language navigations keep the existing shared-element morphs (profile photo, app icon). A language switch is a normal cross-document navigation (different document path) — no special handling needed; the existing `@view-transition` enhancement degrades fine.
- **TelemetryDeck**: the SDK and `App.Referral` signal are language-agnostic. Optionally add a `lang` attribute to pageviews later, but not required for this work.

### 7. RTL (only if Arabic is in scope)

- `<html dir="rtl">` driven by the locale `dir` data.
- Audit `media/styles.css` for hardcoded `left`/`right`, directional margins/paddings, and the nav/hero layouts; migrate to logical properties (`margin-inline-start`, `inset-inline-end`, etc.) where they affect text direction.
- Verify the theme toggle, language switcher, and view-transition positions in RTL.

## Files touched (summary)

| File | Change |
|---|---|
| `.eleventy.js` | register `I18nPlugin`; thread `lang` through shortcodes |
| `_includes/main_layout.njk` | `lang`/`dir` attrs, dictionary-driven nav + footer, `hreflang` alternates, switcher include |
| `_includes/app_layout.njk` | dictionary-driven hero CTA text |
| `_data/i18n.{js,json}` | **new** — shared UI strings per locale |
| `content/<locale>/…` | **new/moved** — per-locale page bodies + `*.11tydata.js` |
| `main.js` | tooltip strings from data; language persistence + optional redirect |
| `media/styles.css` | switcher styles; logical-property cleanup if RTL |
| `.eleventyignore` | adjust if content moves under a new top-level dir |

## Suggested rollout

1. **Proof of concept on `claude/language-support-switcher-6y2oW`**: wire the plugin, extract the chrome dictionary, and add German for just the home page + nav/footer + a working switcher. This validates the URL strategy, build output, and switcher UX before committing to full translation.
2. **Extract remaining UI strings** and confirm no hardcoded English remains in chrome.
3. **Translate the root pages** (home, about, contact, privacy).
4. **Decide on app pages** (full translation vs. English bodies) and apply.
5. **Add RTL + Arabic** as a separate pass if desired.

## Open questions

- Final list of languages and whether Arabic/RTL is in scope.
- Whether to translate app changelogs/"What's New" or keep them English.
- Default-language directory layout (English at repo root vs. nested under `content/en/`) — pick the option with the least git-history churn.
- Whether to add a `lang` dimension to TelemetryDeck pageviews now or later.
