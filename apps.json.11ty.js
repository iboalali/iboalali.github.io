// Generates the localized app manifests: /apps.json (English default) plus one
// /apps.<locale>.json per extra locale in _data/locales.json. Built from the
// same app/*.md frontmatter and body that drive the detail pages, so the feed
// never drifts. Fetched by the Android apps to list sibling apps; packageName
// lets a client open the Play Store listing or launch the app on device, and
// `website` points to the web app (when there is one) or the iboalali.com page.
//
// Localization: per-locale overrides live in _data/appsI18n.js, keyed by app
// slug then locale. Each field falls back to English when no translation
// exists, so every locale file is always complete. `changelog` is always
// English (no translated history exists). Android clients request the file for
// the device language and fall back to /apps.json on 404.
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

// Overlay localized changes onto the English changelog, per version. A version
// with no translation keeps its English entry, so the changelog is always
// complete and stays in the page's version order.
function localizeChangelog(enChangelog, locMap) {
    if (!locMap) return enChangelog;
    return enChangelog.map((entry) =>
        locMap[entry.version]
            ? { version: entry.version, changes: locMap[entry.version] }
            : entry
    );
}

module.exports = class {
    data() {
        return {
            // One output file per locale; English keeps the bare /apps.json name.
            pagination: { data: "locales", size: 1, alias: "locale" },
            permalink: (data) =>
                data.locale === "en"
                    ? "/apps.json"
                    : `/apps.${data.locale}.json`,
            eleventyExcludeFromCollections: true,
        };
    }

    render(data) {
        const { collections, siteUrl, locale, appsI18n = {} } = data;

        const apps = collections.all
            .filter((item) => item.data.appName && !item.data.excludeFromAppsJson)
            // Stable order across every locale file: sort by the English name.
            .sort((a, b) => a.data.appName.localeCompare(b.data.appName))
            .map((item) => {
                const { appName, packageName, tagline, icon, appUrl } = item.data;
                const body = stripFrontMatter(fs.readFileSync(item.inputPath, "utf8"));
                const t = (appsI18n[item.fileSlug] || {})[locale] || {};
                return {
                    name: t.name || appName,
                    packageName: packageName || null,
                    description: t.description || tagline || null,
                    icon: `${siteUrl}/media/${icon}`,
                    website: appUrl || `${siteUrl}${item.url}`,
                    whatsNew: t.whatsNew || extractWhatsNew(body),
                    changelog: localizeChangelog(extractChangelog(body), t.changelog),
                };
            });

        return JSON.stringify({ locale, apps }, null, 2) + "\n";
    }
};
