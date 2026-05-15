# TelemetryDeck Custom Queries — iboalali.com

Paste-ready TQL queries for the TelemetryDeck dashboard.

- **App ID:** `2D083718-D442-4A8E-B797-68F24ADD0C7E`
- **App name:** iboalali.com
- **Signal types tracked:** `pageview` only (Web SDK auto-pageview)
- **Custom signal (planned):** `App.Referral` (fires only when `utm_source=android_app`; not yet present in the structural data export)

## How to use

1. Open the TelemetryDeck dashboard, create a new insight, switch to **Custom Query** / **JSON** mode.
2. Paste one of the JSON blocks below.
3. Save. The `appID` and `baseFilters: "thisApp"` are already wired up.

If you're building inside the dashboard's Visual Query Editor, ignore `appID` and `baseFilters` (they're auto-filled). The values above are needed only when calling the Query API directly.

## Available dimensions

These are the queryable fields on the `pageview` signal, exported 2026-05-15:

```
url, host, path, scheme, referrer, combinedSource
utm_source, utm_campaign, utm_content
browser, browserVersion, device
isDesktop, isMobile, isTablet, isTouchCapable, isBot
country.isoCode, country.isInEuropeanUnion, continent.code
telemetryAPIVersion, TelemetryDeck.API.Ingest.version
TelemetryDeck.Navigation.identifier, TelemetryDeck.SDK.nameAndVersion
```

Note: the dimension is spelled `referrer` (two r's), not `referer` as some TelemetryDeck docs suggest.

## Queries

### 1. Top Android apps driving traffic

Ranks `utm_campaign` values (one per Android app package) by unique visitor count.

```json
{
  "queryType": "topN",
  "granularity": "all",
  "threshold": 10,
  "dimension": { "type": "default", "dimension": "utm_campaign", "outputName": "App" },
  "metric": { "type": "numeric", "metric": "users" },
  "aggregations": [{ "type": "userCount", "name": "users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "utm_source", "value": "android_app" },
      { "type": "selector", "dimension": "isBot", "value": "False" }
    ]
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 2. In-app placement performance

Which in-app screen / link sends visitors, via `utm_content`.

```json
{
  "queryType": "topN",
  "granularity": "all",
  "threshold": 20,
  "dimension": { "type": "default", "dimension": "utm_content", "outputName": "Placement" },
  "metric": { "type": "numeric", "metric": "users" },
  "aggregations": [{ "type": "userCount", "name": "users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "utm_source", "value": "android_app" },
      { "type": "selector", "dimension": "isBot", "value": "False" }
    ]
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 3. Daily app-referred visitors

Trend line for app-attributed traffic.

```json
{
  "queryType": "timeseries",
  "granularity": "day",
  "aggregations": [{ "type": "userCount", "name": "App-Referred Users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "utm_source", "value": "android_app" },
      { "type": "selector", "dimension": "isBot", "value": "False" }
    ]
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 4. App × placement matrix

Cross-tab of `utm_campaign` and `utm_content`. Highlights the best (app, screen) pairs.

```json
{
  "queryType": "groupBy",
  "granularity": "all",
  "dimensions": ["utm_campaign", "utm_content"],
  "aggregations": [{ "type": "userCount", "name": "Users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "utm_source", "value": "android_app" },
      { "type": "selector", "dimension": "isBot", "value": "False" }
    ]
  },
  "limitSpec": {
    "type": "default",
    "columns": [{ "dimension": "Users", "direction": "descending" }],
    "limit": 100
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 5. App vs. organic split

Two lines on one chart: app-referred users vs. everyone else.

```json
{
  "queryType": "timeseries",
  "granularity": "day",
  "aggregations": [
    {
      "type": "filtered",
      "name": "_AppReferred_Filtered",
      "filter": { "type": "selector", "dimension": "utm_source", "value": "android_app" },
      "aggregator": { "type": "thetaSketch", "name": "App-Referred Users", "fieldName": "clientUser" }
    },
    {
      "type": "filtered",
      "name": "_Organic_Filtered",
      "filter": { "type": "not", "field": { "type": "selector", "dimension": "utm_source", "value": "android_app" } },
      "aggregator": { "type": "thetaSketch", "name": "Organic Users", "fieldName": "clientUser" }
    }
  ],
  "filter": { "type": "selector", "dimension": "isBot", "value": "False" },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 6. Top pages

Most-viewed paths on the site.

```json
{
  "queryType": "topN",
  "granularity": "all",
  "threshold": 20,
  "dimension": { "type": "default", "dimension": "path", "outputName": "Page" },
  "metric": { "type": "numeric", "metric": "views" },
  "aggregations": [{ "type": "eventCount", "name": "views" }],
  "filter": { "type": "selector", "dimension": "isBot", "value": "False" },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 7. Top referrers

External sites sending traffic. Excludes empty (direct) and bot hits.

```json
{
  "queryType": "topN",
  "granularity": "all",
  "threshold": 20,
  "dimension": { "type": "default", "dimension": "referrer", "outputName": "Referrer" },
  "metric": { "type": "numeric", "metric": "users" },
  "aggregations": [{ "type": "userCount", "name": "users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "isBot", "value": "False" },
      { "type": "not", "field": { "type": "selector", "dimension": "referrer", "value": "" } }
    ]
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

### 8. Country breakdown

Where visitors are coming from (ISO country code).

```json
{
  "queryType": "topN",
  "granularity": "all",
  "threshold": 20,
  "dimension": { "type": "default", "dimension": "country.isoCode", "outputName": "Country" },
  "metric": { "type": "numeric", "metric": "users" },
  "aggregations": [{ "type": "userCount", "name": "users" }],
  "filter": {
    "type": "and",
    "fields": [
      { "type": "selector", "dimension": "isBot", "value": "False" },
      { "type": "not", "field": { "type": "selector", "dimension": "country.isoCode", "value": "" } }
    ]
  },
  "baseFilters": "thisApp",
  "appID": "2D083718-D442-4A8E-B797-68F24ADD0C7E"
}
```

## Once `App.Referral` starts arriving

The custom signal in `main.js` fires on every pageview within a session that started from an Android-app referral, even after internal navigation. Once it appears in the structural data export, swap the dimensions on queries 1, 2, and 4 from `utm_*` to the corresponding payload key for an attribution view that survives internal clicks:

| Native (`pageview`) | Custom (`App.Referral`) |
| --- | --- |
| `utm_campaign` | `App.Referral.campaign` |
| `utm_content` | `App.Referral.content` |
| (n/a) | `App.Referral.landing` (entry path) |

And change the signal filter from `utm_source = android_app` to `type = App.Referral`.

Re-export structural data from the dashboard to confirm the signal type and payload keys before swapping.
