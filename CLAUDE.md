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
- **Social graph / SEO meta:** `main_layout.njk`'s `<head>` builds the canonical URL, Open Graph, and Twitter Card tags from frontmatter so every page gets a card. Defaults are generic (the local profile photo `media/profile.jpg` + developer description). App detail pages carry `icon`/`appName`/`tagline`, which the head auto-detects to swap in the app icon (256×256) and tagline. Any page may override the card text via a `description` frontmatter key. Absolute image/URL values are built from the `siteUrl` global data (`https://iboalali.com`, defined in `.eleventy.js`); Open Graph requires fully-qualified URLs.
- **Sitemap & indexing:** `sitemap.11ty.js` emits `/sitemap.xml` from `collections.all` — every HTML page (URL ends in `/`) that isn't marked `noindex: true`. `robots.txt` points crawlers at it. **New pages are indexed by default**, so adding an HTML page (top-level `.md`, `app/*.md`, per-app privacy page, etc.) requires no sitemap edit — it appears automatically. To keep a page *out* of search, set `noindex: true` in its frontmatter: `main_layout.njk`'s `<head>` then emits `<meta name="robots" content="noindex">` and the same flag drops it from the sitemap (this is how `404.md` is excluded). JSON feeds (`/apps*.json`) and the sitemap itself are excluded automatically (non-`/` URL and `eleventyExcludeFromCollections`). No `<lastmod>` is emitted (CI checks out fresh, so all mtimes equal build time).
- **Content pages:** Top-level `.md` files (`index.md`, `about.md`, `contact.md`, `privacy.md`, `404.md`)
- **App detail pages:** `app/*.md` — use `app_layout.njk` and declare `appName`, `icon`, `packageName`, `tagline`, and `title` in frontmatter. Optional `repoUrl` adds a "View source on GitHub" badge in the hero. Body holds the Highlights callout, changelog, and a short "Privacy Policy" section that links to the per-app privacy page.
- **Per-app privacy pages:** `app/<slug>/privacy.md` — each app has its own privacy policy at a dedicated URL (e.g. `/app/hide_persistent_notification/privacy/`). They use `main_layout.njk` with a `contact-hero` header and an `app-back-link` to the app page. Required because Google Play Console rejects a privacy URL that shares its path with the store listing URL (a `#fragment` on the app page resolves server-side to the same URL and is rejected).
- **App manifest (`/apps.json`, localized):** `apps.json.11ty.js` is a JS template (CommonJS, matching `.eleventy.js`) that emits a static JSON feed of the showcased apps, fetched by the Android apps to list/launch sibling apps. It is generated from the same `app/*.md` frontmatter *and body* as the detail pages (filters `collections.all` to pages with an `appName`), so it never drifts. Each top-level file is `{ locale, apps: [...] }`; each app entry is `{ name (appName), packageName (null for web-only apps like Icon Recomposer), description (tagline), icon (absolute `siteUrl`/media URL to the 256×256 PNG), website (`appUrl` if set, else the app's iboalali.com detail page), highlights (array of the `{% highlights %}` callout's bullets, or `[]`), changelog (array of `{ version, changes[] }`, newest first) }`, sorted by English name (stable order across all locale files). `highlights` and `changelog` are parsed out of the rendered markdown body (the `{% highlights %}` block and the `## Changelog` section) by the template, so the feed mirrors what a visitor sees. The parser strips the `Version`/trailing-colon decoration from `### Version X:` headings (so `version` is a bare label like `2.4`) and keeps each bullet's text verbatim (emoji included). Add `excludeFromAppsJson: true` to an app page's frontmatter to keep it out (used for work-in-progress apps such as Book Keeper); new apps are included by default.
  - **Localization (file-per-locale):** the template paginates over `_data/locales.json` (`["en","de","ar","es","ru"]`), writing English to `/apps.json` and each other locale to `/apps.<locale>.json` (e.g. `/apps.de.json`). Android clients request the file matching the device language and fall back to `/apps.json` on 404; the `locale` field tells them which they got. Per-locale, per-app overrides live in `_data/appsI18n.js`, keyed by app page slug then locale. Each overridable field (`name`, `description`, `highlights`, and `changelog`) falls back to the English value when a translation is absent, so every locale file is always complete. `changelog` is a `version -> [bullets]` map merged onto the English changelog per version (`localizeChangelog` in the template), so a version with no translation keeps its English entry. All four apps are currently fully translated in de/ar/es/ru (name only where it differs, i.e. Basic Root Checker's Arabic). Provenance is documented per app in `_data/appsI18n.js`: where the app repos ship localized Play Store metadata it is reused verbatim (Basic Root Checker Listing short descriptions + 2.2–2.4 release notes; Hide Persistent Notification 2.0 de release notes), and everything else was translated for this site (review-worthy, especially ar/ru). The GitHub Actions build only sees this repo, so those translations must be copied into `_data/appsI18n.js` — they cannot be read live from the app repos. File-per-locale was chosen over one big multi-locale file so each device downloads only its own ~7 KB gzipped, regardless of how many locales exist.
  - Served with `content-type: application/json` and `access-control-allow-origin: *` by GitHub Pages, gzip-compressed (~7 KB over the wire). The build outputs `_site/apps*.json` are gitignored — only the template and `_data` sources are committed.
  - **Full reference:** `docs/apps-json.md` is the complete spec — schema, fallback semantics, Android consumer guide, serving characteristics, and the maintainer guide for adding apps/locales/translations.
- **Styling:** Single stylesheet at `media/styles.css`
- **Responsive images:** `media/` holds pre-generated smaller variants next to the originals: `profile_192.jpg` / `profile_384.jpg` (from the 500px `profile.jpg`, which stays for 3x screens and as the og:image) and `<icon>_128.png` for each home-page app icon (the 256px original stays for 2x screens, og:image, and apps.json). The `profilePhoto` and `app` shortcodes emit `srcset`/`sizes` pointing at them; the profile photo also gets `fetchpriority="high"` because it is the LCP element on the home and about pages. The `app` shortcode only adds `srcset` when `media/<icon>_128.png` exists, so a new app works without a variant (it just serves the 256px file at all densities) — generate the `_128` variant when adding an app (no ImageMagick/sharp on this machine; resize via headless Chrome canvas)
- **Client JS:** `main.js` — opens external links in new tabs, handles a four-mode (light → dark → paper → auto) theme toggle with tooltip and localStorage persistence (firing a debounced `Theme.Toggle` TelemetryDeck signal carrying the burst's start `from` mode and resting `to` mode), fires the `App.Referral` TelemetryDeck signal for sessions that landed via `?utm_source=android_app`, and tags the navigating home-page app icon for the shared-element view transition (see below)
- **Static assets:** `media/` — images, icons, CSS (passed through via Eleventy config)
- **Analytics:** TelemetryDeck Web SDK loaded in `_includes/main_layout.njk` with `defer` so the cross-origin CDN fetch never blocks first paint — keep the attribute, and keep guarding every `window.td` call (main.js already guards, and the `App.Referral` signal polls up to 10s for the SDK to appear). App ID `2D083718-D442-4A8E-B797-68F24ADD0C7E`. Auto-pageview plus the custom `App.Referral`, `Theme.Toggle`, and `Contact.Click` signals (see `main.js` and `docs/track-app-referrals-plan.md`). `Contact.Click` fires when a visitor opens one of the contact-page social cards, with `Contact.Click.platform` naming the platform (Mastodon/Github/LinkedIn/Bluesky); the platform comes from the card's `data-contact` attribute set by the `socials` shortcode. Dashboard query recipes live in `docs/telemetrydeck-queries.md`; current signal schema is exported to `docs/iboalali-com-StructuralData.json` and reference TQL syntax is at `docs/TQL-Guideline-v0.1.0.md`
- **Site footer:** `_includes/main_layout.njk` renders a "View this site's source on GitHub" link below `<main>`
- **Ignored by Eleventy:** `.eleventyignore` lists `CLAUDE.md` (to prevent template processing of `{% %}` examples), `docs/` (in-repo planning docs), `DOMAIN_SETUP.md` (setup notes, not a published page), and `.claude/` (Claude Code writes `.claude/settings.local.json` on permission changes, which otherwise triggers a rebuild + live-reload loop during dev-server sessions)

## Source Project Paths (local)

Local checkouts of the apps showcased on this site, recorded for fast access when updating an app page's changelog/version (e.g. `app/<slug>.md`) from its source project's `CHANGELOG.md`. Each app page is updated from the corresponding source project — these paths avoid having to search for the project each time.

| App (website) | App page | Source project path |
| --- | --- | --- |
| Icon Recomposer | `app/icon_recomposer.md` | `/home/iboalali/Documents/Icon Recomposer` |
| Hide Persistent Notification | `app/hide_persistent_notification.md` | `/home/iboalali/Projects/private/android/Hide-Persistent-Notification` |
| Book Keeper | `app/book_keeper.md` | `/home/iboalali/Projects/private/android/book-keeper` |
| Billboard | `app/billboard.md` | `/home/iboalali/Projects/private/android/Billboard` |
| Basic Root Checker | `app/basic_root_checker.md` | `/home/iboalali/Projects/private/android/Basic-Root-Checker` |

Maintenance: these paths cover only apps already on the site. When a project moves or a new app is added to the site, re-scan the project roots (`/home/iboalali/Projects/private/android/`, `/home/iboalali/Projects/private/`, `/home/iboalali/Documents/`) and update the path here. Don't add a project that isn't on the site unless explicitly asked.

## Theming

CSS uses custom properties (defined on `:root` in `media/styles.css`) for all theme-dependent colors. The toggle button cycles through four modes — **light → dark → paper → auto** — and theming works via:
1. **OS preference** — `@media (prefers-color-scheme: dark)` overrides variables when no user choice is stored (auto mode)
2. **Explicit toggle** — `[data-theme="dark"]` / `[data-theme="light"]` / `[data-theme="paper"]` on `<html>`; in auto mode the attribute is *removed* so OS preference takes over
3. **Persistence** — `localStorage.getItem('theme')` is applied in an inline `<script>` in `<head>` before paint to prevent flash; auto mode clears the key

Key variables: `--bg`, `--text`, `--accent`, `--border`, `--shadow-accent`. Light accent is `#B37FDF` (purple), dark accent is `#9adefe` (blue). When adding new themed elements, use these variables rather than hardcoded colors.

**Paper** is an e-ink-friendly mode: warm paper background, ink-colored accent, grayscale images, and *all* motion flattened — `* { animation/transition: none !important }` rules at the bottom of `styles.css`, plus separate `::view-transition-*` overrides (the `*` selector doesn't match those pseudo-elements) so navigations are instant page swaps.

**E-ink auto-detection:** in auto mode (no stored preference), e-ink readers automatically get the Paper theme. The pre-paint head script in `main_layout.njk` detects them via `matchMedia('(update: slow)')` (the standards signal for e-ink's slow refresh) plus a UA allowlist of dedicated reader brands (Kindle, Kobo, PocketBook, Tolino, Bookeen, BOOX, reMarkable, NOOK) for browsers predating that media feature. On a match it adds `html.eink-paper` — *not* `data-theme`, so the mode stays "auto" (the toggle keeps working and cycling back to auto re-applies paper). Each Paper rule in `styles.css` carries a parallel `:root.eink-paper:not([data-theme])` selector; the `:not([data-theme])` guard means any explicit toggle choice still overrides the auto-detected paper.

## View Transitions & Motion

- **Cross-document view transitions** (`@view-transition { navigation: auto }` in `styles.css`) morph shared elements between pages as progressive enhancement — unsupported browsers navigate normally. Two shared elements: the **profile photo** (home ↔ about; appears once per page, so a static `view-transition-name` in CSS suffices) and the **app icon** (home ↔ app detail; the home page has several icons, so `main.js` tags the one involved in the current navigation from `pageswap`/`pagereveal`)
- **Entry reveals are suppressed during transitions:** the `fadein`/`about-reveal` load-in animations double as loading animations and must not replay while shared elements morph. An inline head script in `main_layout.njk` toggles `html.via-vt` from `pagereveal`; `styles.css` disables the reveals under that class. The listener must live in the inline head script (not `main.js`, which loads at end of body) because `pagereveal` fires before first render on fresh loads
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` makes interaction animations near-instant (tiny durations so `animationend`/`transitionend` still fire) and silences `::view-transition-*` separately, same caveat as Paper

## Custom Shortcodes (defined in .eleventy.js)

- `{% profilePhoto %}` — local profile image (`media/profile.jpg`, served same-origin) with a `srcset` of the 192/384 variants and `fetchpriority="high"` (it's the LCP element where it appears)
- `{% app name, icon, link, packageName, repoUrl %}...{% endapp %}` — paired shortcode for app cards with Play Store and (optional) GitHub badges; adds an icon `srcset` when a `media/<icon>_128.png` variant exists
- `{% socials name, link, icon %}` — social media link with icon
- `{% heading text, id, level %}` — heading with an explicit id for deep-linking (level defaults to 2)
- `{% highlights label %}...{% endhighlights %}` — paired shortcode that renders its markdown body inside an accent-bordered "Highlights" callout card (label defaults to "Highlights")
- `{% github url %}aria label{% endgithub %}` — paired shortcode that renders a black "View source on GitHub" badge styled to match the Play Store badge; body becomes the screen-reader label

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/eleventy_build.yml`) which builds and deploys to GitHub Pages. The `_site/` directory is the build output — it is gitignored.
