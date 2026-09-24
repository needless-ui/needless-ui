# Button

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

One native `<button>` or `<a>` element with the `nui-button` class. Content is text, optionally with leading or trailing `<svg>` icons, which scale with the font size.

## API

| CSS hook                     | Angular input | Values                                | Default  |
| ---------------------------- | ------------- | ------------------------------------- | -------- |
| `data-variant`               | `variant`     | `solid`, `soft`, `outline`, `ghost`   | `solid`  |
| `data-tone`                  | `tone`        | `accent`, `neutral`, `danger`         | `accent` |
| `data-size`                  | `size`        | `sm` (28px), `md` (36px), `lg` (44px) | `md`     |
| `disabled` / `aria-disabled` | `disabled`    | boolean                               | `false`  |

Every attribute is optional; without them the CSS renders the defaults.

It also takes the [customization](customization.md) presets `motion`, `spring`, `press`, `corners`, `radius` and `density`, as inputs or as `data-nui-*` attributes on it or any ancestor.

## States

Default, hover (pointer devices only), active, focus-visible, disabled. Disabled buttons also drop hover and active styles.

## Keyboard

| Key   | `<button>` | `<a>`            |
| ----- | ---------- | ---------------- |
| Tab   | Focuses    | Focuses          |
| Enter | Activates  | Follows the link |
| Space | Activates  | Scrolls (native) |

A disabled `<button>` leaves the tab order (native behavior). A disabled `<a>` stays focusable so screen reader users can find it, is announced as disabled through `aria-disabled="true"`, and ignores activation.

## Accessibility

- **Name:** the element's text. Icon-only buttons need an `aria-label`.
- **Contrast:** text meets 4.5:1 for every variant, tone and mode. The palette generator enforces this.
- **Focus:** a 2px outline in `--nui-color-focus-ring`, offset by 2px, at least 3:1 against the canvas in both modes.
- **Target size:** the smallest size is 28px, above the WCAG 2.2 minimum of 24px. Compact density never takes it below 24px.
- **Forced colors:** the transparent border becomes a visible system-colored border; disabled buttons use `GrayText`.
- **Motion:** color transitions use duration tokens and the press springs back on `--nui-motion`; both collapse under `prefers-reduced-motion`, which also turns the press transform off.

## Implementation notes

- **Angular:** `NuiButton` is a directive on native elements (`button[nuiButton], a[nuiButton]`), not a wrapper component. The `disabled` input owns the attribute on both element types. On anchors, a capture-phase click listener blocks activation before `routerLink` or other listeners run.
- **React (planned):** render the same markup and attributes. The same visual regression suite must pass against both implementations.
