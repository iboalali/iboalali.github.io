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
- Move layers by dragging them on the canvas or setting exact X/Y positions
- Click a layer's shape on the canvas to select it
{% endwhatsNew %}


## Changelog
### Version 1.2.0:
* ➕ Move layers: drag a selected layer (or several at once) on the canvas, or set an exact position with the layer's X/Y fields
* ➕ Click a layer's shape on the canvas to select it. Ctrl/⌘ and Shift-click extend the selection, and clicking an empty area deselects
* ➕ Numeric Position X/Y fields for precise point-light placement, alongside the draggable handle
* 🛠️ The light now moves only by dragging its handle; clicking elsewhere on the canvas no longer repositions it
* 🔨 Fixed canvas size presets that could render partially off-screen in the inspector
* 🔨 Fixed number inputs (canvas size, light position, PNG size, stroke width) overflowing the right edge of their panel

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
