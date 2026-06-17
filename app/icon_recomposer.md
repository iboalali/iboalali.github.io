---
layout: app_layout.njk
title: Icon Recomposer — Ibrahim Al-Alali
appName: Icon Recomposer
icon: icon_recomposer.png
appUrl: https://iboalali.com/Icon-Recomposer/
repoUrl: https://github.com/iboalali/Icon-Recomposer
tagline: Light vector icons with a movable 3D emboss, then export to PNG, SVG, or Android VectorDrawable.
---

_Icon Recomposer_ is a browser tool that loads vector artwork (SVG or Android _VectorDrawable_ XML), applies a subtle 3D emboss driven by a single movable light, and exports the result as a PNG, an Android VectorDrawable, an SVG, or a re-editable project file.

It runs entirely in your browser. There's nothing to install, and your artwork never leaves your device.

{% whatsNew %}
- Duplicate layers with a per-row button or Ctrl/⌘+D
- Resize the project canvas, with size presets and optional content scaling
{% endwhatsNew %}


## Changelog
### Version 1.1.0:
* ➕ Duplicate layer: a per-row button and Ctrl/⌘+D copy the selected layer(s), placing each copy directly above its original
* ➕ Resize the project canvas via Width/Height fields or presets (24, 108, 512, 1024), with a linked aspect ratio and an optional "Scale contents"

### Version 1.0.0:
* ➕ Import SVG and Android VectorDrawable artwork as editable layers
* ➕ Emboss engine: one shared movable light drives the shading (point light becomes a radial gradient, distant light a linear one) with OKLab color mixing
* ➕ Per-layer materials (color, opacity, solid or embossed, emboss intensity, sheen, fill rule) and cast shadows that clip to the layers below
* ➕ Live preview with a draggable light handle and multi-select editing
* ➕ Export to PNG (transparent or with a background), Android VectorDrawable XML, SVG, and re-editable project JSON
* ➕ Open and save projects, share by link, and undo/redo (Ctrl/⌘+Z)

## Privacy Policy

See the [Icon Recomposer privacy policy](/app/icon_recomposer/privacy/).
