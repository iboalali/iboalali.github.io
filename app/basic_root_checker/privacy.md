---
layout: main_layout.njk
title: Basic Root Checker — Privacy Policy
---

<a href="/app/basic_root_checker/" class="app-back-link">&larr; Basic Root Checker</a>

<div class="contact-hero">
<h1 class="contact-title">Basic Root Checker</h1>
<p class="contact-subtitle">Privacy Policy</p>
</div>

The app _Basic Root Checker_ does **not** collect any personal information. Checking your device for root access works fully offline, and the result never leaves your device.

Two features do use the internet, both only when a connection is available. Anonymous usage telemetry is sent unless you turn it off in the in-app settings. The **Other Apps** list on the About screen refreshes from `iboalali.com`, which is an ordinary web request for a public file: it sends nothing about you or your device beyond what any web request includes, and the app falls back to the copy bundled with it when it cannot reach the site.

Other apps and assistants on your device can ask _Basic Root Checker_ for this device's root status without opening it (Android 16+). That answer is handed to the app that asked and goes nowhere else.

The Google Play build uses three Google Play services: in-app updates, the in-app rating card, and the tip jar. Tips are handled by Google Play, so the developer never receives your payment details, only the fact that a tip of a given tier was made. The FOSS build contains none of the three.

A small amount of analytics is included in the app. **No personal information** (PII) is included in this telemetry. See [What data is collected by TelemetryDeck SDK for apps?](https://telemetrydeck.com/docs/guides/privacy-faq/#what-data-is-collected-by-telemetrydeck-sdk-for-apps%3F) for the defaults. The anonymous identifier can be replaced at any time with **Reset analytics identity** in the settings, so later data cannot be linked to anything sent before. In addition, the developer records:

* Screen navigation within the app
* Root check started
* Root check completed (with the resulting status)
* Root access requested via the "Request Root access" button
* Root provider detected: the family (Magisk, KernelSU, APatch, other, or unknown), the specific manager when one can be identified (for example Kitsune Mask, KernelSU Next, SukiSU Ultra, or SuperSU), and its version when available
* Device form factor (phone or tablet) and the window size at launch (compact, medium, or expanded), once per app start
* Device haptic (vibration) capabilities, such as whether amplitude control and envelope effects are supported, plus the Android version
* App display language changed (the language you selected)
* Privacy policy opened
* Link opened from the About screen (which one was tapped: email, Mastodon, Bluesky, or the website)
* Other Apps entry tapped (with the package name of the app that was tapped, and whether you opened it, went to its Google Play listing, or opened its website)
* Other Apps list refreshed (whether it was updated, already current, or failed, with the type of error when it fails)
* In-app rating card requested, the rating flow failing to open (with the error), and the "Rate this app" link being tapped (Google Play build only)
* "Support development" card shown on the main screen, and dismissed (with the number of times it has been dismissed) (Google Play build only)
* Tip jar opened (whether from the settings or from the support card) (Google Play build only)
* Tip tier selected, and how it ended: purchased (with the Google Play product id, the tier, and whether it was a first or a repeat tip), awaiting payment, canceled, or failed (with the reason) (Google Play build only)
* Google Play billing unavailable (with the response code), or the tip amounts failing to load (with the reason) (Google Play build only)
* In-app update events (update available, started, downloaded, failed) (Google Play build only)
* Errors and unhandled exceptions (an internal error id, the error message, and a category such as thrown-exception, user-input, or app-state)
