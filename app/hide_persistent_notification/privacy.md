---
layout: main_layout.njk
title: Hide Persistent Notification — Privacy Policy
---

<a href="/app/hide_persistent_notification/" class="app-back-link">&larr; Hide Persistent Notification</a>

<div class="contact-hero">
<h1 class="contact-title">Hide Persistent Notification</h1>
<p class="contact-subtitle">Privacy Policy</p>
</div>

The app _Hide Persistent Notification_ does **not** collect any personal information. Hiding notifications works fully offline, and the content of your notifications is never sent to the developer.

The app does **need** access to the notifications on your device. It reads them so you can choose which ones to hide, and it keeps what it needs on your device: the notifications you chose to hide (with their title and text) and a history of hidden notifications, capped at the newest 5,000 entries. You can clear the history at any time, and showing a notification again removes it from the hide list. Like the rest of the app's data, both are included in your device's Android backup when backup is turned on.

Three features use the internet, all only when a connection is available. Anonymous usage telemetry is sent unless you turn it off in the in-app settings. The **Other apps** list on the About screen refreshes from `iboalali.com`, which is an ordinary web request for a public file: it sends nothing about you or your device beyond what any web request includes and the language of the list it asks for, and the app falls back to the copy bundled with it when it cannot reach the site. Google Drive is used only if you opt in, as described below.

If you opt in, the app signs in to your Google account and stores a small marker file in its own hidden folder on your Google Drive, to recognize a previous purchase when you reinstall. The file holds only the date it was written and the app version. The app can only see its own folder, not the rest of your Drive, and no notification content or personal information is uploaded.

Assistants on your device can ask _Hide Persistent Notification_ to list your notifications and to hide or show them without opening the app (Android 16+). This only works while the app has notification access. The list includes each notification's app, title, text, and icon, and it is handed to the assistant that asked and goes nowhere else.

You **can choose** to log the currently visible notifications, or your hiding history, and send them to the developer to help diagnose a problem. Before anything is sent, the text of the notifications is removed from the notification log as best as possible, and you can review and edit the result in a text editor inside the app. The hiding history log contains the app name and title of each hidden notification, so check it before sending. Only after you are satisfied do you decide whether to send the data, and it is sent by email through the app you pick.

The app uses Google Play in-app updates to offer new versions. It contains no ads and no in-app purchases.

A small amount of analytics is included in the app, starting with version 2.0 (earlier versions contained no analytics). **No personal information** (PII) is included in this telemetry, and no notification title or text is ever part of it. See [What data is collected by TelemetryDeck SDK for apps?](https://telemetrydeck.com/docs/guides/privacy-faq/#what-data-is-collected-by-telemetrydeck-sdk-for-apps%3F) for the defaults. In addition, the developer records:

* Screen navigation within the app
* Notification access permission requested and granted
* A notification added to the hide list, or removed from it (with the package name of the app it belongs to)
* All hidden notifications shown again (with how many there were)
* A notification hidden (with the package name of the app, and what hid it: you, a newly posted notification, the periodic re-check, or the app reconnecting to your notifications), once per notification each time the app's notification service starts
* History cleared
* Logs exported (when you request a log, before you review or send it)
* App display language changed (the language you selected)
* Google Drive opt-in prompt shown, and your choice (accepted or declined)
* Google Drive marker result (success, not signed in, or failure, with the type of error when it fails)
* Legacy entitlement granted or restored (a carried-over purchase from the previous app version, with the restore result)
* Anonymous analytics turned on or off
* Link opened from the About screen (which one was tapped: email, Mastodon, Bluesky, or the website)
* Other Apps entry tapped (with the package name of the app that was tapped, and whether you opened it, went to its Google Play listing, or opened its website)
* Other Apps list refreshed (whether it was updated, already current, or failed, with the type of error when it fails)
* In-app update events (update available, started, downloaded, failed)
* Errors and unhandled exceptions (an internal error id, the error message, and a category such as thrown-exception, user-input, or app-state)
