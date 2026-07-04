// Generates /sitemap.xml listing the site's canonical, indexable HTML pages so
// Google can discover them and pick the right canonical. Built from
// collections.all: every page whose URL ends in "/" (the HTML pages) that isn't
// marked `noindex`. That filter naturally excludes the JSON feeds (/apps*.json,
// whose URLs don't end in "/"), the 404 page (noindex: true), and the sitemap
// itself (eleventyExcludeFromCollections). robots.txt points crawlers here.
//
// No <lastmod>: GitHub Actions checks out fresh, so file mtimes all equal the
// build time and would make every lastmod identical (and useless). Omitting it
// is valid and avoids feeding Google misleading dates.
module.exports = class {
    data() {
        return {
            permalink: "/sitemap.xml",
            eleventyExcludeFromCollections: true,
        };
    }

    render(data) {
        const { collections, siteUrl } = data;

        const urls = collections.all
            .filter((item) => item.url && item.url.endsWith("/") && !item.data.noindex)
            .map((item) => `${siteUrl}${item.url}`)
            .sort();

        const entries = urls
            .map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`)
            .join("\n");

        return (
            `<?xml version="1.0" encoding="UTF-8"?>\n` +
            `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `${entries}\n` +
            `</urlset>\n`
        );
    }
};
