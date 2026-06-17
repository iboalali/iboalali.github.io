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
- True per-layer gradient fills (linear or radial), with import from SVG and VectorDrawable
- Emboss is now opt-in: new layers start as flat Solid fills
{% endwhatsNew %}


## Changelog
### Version 1.5.0:
* ➕ True per-layer gradient fills: a new Gradient fill mode (alongside Solid and Embossed) with a linear or radial type, an editable multi-stop list (color, per-stop alpha, and offset), and numeric geometry. Gradients import from SVG and Android VectorDrawable instead of being flattened to one color, round-trip in the project file, and track the layer's move, scale, and flip. A "duplicate as gradient overlay" action stacks an embossed base and a gradient layer so one shape can have both
* ➕ Link previews and search metadata: sharing the live URL now shows a title, summary, and the app icon (Open Graph and Twitter card tags) instead of a bare link
* 🛠️ Emboss is now opt-in: new layers and imported art arrive as flat Solid fills in the source color rather than auto-embossed. Apply Embossed per layer for the 3D look, and the built-in sample stays embossed to show it off
* 🔨 Stroke width now scales with the layer, so scaling a stroked shape keeps its outline proportional across the preview, PNG, and VectorDrawable export

### Version 1.4.0:
* ➕ Per-layer scale: a Scale control resizes the selected layer(s) by a percentage (100 = original). One layer scales about its own center; several selected layers scale together about their common center. Non-destructive (stored as a layer transform), with a link toggle for independent X and Y scaling
* ➕ Flip layers: Flip H and Flip V mirror the selected layer(s); multiple layers flip together about their common center, and the flip is non-destructive
* ➕ More anonymous usage and error events sent to TelemetryDeck (export, open, import, new, save, undo, redo, and errors), alongside the existing pageview (see the privacy policy)
* ➕ A Privacy link in the app's top bar that opens its privacy policy
* 🔨 Imported gradient fills now seed a representative base color from the gradient's stops instead of a flat gray
* 🔨 Fixed duplicate layer ids when importing into a loaded project, which could make selecting one layer also select another; ids now de-duplicate on load

### Version 1.3.0:
* ➕ Per-layer shadow distance: a Distance control in the Cast shadow section sets how far each layer throws its shadow (its apparent height above the surface). It multiplies the automatic length from the light, so 1× keeps the previous look and higher values lift the layer further off the surface
* ➕ The app now opens on a bundled default project (the app icon) instead of the built-in sample, and shows that icon next to the title in the top bar and as the browser favicon
* ➕ Anonymous usage analytics via the privacy-friendly TelemetryDeck Web SDK: one pageview per load, no cookies (see the privacy policy)
* 🔨 Clicking the canvas now switches the selection between overlapping layers; it hit-tests the actual layer geometry, so a layer's invisible drag target no longer intercepts clicks meant for a shape above or below it

### Version 1.2.1:
* 🔨 With Link W/H on, editing one canvas dimension now updates the other field's value too (the canvas already resized correctly; only the displayed value lagged)

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
