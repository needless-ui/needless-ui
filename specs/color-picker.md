# Color picker

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A color picker (`nui-color-picker`) in OKLCH: an area (`nui-color-area`) of lightness (down) and chroma (across) for the hue, painted on a canvas (`nui-color-canvas`) with a thumb (`nui-color-thumb`); a row with a preview (`nui-color-preview`), sliders for hue and opacity (`nui-color-slider`, `data-channel`) and the eyedropper (`nui-color-button`); a field for the value (`nui-color-input`) with a format button (`nui-color-format`); swatches (`nui-color-swatch`); and the contrast against a background (`nui-color-contrast`, with `nui-color-grade`s for AA and AAA).

Chroma across the area is relative: from gray to the most the gamut holds at that lightness and hue. Every point is a color the screen can show, and the thumb stays put as the hue turns.

## API

| CSS hook        | Angular        | Values                                                                       | Default              |
| --------------- | -------------- | ---------------------------------------------------------------------------- | -------------------- |
| —               | `[(value)]`    | the color, written in the format; empty until one is picked                  | `''`                 |
| —               | `[(format)]`   | `hex`, `rgb`, `hsl`, `oklch` or `p3` (`color(display-p3 …)`)                 | `hex`                |
| —               | `formats`      | the formats the button cycles through                                        | hex, rgb, hsl, oklch |
| —               | `gamut`        | `srgb`, or `p3` for wide-gamut screens: a dashed line marks where sRGB ends  | `srgb`               |
| —               | `alpha`        | the opacity slider; without it, colors are opaque                            | true                 |
| —               | `swatches`     | colors to pick at once: `'#e11d48'` or `{ color, label }`                    | `[]`                 |
| —               | `contrastWith` | a background: shows the WCAG 2 contrast ratio, and whether it passes AA, AAA | —                    |
| —               | `eyeDropper`   | the eyedropper button, where the browser has one                             | true                 |
| `data-disabled` | `disabled`     | —                                                                            | false                |
| —               | `color()`      | the color picked, in OKLCH                                                   | —                    |
| —               | `labels`       | every text it says, for translation                                          | —                    |

Helpers: `nuiParseColor` reads every CSS color syntax (hex, `rgb`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`, `color()`); `nuiFormatColor`, `nuiToGamut` (CSS Color 4 gamut mapping), `nuiInGamut`, `nuiMaxChroma` and `nuiContrast`.

## Behavior

- The field takes any CSS color, names included, on Enter or when it loses focus. One it can't read goes back to the value; Escape does the same.
- Formats of sRGB (hex, rgb, hsl) and of P3 bring the color into their gamut first, the CSS way: lightness and hue kept, chroma lowered.
- Grays have no hue of their own: the hue slider keeps its place when chroma reaches zero.
- A swatch that matches the color shows pressed.
- The contrast sample is drawn by CSS, the text in the color on the background.

## Keyboard

| Key                 | On the area's thumb                         |
| ------------------- | ------------------------------------------- |
| ← / →               | Less or more chroma, by 1% (10% with Shift) |
| ↑ / ↓               | Lighter or darker, by 1% (10% with Shift)   |
| Page Up / Page Down | Lighter or darker, by 10%                   |
| Home / End          | No chroma, or the most                      |

The sliders are native ranges, with their own keys. The area and the sliders run left to right in every language: they're pictures of color.

## Accessibility

- The thumb is a `slider` named "Color" that says both of its values: "Lightness 62%, chroma 75%".
- The hue and opacity sliders are native range inputs, named; opacity reads as a percentage.
- Swatches are buttons named by their label or value, with `aria-pressed`.
- AA and AAA say whether they pass in words, not only by color.
- In forced colors, the colors themselves stay: they're the point.
