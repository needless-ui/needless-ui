# @needless-ui/css

## 0.3.0

### Minor Changes

- [`4dba452`](https://github.com/needless-ui/needless-ui/commit/4dba4526e82eace539ffc2d9116c8bc3bba873ab) - Eight new components:

  - **Toast:** a stack of toasts in the top layer, with promise toasts, actions, swipe to dismiss and timers that pause.
  - **OTP input:** separate slots over one native input, with SMS autofill, WebOTP and paste cleanup.
  - **Number field:** a spinbutton formatted for any locale, with step buttons that repeat when held.
  - **Rating:** stars on native radio buttons, with a fractional read-only view.
  - **Avatar:** initials on a stable, contrast-safe color per name, with pictures, status dots and groups.
  - **Skeleton:** placeholders sharing one page-wide shimmer.
  - **Breadcrumbs:** a trail that scrolls when it's too long.
  - **Empty state:** built-in pictures that float.

### Patch Changes

- Updated dependencies []:
  - @needless-ui/tokens@0.3.0

## 0.2.0

### Minor Changes

- [`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f) - Needlessly customizable components: spring physics, press effects, entrances, corner shapes, radius and density, for a whole subtree or one component.

  - **Tokens:** spring tokens (`--nui-spring-snappy` to `--nui-spring-mechanical`) are solved from real physics and compiled to `linear()` easings, and `--nui-motion` holds the one components use. New `--nui-radius-scale` and `--nui-density` tokens. The compiler now supports DTCG `transition` tokens.
  - **CSS:** `data-nui-motion`, `data-nui-press`, `data-nui-enter`, `data-nui-corners`, `data-nui-radius` and `data-nui-density` presets (`presets.css`). Buttons press in and spring back; dialogs and menus arrive on the spring and leave with a quick fade; menus grow out of the side they open on. Nothing moves under reduced motion, and density never takes a control below 24px.
  - **Angular:** `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density` inputs on `nuiButton`, `nuiDialog` and `nuiMenu`. The primary entry point adds `NuiPersonality`, the shared customization types and `springTransition()`.

### Patch Changes

- Updated dependencies [[`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f)]:
  - @needless-ui/tokens@0.2.0

## 0.1.0

### Minor Changes

- [`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec) - Initial release: styles for button, dialog and menu inside `@layer nui.*`, so plain CSS in your app overrides them without `!important`. They use only semantic tokens, so light, dark and nested themes work everywhere.

### Patch Changes

- Updated dependencies [[`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec)]:
  - @needless-ui/tokens@0.1.0
