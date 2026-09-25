---
layout: main_layout.njk
title: Billboard — Privacy Policy
---

<a href="/app/billboard/" class="app-back-link">&larr; Billboard</a>

<div class="contact-hero">
<h1 class="contact-title">Billboard</h1>
<p class="contact-subtitle">Privacy Policy</p>
</div>

The app _Billboard_ does **not** collect any personal information. Creating and showing billboards works fully offline, and the text, colors, and layers of your billboards never leave your device unless you share them yourself.

Your billboards and settings are stored on your device. Like the rest of the app's data, they are included in your device's Android backup when backup is turned on.

Two features use the internet, both only when a connection is available. Anonymous usage telemetry is sent unless you turn it off in the in-app settings. The **Other apps** list on the About screen refreshes from `iboalali.com`, which is an ordinary web request for a public file and its app icons: it sends nothing about you or your device beyond what any web request includes and the language of the list it asks for, and the app falls back to the copy bundled with it when it cannot reach the site.

When you share a billboard, as a PNG image or a `.billboard` file, it goes only to the app you pick. A `.billboard` file contains the whole billboard, including its text.

Assistants on your device can build and manage billboards for you without opening the app (Android 16+): add, edit, and remove layers, list and open your saved billboards, and manage your Collection. To do that they receive your billboards' text, colors, and layers, along with a preview image. That is handed to the assistant that asked and goes nowhere else.

The app uses two Google Play services: in-app updates, and Google Play purchases for the one-time unlocks. Purchases are handled by Google Play, so the developer never receives your payment details, only the fact that a given unlock was bought.

A small amount of analytics is included in the app, starting with version 3.0 (earlier versions contained no analytics). **No personal information** (PII) is included in this telemetry, and the text and colors of your billboards are never part of it. See [What data is collected by TelemetryDeck SDK for apps?](https://telemetrydeck.com/docs/guides/privacy-faq/#what-data-is-collected-by-telemetrydeck-sdk-for-apps%3F) for the defaults. In addition, the developer records:

* Screen navigation within the app
* Fullscreen shown (from the editor, the Collection, or Recent) and dismissed
* Billboard saved (whether it was new or already saved, how many layers it has, which kinds of layers it uses, and its orientation)
* Billboard opened from the Collection or Recent
* Billboard shared (from where, and whether as an image or a file)
* Billboard imported (from inside the app or another app, and whether it worked or why it failed), and a billboard that uses layer types this version does not know (with how many layers it has and the unknown type names)
* Billboard added to or removed from the Collection (from where), Collection reordered (with the number of items), where new items are added (start or end), and the Collection welcome card dismissed
* Recent entries dismissed (by swipe or button) and Recent cleared (with how many entries there were)
* Paywall shown, dismissed, and retried (with the feature that opened it)
* Purchase started and completed (with the Google Play product id), canceled, or failed (with the Google Play response code)
* Google Play billing unavailable, or the unlocks failing to load
* Restore purchases tapped, and how many purchases it restored
* Screen saver shown (whether it showed your chosen billboard, the Collection, or a placeholder, and the dimming settings), and screen saver settings changed (which setting and its new value)
* Assistant actions (which action was used, with details such as the layer type, whether text or a color was set, the orientation, or the new position, but never the text or the color itself)
* Theme changed, app display language changed (the language you selected), and haptic feedback, fullscreen brightness boost, or anonymous analytics turned on or off
* Privacy policy opened, contact email opened, and link opened from the About screen (which one was tapped: Mastodon, Bluesky, or the website)
* Other Apps entry tapped (with the package name of the app that was tapped, and whether you opened it, went to its Google Play listing, or opened its website)
* Other Apps list refreshed (whether it was updated, already current, or failed, with the type of error when it fails)
* Device build details (such as manufacturer, model, and build fingerprint) and whether the device looks like an automated test device, once per app start
* In-app update events (update available, started, downloaded, failed)
* Errors and unhandled exceptions (an internal error id, the error message, and a category such as thrown-exception, user-input, or app-state)
