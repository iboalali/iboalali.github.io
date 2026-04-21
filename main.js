// Open external links in new tab
document.querySelectorAll('main a').forEach(function (linkEl) {
    const link = new URL(linkEl.href).href;
    if (!link.includes(window.location.hostname)) {
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'nofollow')
    }
})

// Theme toggle
// TODO: expand toggle to include an "auto" mode that follows prefers-color-scheme
;(function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function isDark() {
        var explicit = document.documentElement.getAttribute('data-theme');
        if (explicit) return explicit === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function updateIcon() {
        btn.textContent = isDark() ? '\u2600\uFE0F' : '\uD83C\uDF19';

        var ghIcon = document.querySelector('.small-icon[alt="Github"]');
        if (ghIcon) {
            ghIcon.src = isDark()
                ? '/media/github_icon_white.png'
                : '/media/github_icon.png';
        }
    }

    btn.addEventListener('click', function () {
        var next = isDark() ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon();
    });

    updateIcon();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (!localStorage.getItem('theme')) updateIcon();
    });
})();