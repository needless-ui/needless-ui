# @needless-ui/css

Framework-free component styles for [Needless UI](https://github.com/needless-ui/needless-ui). Use them with the Angular package, or on their own in plain HTML.

## Install

```bash
pnpm add @needless-ui/css
```

```css
/* Everything: tokens plus every component. */
@import '@needless-ui/css';
```

Or pick components:

```css
@import '@needless-ui/css/layers.css';
@import '@needless-ui/tokens/tokens.css';
@import '@needless-ui/css/presets.css';
@import '@needless-ui/css/components/button.css';
```

From a CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@needless-ui/css/dist/needless-ui.min.css"
/>
```

## Markup

```html
<button class="nui-button">Save</button>
<button class="nui-button" data-variant="soft" data-tone="danger" data-size="sm">Delete</button>
<a class="nui-button" data-variant="outline" href="/docs">Docs</a>

<dialog class="nui-dialog" data-size="sm" aria-labelledby="delete-title">
  <h2 class="nui-dialog-title" id="delete-title">Delete project?</h2>
  <div class="nui-dialog-actions">
    <button class="nui-button" data-variant="soft" data-tone="neutral">Cancel</button>
    <button class="nui-button" data-tone="danger">Delete</button>
  </div>
</dialog>

<div class="nui-menu" role="menu" popover="manual">
  <div class="nui-menu-item" role="menuitem" tabindex="-1">Rename</div>
  <div class="nui-menu-separator" role="separator"></div>
  <div class="nui-menu-item" role="menuitem" tabindex="-1" data-tone="danger">Delete</div>
</div>
```

The CSS only styles these components. Without a framework package, open the dialog with `showModal()`, and give the menu its keyboard behavior yourself, following the [menu button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

## Customization presets

Attributes on any element set how everything inside it moves and looks. The nearest one wins:

```html
<body data-nui-motion="jelly" data-nui-press="squish" data-nui-enter="flip">
  <section data-nui-corners="squircle" data-nui-radius="large" data-nui-density="compact">
    …
  </section>
</body>
```

| Attribute          | Presets                                                                    |
| ------------------ | -------------------------------------------------------------------------- |
| `data-nui-motion`  | `snappy`, `bouncy`, `jelly`, `elastic`, `lazy`, `mechanical`, `none`       |
| `data-nui-press`   | `sink`, `squish`, `pop`, `wobble`, `rubber`, `tilt`, `none`                |
| `data-nui-enter`   | `zoom`, `fade`, `drop`, `rise`, `unfold`, `flip`, `swing`, `slide`, `none` |
| `data-nui-corners` | `round`, `squircle`, `bevel`, `scoop`, `notch`, `square`                   |
| `data-nui-radius`  | `none`, `small`, `medium`, `large`, `full`                                 |
| `data-nui-density` | `compact`, `regular`, `roomy`                                              |

They only set custom properties (`--nui-motion`, `--nui-press`, `--nui-enter`, `--nui-corner-shape`, `--nui-radius-scale`, `--nui-density`), so CSS can set those to anything else. When picking components one by one, import `@needless-ui/css/presets.css` after the tokens.

## Cascade layers

All styles live in `@layer nui.tokens, nui.base, nui.components, nui.utilities`, so any CSS you write outside a layer wins automatically. If your app has global resets such as `a { color: inherit }`, put them in a layer declared before `nui`, so they don't override components:

```css
@layer reset, nui, app;
```

With Tailwind CSS v4, declare `@layer theme, base, nui, components, utilities;` before your imports so utility classes can override components.

## License

MIT
