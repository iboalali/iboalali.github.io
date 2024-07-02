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

    // App icon picture shortcode
    eleventyConfig.addShortcode("appIcon", function (appName, fileName) {
        return `<img alt="${appName} app icon" class="app-icon" src="/media/${fileName}">`
    });

    // Profile picture shortcode
    eleventyConfig.addShortcode("profilePhoto", function (url) {
        return `<img alt="Photo of Ibrahim" class="profile-photo" src="https://gravatar.com/avatar/c986ffd7d07a2ae1336d5321ae0c6392?size=500">`
    });

    // Google Play Store shortcode
    eleventyConfig.addShortcode("playStoreBadge", function (appName, packageName) {
       return `<a href="https://play.google.com/store/apps/details?id=${packageName}&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1" target="_blank" class="btn-container"><img src="/media/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download ${appName} from the Play Store" /></a>`
    });

    // App clock container
    eleventyConfig.addShortcode("appBlock", function (appName, packageName, appIconFileName){
        return ''
    });
};