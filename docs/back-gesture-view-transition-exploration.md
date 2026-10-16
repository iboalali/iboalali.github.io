# Android back-gesture animation & the site's view transitions (exploration)

> Status: **exploration / future work** — no code shipped. Captures what is
> possible, what is not, and the one convergence worth waiting for.

## Question

Can Android Chrome's back-gesture animation (the iOS-like "peek the previous
page" when you edge-swipe back) be integrated into this site's back navigation?

## The two things people mean by "the back gesture animation"

These have very different answers, and conflating them is the main trap.

### 1. The browser's native gesture *peek* — not ours to build

Chrome on Android ships **"back/forward visual transitions"**: edge-swiping back
shows a live, finger-tracking, interruptible preview of the previous page,
rendered from a **bfcache** snapshot. As of writing it's behind a `chrome://flags`
entry in phased rollout (Chrome 138+).

- It is **not a web API.** There is no JavaScript hook exposing the gesture's
  progress / `fractionComplete` for a cross-document (multi-page) navigation.
  The interactive scrubbing is entirely the browser's domain — unlike iOS UIKit,
  where the app drives `fractionComplete` itself.
- We **cannot replicate** the finger-following peek on a static MPA. True
  gesture-scrubbed control would require becoming a SPA and intercepting the back
  gesture ourselves — which fights the browser's own back gesture, breaks
  bfcache, and is a massive change for a ~5-page 11ty site. Not worth it.
- Visitors on modern Chrome **already get this peek for free**, with zero code.
  It composes with bfcache. The site is already bfcache-friendly: `main.js` only
  uses `pagehide` / `visibilitychange` (no `unload`), so nothing blocks the
  snapshot.

### 2. A direction-aware page animation — this we *can* do

Make back navigation animate **differently** from forward (e.g. incoming page
slides in from the left on back, exits right on forward), layered on top of the
shared-element morphs we already run. Mechanism: **view transition types** (CSS
View Transitions Level 2). See the companion notes at the end for where this
slots into the existing `pageswap` / `pagereveal` handlers. This is the realistic
"integration" target and is purely additive / progressive enhancement.

## The convergence worth tracking (the actual future-work item)

The two items above are starting to meet: Chrome is moving toward letting the
back **gesture drive the page's *own* cross-document view transition**, instead
of always playing a generic browser crossfade/peek.

What this means in practice:

- **We define the animation, the browser decides whether to scrub it.** The web
  author's role stays declarative — opt in with `@view-transition { navigation:
  auto }` (already present) and describe the back transition via CSS + view
  transition types. The browser, when it supports gesture-driven traversals,
  attaches the user's edge-swipe to *that* transition: the further you drag, the
  further our animation advances; release past threshold commits it, release
  early reverses it. We never see `fractionComplete` ourselves.
- **The better our back transition is defined, the more we get from the
  gesture.** A site with no defined back animation gets the browser's default
  peek. A site that has tagged a proper directional back transition (item 2)
  gives the gesture something bespoke to scrub. So shipping item 2 is also how we
  "prepare" for gesture-driven transitions — there is no separate gesture API to
  adopt later; the same CSS/types work is what the gesture will animate.
- **Interruptibility is handled for us.** Reverse-on-release, mid-gesture
  cancellation, and progress tracking are the browser's responsibility under this
  model. We do not (and cannot) hand-write the scrubbing logic.

### What to watch for before acting

- The **CSS View Transitions Level 2** spec and Chrome's cross-document docs for
  any explicit statement that **traverse** (back/forward) navigations are
  gesture-driven / interruptible, and whether that requires a new opt-in beyond
  `navigation: auto`.
- Whether a new event or property surfaces *any* author-visible progress for
  traversals (today: none). If one appears, re-evaluate whether a richer custom
  back animation becomes worthwhile.
- The flag graduating from `chrome://flags` ("back-forward visual transitions")
  to stable-on-by-default, and whether it then prefers the page's declared view
  transition over the browser default.
- Firefox/Safari status — today this is Chromium-Android-centric; treat anything
  built as progressive enhancement that degrades to a plain navigation.

## Recommendation

- **Do not** chase the finger-tracking peek directly — it is not exposed to the
  web and chasing it means abandoning the clean static MPA. Let Chrome provide it.
- **Do** (whenever we pick this up) add the direction-aware slide via view
  transition types. It is the low-risk, additive piece — and it is the same work
  the native gesture will eventually drive, so it is future-proof rather than
  throwaway.

## Implementation notes for item 2 (when we pick it up)

We already have the scaffolding:

- `@view-transition { navigation: auto }` in `media/styles.css` — **already fires
  on back/forward** (the spec's `traverse` type), so the profile-photo and
  app-icon morphs run on back nav today.
- `pageswap` / `pagereveal` handlers in `main.js` already read `e.activation` and
  `navigation.activation.from` to work out direction.

Sketch of the additive change:

1. In the existing handlers, detect direction. `navigation.activation
   .navigationType === 'traverse'` flags a back/forward; comparing
   `navigation.activation.from.index` vs `.entry.index` tells you **which way**.
2. Tag the transition with a type (`back` / `forward`).
3. In CSS, scope keyframes with `:active-view-transition-type(back)` /
   `(forward)` so each direction slides differently; shared-element morphs keep
   running on top.

Things the current architecture already handles, so this stays low-risk:

- **Paper mode & reduced-motion:** the existing
  `::view-transition-group(*)/old(*)/new(*) { animation: none !important }`
  blocks use the universal `(*)` selector, so any new directional keyframes are
  auto-silenced there. No extra work.
- **Reveal suppression:** the `html.via-vt` toggle that stops entry reveals from
  replaying during a transition already covers back nav (set from `pagereveal`),
  so a directional slide slots into the same machinery.

## Sources

- Cross-document view transitions for MPAs — Chrome for Developers:
  https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- Using view transition types — MDN:
  https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using_types
- CSS View Transitions Module Level 2 — W3C:
  https://www.w3.org/TR/css-view-transitions-2/
- Cross-Document View Transitions: The Gotchas Nobody Mentions — CSS-Tricks:
  https://css-tricks.com/cross-document-view-transitions-part-1/
- Chrome's back/forward visual transitions (gesture peek) — Android Police:
  https://www.androidpolice.com/google-chrome-predictive-back-animation-rolling-out/
- Google testing iOS-like page transitions in Chrome Android — Android Authority:
  https://www.androidauthority.com/google-chrome-back-forward-animations-3582562/
