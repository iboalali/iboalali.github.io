# iboalali.com

Personal portfolio and Android app showcase site, built with [Eleventy (11ty)](https://www.11ty.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

## Getting Started

```bash
# Install Eleventy
npm install @11ty/eleventy

# Or install all dependencies from package.json
npm install

# Start local dev server with hot reload
npx @11ty/eleventy --serve
```

The site will be available at `http://localhost:8080/`.

## Build

```bash
npx @11ty/eleventy
```

The static site is generated into the `_site/` directory.

## Deployment

Pushing to `main` automatically builds and deploys to GitHub Pages via the GitHub Actions workflow.

## TODO

- Expand the light/dark mode toggle to include an "auto" mode that follows `prefers-color-scheme`.
- GitHub badge
- Auto-updating changelogs
