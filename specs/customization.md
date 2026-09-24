# Customization

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/tokens`  | Implemented |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

How components move and look, beyond color: the spring they move with, what a button does while held, how dialogs and menus arrive, corner shape, radius and density.

## Model

Every knob is an inherited CSS custom property. A `data-nui-*` attribute on any element sets it for that element and everything inside it; the nearest attribute wins, so they nest. Framework inputs reflect to the same attribute on the component itself. Plain CSS can set the properties to values no preset offers.

| Attribute          | Custom property                                    | Presets (first is the default)                                             | Applies to              |
| ------------------ | -------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------- |
| `data-nui-motion`  | `--nui-motion`                                     | `snappy`, `bouncy`, `jelly`, `elastic`, `lazy`, `mechanical`, `none`       | button, dialog, menu    |
| `data-nui-press`   | `--nui-press` (a transform)                        | `sink`, `squish`, `pop`, `wobble`, `rubber`, `tilt`, `none`                | button                  |
| `data-nui-enter`   | `--nui-enter` (a transform), `--nui-enter-opacity` | `zoom`, `fade`, `drop`, `rise`, `unfold`, `flip`, `swing`, `slide`, `none` | dialog, menu            |
| `data-nui-corners` | `--nui-corner-shape`                               | `round`, `squircle`, `bevel`, `scoop`, `notch`, `square`                   | every rounded corner    |
| `data-nui-radius`  | `--nui-radius-scale` (a number)                    | `medium` (1), `none` (0), `small` (0.5), `large` (2), `full` (999)         | every radius            |
| `data-nui-density` | `--nui-density` (a number)                         | `regular` (1), `compact` (0.8), `roomy` (1.25)                             | heights, paddings, gaps |

Presets live in `packages/css/src/presets.css`. `--nui-motion`, `--nui-radius-scale` and `--nui-density` are design tokens; the transforms and the corner shape are CSS only, since DTCG has no type for them.

## Motion

- `--nui-motion` holds a whole transition timing, `<duration> <easing>`, so components write `transition: transform var(--nui-motion)`.
- The presets are spring tokens, `--nui-spring-*`. Each is a DTCG `transition` whose `$value` is the closest cubic-bezier, for other tools. The physics sits in `$extensions["com.needlessui.spring"]` as `{ stiffness, damping, mass }`, and the Needless UI compiler replaces the stand-in with the spring's own settling time and curve.
- Springs travel from 0 to 1 starting at rest. The compiler uses the exact solution of the damped oscillator: under-, critically or overdamped. It samples every millisecond until the spring stays within 0.001 of 1, then simplifies the samples to `linear()` stops with Ramer–Douglas–Peucker. The simplified curve stays within 0.004 of the samples (0.4% of the distance), measured vertically. Values are rounded to 3 decimals and positions to 2. Springs that take longer than 10 s to settle are rejected.
- Runtime springs (Angular `spring` input, `springTransition()`) must produce the same string as the compiler for the same physics. A test compares them.
- Components press in on a fast standard easing, spring back on `--nui-motion`, arrive on `--nui-motion`, and leave with a fast fade. Exits never use springs, because a dialog that is still animating stays in the top layer.

## Components

- **Button:** while `:active`, `transform: var(--nui-press)`. Radius is multiplied by `--nui-radius-scale`. Height, padding and gap are multiplied by `--nui-density`, and the height never drops below 24px.
- **Dialog:** enters from `transform: var(--nui-enter)` and `opacity: var(--nui-enter-opacity)`, growing from its center. Radius is capped at 1.5rem so content isn't cut. Padding and gap follow `--nui-density`.
- **Menu:** enters like the dialog, growing out of the side of the trigger it opened on (`data-side`: `bottom`, `top`, `left`, `right`, set by the positioning code). Radius is capped at 1.25rem. Items follow `--nui-density` with a 24px minimum.

## Accessibility

- Under `prefers-reduced-motion: reduce`, spring tokens and durations collapse to 0.01ms, and components ignore `--nui-press` and `--nui-enter`: nothing moves.
- No preset changes colors, so contrast checks are unaffected.
- Density keeps every target at least 24px (WCAG 2.2 target size).
- `corner-shape` is progressive: browsers without it draw round corners.
- `slide` enters from the inline end: `--nui-dir` is 1 under `[dir='ltr']` and -1 under `[dir='rtl']`.

## Implementation notes

- **Angular:** `NuiPersonality` (primary entry point) holds the inputs `motion`, `spring`, `press`, `enter`, `corners`, `radius` and `density`. Each component exposes the inputs that apply to it as host directive inputs. Unset inputs render no attribute, so they inherit. `spring` compiles with `springTransition()` into an inline `--nui-motion`.
- **React (planned):** the same attributes as props, and a `springTransition()` that passes the shared comparison test.
