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
        btn.textContent = icons[mode];
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
        var tries = 0;
        var iv = setInterval(function () {
            if (fire() || ++tries > 20) clearInterval(iv);
        }, 100);
    }
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
