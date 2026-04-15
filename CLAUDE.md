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

## Architecture

- **Static site generator:** Eleventy with Nunjucks templates and Markdown content
- **Single layout:** `_includes/main_layout.njk` — base HTML template used by all pages, includes nav with active page highlighting via `page.url`
- **Content pages:** Top-level `.md` files (`index.md`, `about.md`, `contact.md`, `404.md`)
- **App detail pages:** `app/*.md` — each Android app has its own page with changelog and privacy policy
- **Styling:** Single stylesheet at `media/styles.css`
- **Client JS:** `main.js` — opens external links in new tabs, handles dark/light theme toggle with localStorage persistence
- **Static assets:** `media/` — images, icons, CSS (passed through via Eleventy config)
- **Ignored by Eleventy:** `CLAUDE.md` is listed in `.eleventyignore` to prevent template processing of `{% %}` examples

## Theming

CSS uses custom properties (defined on `:root` in `media/styles.css`) for all theme-dependent colors. Dark mode is supported three ways:
1. **OS preference** — `@media (prefers-color-scheme: dark)` overrides variables when no user choice is stored
2. **Explicit toggle** — `[data-theme="dark"]` / `[data-theme="light"]` on `<html>`, set by the toggle button
3. **Persistence** — `localStorage.getItem('theme')` is applied in an inline `<script>` in `<head>` before paint to prevent flash

Key variables: `--bg`, `--text`, `--accent`, `--border`, `--shadow-accent`. Light accent is `#B37FDF` (purple), dark accent is `#9adefe` (blue). When adding new themed elements, use these variables rather than hardcoded colors.

## Custom Shortcodes (defined in .eleventy.js)

- `{% profilePhoto %}` — Gravatar profile image
- `{% app name, icon, link, packageName %}...{% endapp %}` — paired shortcode for app cards with Play Store badges
- `{% socials name, link, icon %}` — social media link with icon

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/eleventy_build.yml`) which builds and deploys to GitHub Pages. The `_site/` directory is the build output — it is gitignored.
