---
layout: main_layout.njk
---

{% profilePhoto %}

# Hi, I'm Ibrahim Al-Alali

I'm an Android app developer

## My Apps
<div class="app-list">

{% app "Hide Persistent Notification", "hide+persistent+notification+icon.png", "/subsites/hide_persistent_notification", "com.iboalali.hidepersistentnotifications" %}
Choose a persistent notification to hide, and keep it hidden as long as this app is installed.
{% endapp %}

{% app "Billboard", "billboard+icon.png", "/subsites/billboard", "com.iboalali.billboard" %}
This app will help you to show large text on the screen, and makes it as big as possible without cutting of the text.
{% endapp %}

{% app "Basic Root Checker", "basic+root+checker+icon.png", "/subsites/basic_root_checker", "com.iboalali.basicrootchecker" %}
You're not sure that your device is rooted (has root access)? use Basic Root Checker to find out.
{% endapp %}

{% app "Droppin (⚒ Work in Progress)", "droppin+icon.png", "", "com.iboalali.droppins" %}
Drag and drop content into the app to access it later.
{% endapp %}

</div>