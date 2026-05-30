---
layout: app_layout.njk
title: Basic Root Checker — Ibrahim Al-Alali
appName: Basic Root Checker
icon: basic+root+checker+icon.png
packageName: com.iboalali.basicrootchecker
repoUrl: https://github.com/iboalali/Basic-Root-Checker
tagline: Check whether your device has root access - quick, simple, no-frills.
---

_Basic Root Checker_ does **NOT** root your device. It will only show you if your device has root access (or is rooted).

This app *requires* ROOT, use it at your own risk.
This app does **NOT** collect any data or personal information.

This app is not endorsed by or affiliated with _topjohnwu_ or _libsu_

{% whatsNew %}
- Detects which root provider (Magisk, KernelSU, APatch) granted root, with Magisk version
- "Request Root access" button when a provider is present but not yet granted
- Support for Android 17
- Now available in Russian and Spanish
- App settings now included in Android's automatic backup, restored on reinstall
{% endwhatsNew %}


## Changelog
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
