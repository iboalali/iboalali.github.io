---
layout: app_layout.njk
title: Basic Root Checker — Ibrahim Al-Alali
appName: Basic Root Checker
icon: basic+root+checker+icon.png
packageName: com.iboalali.basicrootchecker
repoUrl: https://github.com/iboalali/Basic-Root-Checker
tagline: Check whether your device has root access - quick, simple, no-frills.
# See the App screenshots notes in CLAUDE.md. Variants live in
# media/screenshots/basic_root_checker/ and come from tools/make_screenshots.py.
screenshots:
  - file: main
    alt: The main screen before checking, showing the device name, model, and Android version, with a button to run the check
  - file: result
    alt: The result after checking, a green tick reporting that the device has root access via Magisk
  - file: settings
    alt: Settings, with usage data, analytics identity reset, haptic feedback, theme, and language options
---

_Basic Root Checker_ does **NOT** root your device. It will only show you if your device has root access (or is rooted).

This app *requires* ROOT, use it at your own risk.
This app does **NOT** collect any personal information. It works fully offline; anonymous, opt-out usage analytics are sent only when a connection is available (see the privacy policy below).

This app is not endorsed by or affiliated with _topjohnwu_ or _libsu_

{% highlights %}
- Large screens: Settings, About, and Licenses open as a swipe-to-close dialog
- Other Apps on the About screen refreshes from the web, in your language
{% endhighlights %}


## Changelog
### Version 2.5:
* ➕ Large screens: Settings, About, and Licenses open as a dialog over the main screen, closed by swiping the card down, tapping outside, or with Back
* ➕ Rate the app without leaving it, plus a "Rate this app" link on the About screen (Google Play builds)
* ➕ Optional "Support development" card on the main screen after a root check, opening the tip jar in one tap (Google Play builds)
* 🛠️ "Other Apps" on the About screen refreshes from the web, showing each app's current description and highlights in your language
* 🛠️ Licenses credits every bundled library, grouped by license, each with its full text and a link to the project
* 🛠️ Faster cold start and smoother first scroll
* 🔨 The Magisk version on the result card reads as a version again, instead of "v27.0:MAGISK:R"
* 🔨 Turning anonymous usage data back on in Settings takes effect immediately, and the in-app update progress bar fills smoothly

### Version 2.4:
* ➕ Subtle haptic feedback across the app: taps, switches, and selections give a gentle tick
* ➕ Check this device's root status from assistants and other apps, without opening it (Android 16+)
* ➕ New Theme option in Settings: light, dark, or system
* 🛠️ Redesigned Settings, with the tip jar moved to the top
* 🔨 Detect more root managers (Kitsune Mask, SukiSU, KernelSU Next, SuperSU and more), each shown by name
* 🔨 Accessibility and back-navigation fixes

### Version 2.3:
* ➕ Tip jar in Settings to support development with an optional tip, and tip again any time
* ➕ In-app language picker in Settings: switch languages without leaving the app (Android 13+)
* 🛠️ Faster app startup, especially on slower devices
* 🛠️ The back-swipe animation now follows the edge you swipe from
* 🔨 The current screen is kept when the app is recreated (e.g. after rotating or switching language)
* 🔨 Fixed a startup crash on Android 7.x and older

### Version 2.2:
* ➕ Haptic feedback for the root check, with a new toggle in Settings
* ➕ Now available in Russian and Spanish
* ➕ Email, Mastodon, and Bluesky links on the About screen
* 🛠️ App settings now included in Android's automatic backup, so they're restored when you reinstall
* 🛠️ Refreshed About screen contact links and overflow menu icons
* 🔨 Fixed untranslated toast and accessibility labels in German and Arabic

### Version 2.1:
* ➕ Root provider detection: Magisk (with version), KernelSU, or APatch
* ➕ "Request Root access" button when a provider is present but not yet granted
* ➕ Support for Android 17
* 🛠️ New "Not granted" state when a root provider is detected but access isn't given yet
* 🔨 Fixed rooted devices being reported as not rooted on the first check

### Version 2.0:
* ➕ Complete rewrite with Jetpack Compose, Material 3, and dynamic colors
* ➕ TelemetryDeck analytics with an opt-out toggle in settings
* ➕ In-app update flow on the Google Play build
* 🛠️ Split into Google Play and FOSS flavors
* 🛠️ Minimum version raised to Android 6.0

### Version 1.13:
* ➕ Android 16 support

### Version 1.11:
* ➕ Android 15 support
* 🛠️ Dependency updates
* 🛠️ Dropped support for Android 4.4

### Version 1.10:
* 🛠️ Dependency updates

### Version 1.9:
* ➕ Support for Android 14

### Version 1.7:
* ➕ Support for Android 12
* ✨ Full redesign of the app

### Version 1.6:
* ➕ Support for Android 10 and 11

### Version 1.5:
* ➕ Support for Android 9.0 Pie
* ➕ A new UI
* ➕ Added Adaptive icon
* ✨ Removed ads

### Version 1.2.2:
* ➕ Support for Android 8.0 Oreo

### Version 1.2.1:
* 🛠️ Fixed version name for Android O Beta

### Version 1.2:
* ➕ Support for Android 7.1 Nougat
* 🛠️ Updated list of Android version names
* 🛠️ Updated list of device models and vendors, it's OVER 9000
* ✨ Small layout changes

### Version 1.1:
* ➕ Added support for Android 4.1 Jelly Bean and up
* ✨ Redesign of the app

### Version 1.0:
* ➕ Basic Root Checker comes in 3 languages: English, German and Arabic

## Privacy Policy

See the [Basic Root Checker privacy policy](/app/basic_root_checker/privacy/).
