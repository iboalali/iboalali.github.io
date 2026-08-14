// Open external links in new tab
document.querySelectorAll('main a').forEach(function (linkEl) {
    const link = new URL(linkEl.href).href;
    if (!link.includes(window.location.hostname)) {
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'nofollow')
    }
})

// Theme toggle: cycles light -> dark -> paper -> auto
;(function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var tooltip = document.getElementById('theme-toggle-tooltip');
    var tooltipTimer;

    var modes = ['light', 'dark', 'paper', 'auto'];
    var icons = {
        light: '☀️',                  // sun
        dark: '🌙',                   // crescent moon
        paper: '📖',                  // open book
        auto: '🖥️'              // desktop computer
    };
    // Text fallback for devices that can't render colour emoji (e-ink readers,
    // old browsers). Kept short so it fits the 48px round button.
    var textLabels = {
        light: 'Light',
        dark: 'Dark',
        paper: 'Paper',
        auto: 'Auto'
    };
    var labels = {
        light: 'Theme: light. Click to switch to dark.',
        dark: 'Theme: dark. Click to switch to paper.',
        paper: 'Theme: paper. Click to switch to auto.',
        auto: 'Theme: auto (matches system). Click to switch to light.'
    };
    var tooltipText = {
        light: 'Light',
        dark: 'Dark',
        paper: 'Paper',
        auto: 'Auto (matches system)'
    };

    // Detect real colour-emoji support once. Draw the same glyph twice in two
    // different fill colours: a colour emoji renders from its own font tables
    // and ignores fillStyle, so both passes come out byte-identical; a "tofu"
    // box or a monochrome fallback glyph is painted with fillStyle, so the two
    // passes differ. A blank result (nothing drawn) also counts as unsupported.
    var emojiSupported = (function () {
        try {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext && canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return false;
            canvas.width = 16;
            canvas.height = 16;
            ctx.textBaseline = 'top';
            ctx.font = '16px Arial, sans-serif';

            function render(color) {
                ctx.clearRect(0, 0, 16, 16);
                ctx.fillStyle = color;
                ctx.fillText('😀', 0, 0); // 😀 grinning face
                return ctx.getImageData(0, 0, 16, 16).data;
            }

            var red = render('#f00');
            var green = render('#0f0');

            var drawn = false;
            for (var i = 3; i < red.length; i += 4) {
                if (red[i] !== 0) { drawn = true; break; }
            }
            if (!drawn) return false;

            for (var j = 0; j < red.length; j++) {
                if (red[j] !== green[j]) return false;
            }
            return true;
        } catch (e) {
            return false; // canvas/getImageData blocked (e.g. privacy mode) — play it safe
        }
    })();

    function getMode() {
        var stored = localStorage.getItem('theme');
        return modes.indexOf(stored) >= 0 ? stored : 'auto';
    }

    function isDark() {
        var explicit = document.documentElement.getAttribute('data-theme');
        if (explicit) return explicit === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function applyMode(mode) {
        if (mode === 'auto') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            document.documentElement.setAttribute('data-theme', mode);
            localStorage.setItem('theme', mode);
        }
        updateIcon();
    }

    function updateIcon() {
        var mode = getMode();
        btn.textContent = emojiSupported ? icons[mode] : textLabels[mode];
        btn.setAttribute('aria-label', labels[mode]);

        var ghIcon = document.querySelector('.small-icon[alt="Github"]');
        if (ghIcon) {
            ghIcon.src = isDark()
                ? '/media/github_icon_white.png'
                : '/media/github_icon.png';
        }
    }

    function showTooltip() {
        if (!tooltip) return;
        tooltip.textContent = tooltipText[getMode()];
        tooltip.classList.add('is-visible');
        clearTimeout(tooltipTimer);
        tooltipTimer = setTimeout(function () {
            tooltip.classList.remove('is-visible');
        }, 1800);
    }

    // Theme-toggle telemetry. Cycling can produce a burst of clicks, so debounce
    // and report only the visitor's final resting mode: `from` is where the burst
    // started, `to` is where they settled. Follows the Scope.SubScope.key naming
    // convention. Clicks happen well after page load, so the SDK is ready; guard
    // defensively anyway.
    var toggleTimer;
    var burstFrom = null;

    function flushToggle() {
        if (burstFrom === null) return;
        clearTimeout(toggleTimer);
        var from = burstFrom;
        var to = getMode();
        burstFrom = null;
        if (from === to) return;  // cycled back to the start — no net change
        if (!window.td || typeof window.td.signal !== 'function') return;
        window.td.signal('Theme.Toggle', {
            'Theme.Toggle.from': from,
            'Theme.Toggle.to':   to,
        });
    }

    btn.addEventListener('click', function () {
        var from = getMode();
        if (burstFrom === null) burstFrom = from;  // remember where the burst began
        var next = modes[(modes.indexOf(from) + 1) % modes.length];
        applyMode(next);
        showTooltip();
        clearTimeout(toggleTimer);
        toggleTimer = setTimeout(flushToggle, 1500);
    });

    // Don't lose a pending signal if the visitor navigates away or hides the tab
    // mid-burst before the debounce elapses.
    window.addEventListener('pagehide', flushToggle);
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') flushToggle();
    });

    if (!emojiSupported) btn.classList.add('theme-toggle--text');
    updateIcon();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (getMode() === 'auto') updateIcon();
    });
})();

// Android-app referral: persist UTM-tagged entries in sessionStorage and fire
// an App.Referral TelemetryDeck signal on every pageview within that session.
;(function () {
    var KEY = 'td_referral';
    var params = new URLSearchParams(window.location.search);

    if (params.get('utm_source') === 'android_app') {
        try {
            sessionStorage.setItem(KEY, JSON.stringify({
                campaign: params.get('utm_campaign') || '',
                content:  params.get('utm_content')  || '',
                landing:  window.location.pathname,
            }));
        } catch (e) { /* sessionStorage disabled, silently ignore */ }
    }

    var raw;
    try { raw = sessionStorage.getItem(KEY); } catch (e) { return; }
    if (!raw) return;

    var data;
    try { data = JSON.parse(raw); } catch (e) { return; }

    if (window.__tdReferralFired) return;
    window.__tdReferralFired = true;

    function fire() {
        if (!window.td || typeof window.td.signal !== 'function') return false;
        window.td.signal('App.Referral', {
            'App.Referral.campaign': data.campaign,
            'App.Referral.content':  data.content,
            'App.Referral.landing':  data.landing,
        });
        return true;
    }

    if (!fire()) {
        // The SDK loads with defer and executes after this script, so the first
        // attempt usually misses. Poll long enough (10s) to cover a slow first
        // fetch of the SDK from the CDN.
        var tries = 0;
        var iv = setInterval(function () {
            if (fire() || ++tries > 100) clearInterval(iv);
        }, 100);
    }
})();

// Short-link arrivals: the /bb, /brc, /hpn stubs (shortlinks.11ty.js) redirect
// within milliseconds, far too fast for the deferred TelemetryDeck SDK to load
// and send from the stub itself, so the stub stashes its slug in sessionStorage
// and the destination page fires the signal here. sessionStorage rather than a
// query parameter keeps the address bar clean and avoids clobbering any utm_*
// the short link was tagged with (e.g. /hpn?utm_source=qr). Fires once per
// arrival: the key is cleared on read, so browsing on to other pages in the same
// session doesn't re-count it.
;(function () {
    var KEY = 'td_shortlink';
    var slug;
    try {
        slug = sessionStorage.getItem(KEY);
        if (slug) sessionStorage.removeItem(KEY);
    } catch (e) { return; } // sessionStorage disabled, silently ignore
    if (!slug) return;

    var landing = window.location.pathname;

    function fire() {
        if (!window.td || typeof window.td.signal !== 'function') return false;
        window.td.signal('Shortlink.Visit', {
            'Shortlink.Visit.slug':    slug,
            'Shortlink.Visit.landing': landing,
        });
        return true;
    }

    if (!fire()) {
        // Same as App.Referral above: the SDK loads with defer and executes
        // after this script, so the first attempt usually misses. Poll long
        // enough (10s) to cover a slow first fetch of the SDK from the CDN.
        var tries = 0;
        var iv = setInterval(function () {
            if (fire() || ++tries > 100) clearInterval(iv);
        }, 100);
    }
})();

// Contact-card telemetry: fire a Contact.Click signal naming which platform the
// visitor opened from the contact page. The cards are external links (opened in
// a new tab by the handler at the top of this file), so the current page stays
// alive and the signal sends normally. Follows the Scope.SubScope.key naming
// convention. Delegated off the container so a single listener covers all cards
// and also catches middle-click ("open in new tab"). Guards window.td defensively.
;(function () {
    var container = document.querySelector('.contact-links');
    if (!container) return;

    function track(e) {
        // Count primary (left) and auxiliary (middle) clicks; ignore right-click.
        if (e.button !== 0 && e.button !== 1) return;
        var link = e.target.closest('.icon-link[data-contact]');
        if (!link) return;
        if (!window.td || typeof window.td.signal !== 'function') return;
        window.td.signal('Contact.Click', {
            'Contact.Click.platform': link.getAttribute('data-contact'),
        });
    }

    container.addEventListener('click', track);
    container.addEventListener('auxclick', track);
})();

// Shared-element view transition for the app icon. On the home page each app
// card has a .app-icon; the detail page's single .app-hero-icon statically owns
// the shared name "app-icon" (see styles.css). Here we assign that same name to
// the *one* home-page icon involved in the current navigation so the browser
// morphs it into / out of the hero. No-ops when the browser lacks support.
;(function () {
    function normalize(path) {
        return path.replace(/\/+$/, '');
    }

    function clearIcons() {
        document.querySelectorAll('.app-item .app-icon').forEach(function (icon) {
            icon.style.viewTransitionName = '';
        });
    }

    // Tag the home-page icon whose card links to the given URL.
    function tagIcon(urlStr) {
        if (!urlStr) return;
        var targetPath = normalize(new URL(urlStr, location.href).pathname);
        document.querySelectorAll('.app-item').forEach(function (item) {
            var link = item.querySelector('a[href]');
            var icon = item.querySelector('.app-icon');
            if (!link || !icon) return;
            if (normalize(new URL(link.href).pathname) === targetPath) {
                icon.style.viewTransitionName = 'app-icon';
            }
        });
    }

    // Forward navigation (home -> detail): tag the icon for the destination.
    window.addEventListener('pageswap', function (e) {
        if (!e.viewTransition) return;
        clearIcons();
        if (e.activation && e.activation.entry) tagIcon(e.activation.entry.url);
    });

    // Back navigation (detail -> home): tag the icon for where we came from.
    // (The html.via-vt reveal-suppression toggle lives in the inline head
    // script in main_layout.njk — it must register before first render.)
    window.addEventListener('pagereveal', function (e) {
        if (!e.viewTransition) return;
        clearIcons();
        if (window.navigation && navigation.activation && navigation.activation.from) {
            tagIcon(navigation.activation.from.url);
        }
    });
})();
