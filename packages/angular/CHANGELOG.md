# @needless-ui/angular

## 0.5.0

### Minor Changes

- [`2a1e871`](https://github.com/needless-ui/needless-ui/commit/2a1e8719f5295d361798f8a948cc17b0aca86f41) - A data grid (`@needless-ui/angular/grid`), on a native table:

  - **Sorting** by several columns (Shift adds one), stable and type-aware: text in the locale's order with numbers in sequence, enums in the order of their options, empty values last.
  - **Filters** per column in a panel (text, number and date comparisons, yes or no, enum choices), plus a search across the visible cells that ignores case and accents.
  - **Pages** with a pager, or **virtual scrolling** that renders only the rows in view, so 100,000 rows scroll like ten.
  - **Selection** by key (single or multiple, ranges, select all), and **editing** in place with validation, committed to `rows` immutably.
  - **Columns** people can resize, move, pin to either edge, hide and fit to their content, with the layout kept in a `columnState` model to save.
  - **Server mode**: it keeps the sort, filters, search and page, and reports them in `queryChange`.
  - Every cell is reachable from the keyboard, and sorting, filtering, paging and errors are announced.

  Also: `NuiVirtualizer.slice()` renders the rows in view plus any row that must stay rendered, with gaps between them. The select's list uses it, so pressing End in a long list no longer renders every row in between for a frame. `NuiPopover.show()` passes its anchor as the popover's invoker, so supporting browsers return focus there.

### Patch Changes

- Updated dependencies [[`2a1e871`](https://github.com/needless-ui/needless-ui/commit/2a1e8719f5295d361798f8a948cc17b0aca86f41)]:
  - @needless-ui/css@0.5.0

## 0.4.0

### Minor Changes

- [`1ae373f`](https://github.com/needless-ui/needless-ui/commit/1ae373f491976437d2723167e097a31790f964df) - Four new components, and the pieces they share:

  - **Select:** one option or many, with groups, trees, type to jump and select all. Long lists render only the rows in view, so 100,000 options open as fast as ten.
  - **Combobox:** a text field with fuzzy search that marks what matched, chips for many values, new values from typed text, and results from a server.
  - **Command palette:** ⌘K from anywhere, search that reaches into nested pages, and shortcuts shown the way each platform writes them.
  - **Popover and hovercard:** native popovers next to their trigger that flip and follow it, with arrows, and hover delays for the rich tooltip.

  Shared, for building your own: `NuiOptionEngine` and `nui-option-list` (`@needless-ui/angular/select`), and in `@needless-ui/angular` `nuiFollow()` and `nuiPlace()` for placement, `NuiVirtualizer`, `nuiFuzzyMatch()`, and `nuiMatchesShortcut()` with `nuiShortcutKeys()`.

### Patch Changes

- Updated dependencies [[`1ae373f`](https://github.com/needless-ui/needless-ui/commit/1ae373f491976437d2723167e097a31790f964df)]:
  - @needless-ui/css@0.4.0

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

- Updated dependencies [[`4dba452`](https://github.com/needless-ui/needless-ui/commit/4dba4526e82eace539ffc2d9116c8bc3bba873ab)]:
  - @needless-ui/css@0.3.0

## 0.2.0

### Minor Changes

- [`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f) - Needlessly customizable components: spring physics, press effects, entrances, corner shapes, radius and density, for a whole subtree or one component.

  - **Tokens:** spring tokens (`--nui-spring-snappy` to `--nui-spring-mechanical`) are solved from real physics and compiled to `linear()` easings, and `--nui-motion` holds the one components use. New `--nui-radius-scale` and `--nui-density` tokens. The compiler now supports DTCG `transition` tokens.
  - **CSS:** `data-nui-motion`, `data-nui-press`, `data-nui-enter`, `data-nui-corners`, `data-nui-radius` and `data-nui-density` presets (`presets.css`). Buttons press in and spring back; dialogs and menus arrive on the spring and leave with a quick fade; menus grow out of the side they open on. Nothing moves under reduced motion, and density never takes a control below 24px.
  - **Angular:** `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density` inputs on `nuiButton`, `nuiDialog` and `nuiMenu`. The primary entry point adds `NuiPersonality`, the shared customization types and `springTransition()`.

### Patch Changes

- Updated dependencies [[`68f9271`](https://github.com/needless-ui/needless-ui/commit/68f9271344fb111d587bd4d44e729d543de8359f)]:
  - @needless-ui/css@0.2.0

## 0.1.0

### Minor Changes

- [`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec) - Initial release: `nuiButton` for native buttons and links, `nuiDialog` for the native `<dialog>` element, and `nuiMenu` built on Angular Aria, with submenus and checkbox and radio items. Standalone, signal-based directives, with `@angular/core`, `@angular/common`, `@angular/aria` and `@angular/cdk` 22 as peer dependencies.

### Patch Changes

- Updated dependencies [[`71f3105`](https://github.com/needless-ui/needless-ui/commit/71f31059d8aad5de8ff16a0bcb6d4a6bdc7f06ec)]:
  - @needless-ui/css@0.1.0
