// Open external links in new tab
document.querySelectorAll('main a').forEach(function (linkEl) {
    const link = new URL(linkEl.href).href;
    if (!link.includes(window.location.hostname)) {
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'nofollow')
    }
})

// Theme toggle: cycles light -> dark -> auto
;(function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var tooltip = document.getElementById('theme-toggle-tooltip');
    var tooltipTimer;

    var modes = ['light', 'dark', 'auto'];
    var icons = {
        light: '☀️',                  // sun
        dark: '🌙',                   // crescent moon
        auto: '🖥️'              // desktop computer
    };
    var labels = {
        light: 'Theme: light. Click to switch to dark.',
        dark: 'Theme: dark. Click to switch to auto.',
        auto: 'Theme: auto (matches system). Click to switch to light.'
    };
    var tooltipText = {
        light: 'Light',
        dark: 'Dark',
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

    btn.addEventListener('click', function () {
        var next = modes[(modes.indexOf(getMode()) + 1) % modes.length];
        applyMode(next);
        showTooltip();
    });

    updateIcon();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (getMode() === 'auto') updateIcon();
    });
})();
