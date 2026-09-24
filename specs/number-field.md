# Number field

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A wrapper (`nui-number-field`) with a text input (`nui-number-input`, an ARIA spinbutton) and optional step buttons (`nui-number-step`) on either side.

## API

| CSS hook                         | Angular            | Values                                                | Default               |
| -------------------------------- | ------------------ | ----------------------------------------------------- | --------------------- |
| —                                | `[(value)]`, forms | number or null                                        | null                  |
| `aria-valuemin`, `aria-valuemax` | `min`, `max`       | numbers                                               | none                  |
| —                                | `step`             | number                                                | 1                     |
| —                                | `format`           | `Intl.NumberFormatOptions` (currency, percent, units) | none                  |
| —                                | `locale`           | BCP 47 tag                                            | the app's `LOCALE_ID` |
| `data-step` on a button          | `nuiNumberStep`    | `1` (up) or `-1` (down)                               | —                     |

`nuiParseNumber(text, locale, options)` is exported.

## Behavior

- Shows the number formatted for the locale and reads typed text back in the same format, including native digits (Arabic-Indic, Persian, Devanagari), separators and minus signs.
- On blur the value snaps to `step` and is clamped to `min`/`max`.
- Holding a button repeats, faster and faster. Buttons turn off at the limits.

## Keyboard

| Key                 | Behavior                |
| ------------------- | ----------------------- |
| ↑ / ↓               | One step up or down     |
| Page Up / Page Down | Ten steps               |
| Home / End          | Minimum / maximum       |
| Enter               | Commits the typed value |

## Accessibility

- `role="spinbutton"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and a formatted `aria-valuetext`.
- The buttons are out of the tab order (the keys do the same) but named ("Increase", "Decrease") and linked with `aria-controls`; screen reader activation works.
