// Generates the short-link stubs: one page per entry in _data/shortlinks.json
// that bounces to a real page, so iboalali.com/bb reaches /app/billboard/
// (handy for QR codes, print, and profile bios).
//
// GitHub Pages can't serve a 301: the domain's A records point straight at
// GitHub, so there is no edge in front to hold a redirect rule. Each stub is
// therefore a served page that redirects three ways, in order:
//   1. an inline location.replace(), parsed before the meta refresh below so it
//      always wins, which carries the query string and hash across (a bare meta
//      refresh drops them, and main.js reads ?utm_source= for App.Referral);
//      it also drops the slug in sessionStorage first, see "Telemetry" below;
//   2. a 0-delay meta refresh, for visitors without JS;
//   3. a plain link, if both somehow fail.
// replace() rather than assigning location keeps the stub out of session
// history, so Back doesn't bounce the visitor straight forward again.
//
// Telemetry: the stub can't fire its own TelemetryDeck signal, because it
// redirects within milliseconds and the SDK loads with `defer` (it would never
// be ready in time). Instead the stub stashes the slug in sessionStorage and the
// destination page fires Shortlink.Visit from main.js. sessionStorage rather
// than appending a query parameter keeps the visitor's address bar clean and
// avoids clobbering any utm_* the short link itself was tagged with.
//
// SEO: rel=canonical points at the real page so Google consolidates onto it.
// Deliberately no `noindex`, which would tell Google to drop the stub rather
// than follow its redirect, and would fight the canonical. Staying out of
// /sitemap.xml is handled by eleventyExcludeFromCollections instead, since
// sitemap.11ty.js builds from collections.all.

// Minimal HTML escaping for the page name, which comes from app frontmatter.
function escapeHtml(str) {
    return String(str).replace(
        /[&<>"']/g,
        (c) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );
}

module.exports = class {
    data() {
        return {
            // One stub per key in _data/shortlinks.json.
            pagination: { data: "shortlinks", size: 1, alias: "slug" },
            permalink: (data) => `/${data.slug}/`,
            eleventyExcludeFromCollections: true,
        };
    }

    render(data) {
        const { collections, siteUrl, shortlinks, slug } = data;
        const target = shortlinks[slug];

        // A short link to a page that doesn't exist is a dead hop, so fail the
        // build rather than ship one. Catches typos and pages that get renamed
        // or removed without the map being updated.
        const page = collections.all.find((item) => item.url === target);
        if (!page) {
            throw new Error(
                `shortlinks: /${slug}/ points at "${target}", which no page emits. ` +
                    `Fix it in _data/shortlinks.json. The target must match a page URL ` +
                    `exactly, trailing slash included.`
            );
        }

        const name = escapeHtml(page.data.appName || page.data.title || target);

        return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting to ${name}</title>
<link rel="canonical" href="${siteUrl}${target}">
<script>try{sessionStorage.setItem("td_shortlink",${JSON.stringify(slug)})}catch(e){}location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body>
<p>Redirecting to <a href="${target}">${name}</a>.</p>
</body>
</html>
`;
    }
};
