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
    eleventyConfig.addPairedShortcode("app", function (description, name, icon, link, packageName) {
        // Create a link for the title if a URL is provided
        const title = link ? `<a href="${link}">${name}</a>` : name;
        // Create the Play Store button if a package name is provided
        const playStoreButton = packageName ? `<a href="https://play.google.com/store/apps/details?id=${packageName}&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target="_blank" class="btn-container"><img src="/media/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download ${name} from the Play Store" /></a>` : '';

        // Return the HTML structure for an app item
        return `<div class="app-item">
            <img alt="${name} app icon" class="app-icon" src="/media/${icon}">
            <div class="app-item-details">
                <h3>${title}</h3>
                <p>${description.trim()}</p>
                ${playStoreButton}
            </div>
        </div>`;
    });

    eleventyConfig.addShortcode("socials", function (name, link, icon) {
        return `<a href="${link}" class="icon-link">
                  <img src="/media/${icon}" alt="${name}" class="small-icon">
                  <span>${name.trim()}</span>
                </a>`;
    });
};
