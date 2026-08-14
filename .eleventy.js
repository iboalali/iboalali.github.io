const fs = require("fs");
const markdownIt = require("markdown-it");
const md = markdownIt({ html: true });

// Eleventy configuration
module.exports = function (eleventyConfig) {

    // Build timestamp for the footer's "last updated" line. Resolved once per
    // build, so it tracks deploys (every push to main rebuilds the site).
    eleventyConfig.addGlobalData("buildDate", () =>
        new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    );

    // Canonical site origin (no trailing slash). Used to build absolute URLs
    // for the social graph / Open Graph tags, which require fully-qualified
    // image and page URLs.
    eleventyConfig.addGlobalData("siteUrl", "https://iboalali.com");

    // Add robots.txt to site
    eleventyConfig.addPassthroughCopy("robots.txt");

    // Add media folder to site
    eleventyConfig.addPassthroughCopy("media");

    // Add main JS
    eleventyConfig.addPassthroughCopy("main.js");

    // Vendored third-party JS. Currently only the TelemetryDeck JavaScript SDK
    // (@telemetrydeck/sdk), kept byte-identical to the npm dist so it can be
    // diffed against a fresh `npm pack` when updating. Self-hosted rather than
    // pulled from a CDN, for the same reason the profile photo is: no extra
    // cross-origin fetch. See the Analytics notes in CLAUDE.md.
    eleventyConfig.addPassthroughCopy("vendor");

    // add short codes to add custom html to the markdown generated site
    // https://github.com/corbindavenport/corbindavenport.github.io/blob/main/.eleventy.js
    // eleventyConfig.addShortcode

    // Profile picture shortcode. Served from the site itself (media/profile.jpg)
    // rather than Gravatar: same-origin avoids the slow cross-origin request, and
    // the optimized JPEG is a fraction of Gravatar's PNG. width/height supply the
    // intrinsic aspect ratio so the box reserves space before the image loads.
    // The photo is the LCP element on the home and about pages: fetchpriority
    // beats the browser's default Medium image priority, and the srcset variants
    // (192/384, generated from the 500px original) cover the largest display
    // size, 180px CSS on the about hero, at 1x and 2x. The 500px original stays
    // for 3x screens and as the og:image (social cards ignore srcset).
    eleventyConfig.addShortcode("profilePhoto", function (url) {
        return `<img alt="Photo of Ibrahim" class="profile-photo" src="/media/profile.jpg" srcset="/media/profile_192.jpg 192w, /media/profile_384.jpg 384w, /media/profile.jpg 500w" sizes="180px" width="500" height="500" decoding="async" fetchpriority="high">`
    });

    // App listing paired shortcode to display an app with its details
    eleventyConfig.addPairedShortcode("app", function (description, name, icon, link, packageName, repoUrl, appUrl) {
        // Create a link for the title if a URL is provided
        const title = link ? `<a href="${link}">${name}</a>` : name;
        // Create the Play Store button if a package name is provided
        const playStoreButton = packageName ? `<a href="https://play.google.com/store/apps/details?id=${packageName}&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target="_blank" class="btn-container"><img src="/media/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download ${name} from the Play Store" /></a>` : '';
        // Web apps link straight to the live URL instead of a store listing
        const openAppButton = appUrl ? `<a href="${appUrl}" rel="noopener" class="btn-container"><img src="/media/open_app_badge.svg" alt="Open ${name} in your browser" /></a>` : '';
        // Create the GitHub button if a repo URL is provided
        const githubButton = repoUrl ? `<a href="${repoUrl}" target="_blank" rel="noopener" class="btn-container"><img src="/media/github_badge.svg" alt="View ${name} source on GitHub" /></a>` : '';

        // App cards display the icon at 100px CSS, so a 128px variant covers 1x
        // screens and the 256px original covers 2x. The variant is optional: a
        // new app whose <icon>_128.png doesn't exist yet just gets the original.
        const icon128 = icon.replace(/\.png$/, "_128.png");
        const iconSrcset = fs.existsSync(`media/${icon128}`)
            ? ` srcset="/media/${icon128} 128w, /media/${icon} 256w" sizes="100px"`
            : "";

        // Return the HTML structure for an app item
        return `<div class="app-item">
            <img alt="${name} app icon" class="app-icon" src="/media/${icon}"${iconSrcset}>
            <div class="app-item-details">
                <h3>${title}</h3>
                <p>${description.trim()}</p>
                <div class="app-item-ctas">${playStoreButton}${openAppButton}${githubButton}</div>
            </div>
        </div>`;
    });

    // Heading shortcode with an anchor id for direct linking
    eleventyConfig.addShortcode("heading", function (text, id, level = 2) {
        return `<h${level} id="${id}">${text}</h${level}>`;
    });

    // Highlights callout — renders its markdown body inside an accent card
    eleventyConfig.addPairedShortcode("highlights", function (content, label = "Highlights") {
        const body = md.render(content.trim()).replace(/\n+/g, "");
        return `<aside class="highlights"><span class="highlights-label">${label}</span>${body}</aside>`;
    });

    // GitHub badge paired shortcode — body is the alt / screen-reader text
    eleventyConfig.addPairedShortcode("github", function (content, link) {
        const alt = content.trim();
        return `<a href="${link}" class="btn-container" target="_blank" rel="noopener"><img src="/media/github_badge.svg" alt="${alt}" /></a>`;
    });

    // For a per-app privacy page (/app/<slug>/privacy/), find the sibling app
    // detail page (/app/<slug>/) so the social-graph card can reuse the app's
    // own name/tagline instead of the generic developer description. Returns the
    // matching collection item, or null. Driven off collections (available in
    // templates, unlike eleventyComputed) so it never drifts from the app page
    // frontmatter — the same source the apps.json feed uses.
    eleventyConfig.addFilter("appPageForPrivacy", function (all, url) {
        if (!url || url === "/privacy/" || !url.endsWith("/privacy/")) return null;
        const appUrl = url.replace(/privacy\/$/, "");
        return (all || []).find((p) => p.url === appUrl && p.data.appName) || null;
    });

    // `data-contact` carries the platform name so the click telemetry in main.js
    // identifies the card without parsing its (potentially localized) link text.
    eleventyConfig.addShortcode("socials", function (name, link, icon) {
        return `<a href="${link}" class="icon-link" data-contact="${name.trim()}">
                  <img src="/media/${icon}" alt="${name}" class="small-icon">
                  <span>${name.trim()}</span>
                </a>`;
    });
};
