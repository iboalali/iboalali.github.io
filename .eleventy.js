const markdownIt = require("markdown-it");
const md = markdownIt({ html: true });

// Eleventy configuration
module.exports = function (eleventyConfig) {

    // Add robots.txt to site
    eleventyConfig.addPassthroughCopy("robots.txt");

    // Add media folder to site
    eleventyConfig.addPassthroughCopy("media");

    // Add main JS
    eleventyConfig.addPassthroughCopy("main.js");

    // add short codes to add custom html to the markdown generated site
    // https://github.com/corbindavenport/corbindavenport.github.io/blob/main/.eleventy.js
    // eleventyConfig.addShortcode

    // Profile picture shortcode
    eleventyConfig.addShortcode("profilePhoto", function (url) {
        return `<img alt="Photo of Ibrahim" class="profile-photo" src="https://gravatar.com/avatar/c986ffd7d07a2ae1336d5321ae0c6392?size=500">`
    });

    // App listing paired shortcode to display an app with its details
    eleventyConfig.addPairedShortcode("app", function (description, name, icon, link, packageName, repoUrl) {
        // Create a link for the title if a URL is provided
        const title = link ? `<a href="${link}">${name}</a>` : name;
        // Create the Play Store button if a package name is provided
        const playStoreButton = packageName ? `<a href="https://play.google.com/store/apps/details?id=${packageName}&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target="_blank" class="btn-container"><img src="/media/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download ${name} from the Play Store" /></a>` : '';
        // Create the GitHub button if a repo URL is provided
        const githubButton = repoUrl ? `<a href="${repoUrl}" target="_blank" rel="noopener" class="btn-container"><img src="/media/github_badge.svg" alt="View ${name} source on GitHub" /></a>` : '';

        // Return the HTML structure for an app item
        return `<div class="app-item">
            <img alt="${name} app icon" class="app-icon" src="/media/${icon}">
            <div class="app-item-details">
                <h3>${title}</h3>
                <p>${description.trim()}</p>
                <div class="app-item-ctas">${playStoreButton}${githubButton}</div>
            </div>
        </div>`;
    });

    // Heading shortcode with an anchor id for direct linking
    eleventyConfig.addShortcode("heading", function (text, id, level = 2) {
        return `<h${level} id="${id}">${text}</h${level}>`;
    });

    // What's New callout — renders its markdown body inside an accent card
    eleventyConfig.addPairedShortcode("whatsNew", function (content, label = "What's New") {
        const body = md.render(content.trim()).replace(/\n+/g, "");
        return `<aside class="whats-new"><span class="whats-new-label">${label}</span>${body}</aside>`;
    });

    // GitHub badge paired shortcode — body is the alt / screen-reader text
    eleventyConfig.addPairedShortcode("github", function (content, link) {
        const alt = content.trim();
        return `<a href="${link}" class="btn-container" target="_blank" rel="noopener"><img src="/media/github_badge.svg" alt="${alt}" /></a>`;
    });

    eleventyConfig.addShortcode("socials", function (name, link, icon) {
        return `<a href="${link}" class="icon-link">
                  <img src="/media/${icon}" alt="${name}" class="small-icon">
                  <span>${name.trim()}</span>
                </a>`;
    });
};
