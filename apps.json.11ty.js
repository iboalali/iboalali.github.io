// Generates /apps.json — a static manifest of the apps showcased on this site,
// built from the same app/*.md frontmatter and body that drive the app detail
// pages so the two never drift. Fetched by the Android apps to list sibling
// apps; each entry's packageName lets a client open the Play Store listing or
// launch the app on device, and `website` points to the web app (when there is
// one) or the app's page on iboalali.com.
//
// `whatsNew` and `changelog` are parsed straight out of each page's markdown
// body — the same `{% whatsNew %}` callout and `## Changelog` section the page
// renders — so the feed mirrors what a visitor sees.
const fs = require("fs");

// Drop the leading YAML frontmatter block so we parse only the markdown body.
function stripFrontMatter(raw) {
    return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

// Pull the text out of a `- ` / `* ` list item, or null for non-list lines.
function bulletText(line) {
    const m = line.match(/^\s*[-*]\s+(.*\S)\s*$/);
    return m ? m[1] : null;
}

// Normalize a `### Version 2.4:` heading to a bare version label ("2.4").
function versionLabel(heading) {
    return heading.trim().replace(/:\s*$/, "").replace(/^Version\s+/i, "");
}

// Bullets inside the `{% whatsNew %}...{% endwhatsNew %}` callout, in order.
function extractWhatsNew(body) {
    const m = body.match(
        /\{%-?\s*whatsNew[^%]*%\}([\s\S]*?)\{%-?\s*endwhatsNew\s*-?%\}/
    );
    if (!m) return [];
    return m[1].split(/\r?\n/).map(bulletText).filter(Boolean);
}

// The `## Changelog` section as [{ version, changes: [...] }], newest first
// (preserving page order). Ends at the next `##` heading (e.g. Privacy Policy).
function extractChangelog(body) {
    const entries = [];
    let inChangelog = false;
    let current = null;
    for (const line of body.split(/\r?\n/)) {
        if (/^##\s+/.test(line)) {
            if (/^##\s+Changelog\s*$/i.test(line)) {
                inChangelog = true;
                continue;
            }
            if (inChangelog) break; // next top-level section closes the changelog
        }
        if (!inChangelog) continue;

        const heading = line.match(/^###\s+(.*)$/);
        if (heading) {
            current = { version: versionLabel(heading[1]), changes: [] };
            entries.push(current);
            continue;
        }
        const bullet = bulletText(line);
        if (bullet && current) current.changes.push(bullet);
    }
    return entries;
}

module.exports = class {
    data() {
        return {
            permalink: "/apps.json",
            eleventyExcludeFromCollections: true,
        };
    }

    render({ collections, siteUrl }) {
        const apps = collections.all
            .filter((item) => item.data.appName && !item.data.excludeFromAppsJson)
            .map((item) => {
                const { appName, packageName, tagline, icon, appUrl } = item.data;
                const body = stripFrontMatter(fs.readFileSync(item.inputPath, "utf8"));
                return {
                    name: appName,
                    packageName: packageName || null,
                    description: tagline || null,
                    icon: `${siteUrl}/media/${icon}`,
                    website: appUrl || `${siteUrl}${item.url}`,
                    whatsNew: extractWhatsNew(body),
                    changelog: extractChangelog(body),
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

        return JSON.stringify({ apps }, null, 2) + "\n";
    }
};
