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
- **Layouts:** `_includes/main_layout.njk` is the base HTML template with nav. `_includes/app_layout.njk` chains onto it for app detail pages, rendering a hero (icon, name, tagline, Play Store CTA) from frontmatter before the markdown body.
- **Content pages:** Top-level `.md` files (`index.md`, `about.md`, `contact.md`, `404.md`)
- **App detail pages:** `app/*.md` — use `app_layout.njk` and declare `appName`, `icon`, `packageName`, `tagline`, and `title` in frontmatter. Optional `repoUrl` adds a "View it on GitHub" badge in the hero. Body holds the What's New callout, changelog, and privacy policy.
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
- `{% app name, icon, link, packageName, repoUrl %}...{% endapp %}` — paired shortcode for app cards with Play Store and (optional) GitHub badges
- `{% socials name, link, icon %}` — social media link with icon
- `{% heading text, id, level %}` — heading with an explicit id for deep-linking (level defaults to 2)
- `{% whatsNew label %}...{% endwhatsNew %}` — paired shortcode that renders its markdown body inside an accent-bordered "What's New" callout card (label defaults to "What's New")
- `{% github url %}aria label{% endgithub %}` — paired shortcode that renders a black "View it on GitHub" badge styled to match the Play Store badge; body becomes the screen-reader label

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/eleventy_build.yml`) which builds and deploys to GitHub Pages. The `_site/` directory is the build output — it is gitignored.
