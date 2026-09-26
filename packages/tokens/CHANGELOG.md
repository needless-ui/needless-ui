# @needless-ui/tokens

## 0.6.2

No changes in this release.

## 0.6.1

No changes in this release.

## 0.6.0

No changes in this release.

## 0.5.0

No changes in this release.

## 0.4.0

No changes in this release.

## 0.3.0

No changes in this release.

## 0.2.0

### Minor Changes

- [`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f) - Needlessly customizable components: spring physics, press effects, entrances, corner shapes, radius and density, for a whole subtree or one component.

  - **Tokens:** spring tokens (`--nui-spring-snappy` to `--nui-spring-mechanical`) are solved from real physics and compiled to `linear()` easings, and `--nui-motion` holds the one components use. New `--nui-radius-scale` and `--nui-density` tokens. The compiler now supports DTCG `transition` tokens.
  - **CSS:** `data-nui-motion`, `data-nui-press`, `data-nui-enter`, `data-nui-corners`, `data-nui-radius` and `data-nui-density` presets (`presets.css`). Buttons press in and spring back; dialogs and menus arrive on the spring and leave with a quick fade; menus grow out of the side they open on. Nothing moves under reduced motion, and density never takes a control below 24px.
  - **Angular:** `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density` inputs on `nuiButton`, `nuiDialog` and `nuiMenu`. The primary entry point adds `NuiPersonality`, the shared customization types and `springTransition()`.

## 0.1.0

### Minor Changes

- [`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec) - Initial release: design tokens in the W3C DTCG 2025.10 format with light and dark modes, compiled to CSS custom properties and JSON. Color scales are generated and checked against WCAG 2.2 AA, and durations collapse when reduced motion is preferred.
