#!/usr/bin/env python3
"""Generate the responsive screenshot variants served on the app detail pages.

Source screenshots live in the app's own repo (see the Source Project Paths
table in CLAUDE.md), at Play Store resolution, which is far too heavy to ship:
a single 1080x2400 PNG is ~120 KB, and the fullscreen one is 1.1 MB. This
resizes a curated set down to the two widths the page actually renders and
encodes them as WebP, which is roughly 5x smaller than PNG for this content.

Run it when an app's screenshots are refreshed for a release:

    python3 tools/make_screenshots.py

Requires Pillow (already present system-wide; there is no ImageMagick or sharp
on this machine). Output goes to media/screenshots/<app>/<name>_<width>.webp
and is committed, since the GitHub Actions build only sees this repo.

Every source in a set must share one aspect ratio: the strip pins a single
`aspect-ratio` in CSS, so a mismatched source would render squashed. That is
checked here and fails loudly rather than shipping a distorted screenshot.
"""

import sys
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parent.parent

# Rendered at ~320 CSS px, so 320 covers 1x and 640 covers 2x screens.
WIDTHS = (320, 640)
QUALITY = 80

# app slug -> (source directory, [(source file, output name), ...])
# The order here is the order they appear in the strip, so it should read as a
# narrative: what the app is for first, settings last.
SETS = {
    "billboard": (
        "/home/iboalali/Projects/private/android/Billboard/"
        "Play Store/Screenshots/3.0.0/default/Phone",
        [
            ("HomeShot.png", "home"),
            ("EditorShot.png", "editor"),
            ("EditorAdvancedShot.png", "editor_advanced"),
            ("FullScreenShot.png", "fullscreen"),
            ("RecentShot.png", "recent"),
            ("SettingsShot.png", "settings"),
        ],
    ),
}


def build(slug, source_dir, entries):
    source_dir = Path(source_dir)
    if not source_dir.is_dir():
        sys.exit(f"{slug}: source directory not found: {source_dir}")

    out_dir = REPO / "media" / "screenshots" / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    ratio = None
    total = 0

    for filename, name in entries:
        src = source_dir / filename
        if not src.is_file():
            sys.exit(f"{slug}: missing source screenshot: {src}")

        with Image.open(src) as im:
            if ratio is None:
                ratio = (im.width, im.height)
            elif (im.width, im.height) != ratio:
                sys.exit(
                    f"{slug}: {filename} is {im.width}x{im.height}, but the rest of "
                    f"the set is {ratio[0]}x{ratio[1]}. The strip pins one "
                    f"aspect-ratio in CSS, so mixing sizes would render squashed. "
                    f"Re-capture it, or give this app its own strip."
                )

            rgb = im.convert("RGB")
            for width in WIDTHS:
                height = round(im.height * width / im.width)
                out = out_dir / f"{name}_{width}.webp"
                rgb.resize((width, height), Image.LANCZOS).save(
                    out, "WEBP", quality=QUALITY, method=6
                )
                size = out.stat().st_size
                total += size
                print(f"  {out.relative_to(REPO)}  {width}x{height}  {size / 1024:.0f} KB")

    print(f"{slug}: {len(entries)} screenshots, intrinsic {ratio[0]}x{ratio[1]}, "
          f"{total / 1024:.0f} KB total on disk\n")
    return ratio


if __name__ == "__main__":
    for slug, (source_dir, entries) in SETS.items():
        print(f"{slug}:")
        build(slug, source_dir, entries)
