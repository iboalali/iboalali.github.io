// Generates /apps.json — a static manifest of the apps showcased on this site,
// built from the same app/*.md frontmatter that drives the app detail pages so
// the two never drift. Fetched by the Android apps to list sibling apps; each
// entry's packageName lets a client open the Play Store listing or launch the
// app on device, and `website` points to the web app (when there is one) or the
// app's page on iboalali.com.
module.exports = class {
    data() {
        return {
            permalink: "/apps.json",
            eleventyExcludeFromCollections: true,
        };
    }

    render({ collections, siteUrl }) {
        const apps = collections.all
            .filter((item) => item.data.appName)
            .map((item) => {
                const { appName, packageName, tagline, icon, appUrl } = item.data;
                return {
                    name: appName,
                    packageName: packageName || null,
                    description: tagline || null,
                    icon: `${siteUrl}/media/${icon}`,
                    website: appUrl || `${siteUrl}${item.url}`,
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

        return JSON.stringify({ apps }, null, 2) + "\n";
    }
};
