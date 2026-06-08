# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and Android app showcase site for Ibrahim Al-Alali, built with **Eleventy (11ty) v3** and hosted on GitHub Pages at iboalali.com.

## Build & Development Commands

```bash
npm install                  # Install dependencies
npx @11ty/eleventy           # Build static site to _site/
npx @11ty/eleventy --serve   # Local dev server with hot reload
```

There are no test or lint scripts configured.

**Termux quirk:** `npx @11ty/eleventy` fails with `eleventy: not found` because the `node_modules/.bin` wrappers use a `#!/usr/bin/env` shebang, and `/usr/bin/env` doesn't exist on Termux. Workarounds: invoke via node directly (`node ./node_modules/.bin/eleventy --serve`) or run `termux-fix-shebang node_modules/.bin/*` once after `npm install`.

## Architecture

- **Static site generator:** Eleventy with Nunjucks templates and Markdown content
- **Layouts:** `_includes/main_layout.njk` is the base HTML template with nav. `_includes/app_layout.njk` chains onto it for app detail pages, rendering a hero (icon, name, tagline, Play Store CTA) from frontmatter before the markdown body.
- **Social graph / SEO meta:** `main_layout.njk`'s `<head>` builds the canonical URL, Open Graph, and Twitter Card tags from frontmatter so every page gets a card. Defaults are generic (gravatar image + developer description). App detail pages carry `icon`/`appName`/`tagline`, which the head auto-detects to swap in the app icon (256×256) and tagline. Any page may override the card text via a `description` frontmatter key. Absolute image/URL values are built from the `siteUrl` global data (`https://iboalali.com`, defined in `.eleventy.js`); Open Graph requires fully-qualified URLs.
- **Content pages:** Top-level `.md` files (`index.md`, `about.md`, `contact.md`, `privacy.md`, `404.md`)
- **App detail pages:** `app/*.md` — use `app_layout.njk` and declare `appName`, `icon`, `packageName`, `tagline`, and `title` in frontmatter. Optional `repoUrl` adds a "View source on GitHub" badge in the hero. Body holds the What's New callout, changelog, and a short "Privacy Policy" section that links to the per-app privacy page.
- **Per-app privacy pages:** `app/<slug>/privacy.md` — each app has its own privacy policy at a dedicated URL (e.g. `/app/hide_persistent_notification/privacy/`). They use `main_layout.njk` with a `contact-hero` header and an `app-back-link` to the app page. Required because Google Play Console rejects a privacy URL that shares its path with the store listing URL (a `#fragment` on the app page resolves server-side to the same URL and is rejected).
- **Styling:** Single stylesheet at `media/styles.css`
- **Client JS:** `main.js` — opens external links in new tabs, handles a four-mode (light → dark → paper → auto) theme toggle with tooltip and localStorage persistence (firing a debounced `Theme.Toggle` TelemetryDeck signal carrying the burst's start `from` mode and resting `to` mode), fires the `App.Referral` TelemetryDeck signal for sessions that landed via `?utm_source=android_app`, and tags the navigating home-page app icon for the shared-element view transition (see below)
- **Static assets:** `media/` — images, icons, CSS (passed through via Eleventy config)
- **Analytics:** TelemetryDeck Web SDK loaded in `_includes/main_layout.njk`. App ID `2D083718-D442-4A8E-B797-68F24ADD0C7E`. Auto-pageview plus the custom `App.Referral` and `Theme.Toggle` signals (see `main.js` and `docs/track-app-referrals-plan.md`). Dashboard query recipes live in `docs/telemetrydeck-queries.md`; current signal schema is exported to `docs/iboalali-com-StructuralData.json` and reference TQL syntax is at `docs/TQL-Guideline-v0.1.0.md`
- **Site footer:** `_includes/main_layout.njk` renders a "View this site's source on GitHub" link below `<main>`
- **Ignored by Eleventy:** `.eleventyignore` lists `CLAUDE.md` (to prevent template processing of `{% %}` examples), `docs/` (in-repo planning docs), and `DOMAIN_SETUP.md` (setup notes, not a published page)

## Theming

CSS uses custom properties (defined on `:root` in `media/styles.css`) for all theme-dependent colors. The toggle button cycles through four modes — **light → dark → paper → auto** — and theming works via:
1. **OS preference** — `@media (prefers-color-scheme: dark)` overrides variables when no user choice is stored (auto mode)
2. **Explicit toggle** — `[data-theme="dark"]` / `[data-theme="light"]` / `[data-theme="paper"]` on `<html>`; in auto mode the attribute is *removed* so OS preference takes over
3. **Persistence** — `localStorage.getItem('theme')` is applied in an inline `<script>` in `<head>` before paint to prevent flash; auto mode clears the key

Key variables: `--bg`, `--text`, `--accent`, `--border`, `--shadow-accent`. Light accent is `#B37FDF` (purple), dark accent is `#9adefe` (blue). When adding new themed elements, use these variables rather than hardcoded colors.

**Paper** is an e-ink-friendly mode: warm paper background, ink-colored accent, grayscale images, and *all* motion flattened — `* { animation/transition: none !important }` rules at the bottom of `styles.css`, plus separate `::view-transition-*` overrides (the `*` selector doesn't match those pseudo-elements) so navigations are instant page swaps.

## View Transitions & Motion

- **Cross-document view transitions** (`@view-transition { navigation: auto }` in `styles.css`) morph shared elements between pages as progressive enhancement — unsupported browsers navigate normally. Two shared elements: the **profile photo** (home ↔ about; appears once per page, so a static `view-transition-name` in CSS suffices) and the **app icon** (home ↔ app detail; the home page has several icons, so `main.js` tags the one involved in the current navigation from `pageswap`/`pagereveal`)
- **Entry reveals are suppressed during transitions:** the `fadein`/`about-reveal` load-in animations double as loading animations and must not replay while shared elements morph. An inline head script in `main_layout.njk` toggles `html.via-vt` from `pagereveal`; `styles.css` disables the reveals under that class. The listener must live in the inline head script (not `main.js`, which loads at end of body) because `pagereveal` fires before first render on fresh loads
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` makes interaction animations near-instant (tiny durations so `animationend`/`transitionend` still fire) and silences `::view-transition-*` separately, same caveat as Paper

## Custom Shortcodes (defined in .eleventy.js)

- `{% profilePhoto %}` — Gravatar profile image
- `{% app name, icon, link, packageName, repoUrl %}...{% endapp %}` — paired shortcode for app cards with Play Store and (optional) GitHub badges
- `{% socials name, link, icon %}` — social media link with icon
- `{% heading text, id, level %}` — heading with an explicit id for deep-linking (level defaults to 2)
- `{% whatsNew label %}...{% endwhatsNew %}` — paired shortcode that renders its markdown body inside an accent-bordered "What's New" callout card (label defaults to "What's New")
- `{% github url %}aria label{% endgithub %}` — paired shortcode that renders a black "View source on GitHub" badge styled to match the Play Store badge; body becomes the screen-reader label

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/eleventy_build.yml`) which builds and deploys to GitHub Pages. The `_site/` directory is the build output — it is gitignored.
