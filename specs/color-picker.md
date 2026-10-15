# Color picker

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A color picker (`nui-color-picker`) in OKLCH: an area (`nui-color-area`) of lightness (down) and chroma (across) for the hue, painted on a canvas (`nui-color-canvas`) with a thumb (`nui-color-thumb`); a row with a preview (`nui-color-preview`), sliders for hue and opacity (`nui-color-slider`, `data-channel`) and the eyedropper (`nui-color-button`); a field for the value (`nui-color-input`) with a format button (`nui-color-format`); swatches (`nui-color-swatch`); and the contrast against a background (`nui-color-contrast`, with `nui-color-grade`s for AA and AAA).

Chroma across the area is relative: from gray to the most the gamut holds at that lightness and hue. Every point is a color the screen can show, and the thumb stays put as the hue turns.

With `data-view="wheel"` the area is an OKLCH color wheel at one lightness: hue goes around (0° to the right, turning up, as OKLab's a and b axes), and chroma grows outward from gray in the middle to 0.37 at the edge, a little past the most Display P3 holds. A circle holds colors of equal chroma. Past the most the gamut holds at each hue the wheel is empty, so its shape is the gamut at that lightness. Around it, a ring (`--_ring`, a conic gradient) shows each hue's most vivid color at that lightness, which is what a click there picks. A lightness slider (`data-channel="lightness"`) replaces the hue slider; its track (`--_track`) runs from black to white at the hue and chroma.

The preview is a button (`data-action="copy"`) that copies the value, where the browser has a clipboard; it draws a copy mark, dark on light colors (`data-light`), and a check for a moment once it has copied (`data-copied`).

## API

| CSS hook        | Angular        | Values                                                                       | Default              |
| --------------- | -------------- | ---------------------------------------------------------------------------- | -------------------- |
| —               | `[(value)]`    | the color, written in the format; empty until one is picked                  | `''`                 |
| —               | `[(format)]`   | `hex`, `rgb`, `hsl`, `oklch` or `p3` (`color(display-p3 …)`)                 | `hex`                |
| —               | `formats`      | the formats the button cycles through                                        | hex, rgb, hsl, oklch |
| `data-view`     | `view`         | `area`, or `wheel`: hue around and chroma outward, with a lightness slider   | `area`               |
| —               | `gamut`        | `srgb`, or `p3` for wide-gamut screens: a dashed line marks where sRGB ends  | `srgb`               |
| —               | `alpha`        | the opacity slider; without it, colors are opaque                            | true                 |
| —               | `swatches`     | colors to pick at once: `'#e11d48'` or `{ color, label }`                    | `[]`                 |
| —               | `contrastWith` | a background: shows the WCAG 2 contrast ratio, and whether it passes AA, AAA | —                    |
| —               | `eyeDropper`   | the eyedropper button, where the browser has one                             | true                 |
| —               | `copy`         | the preview copies the value, where the browser has a clipboard              | true                 |
| `data-disabled` | `disabled`     | —                                                                            | false                |
| —               | `color()`      | the color picked, in OKLCH                                                   | —                    |
| —               | `labels`       | every text it says, for translation                                          | —                    |

Helpers: `nuiParseColor` reads every CSS color syntax (hex, `rgb`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`, `color()`); `nuiFormatColor`, `nuiToGamut` (CSS Color 4 gamut mapping: chroma lowered until clipping the rest changes the color less than a just noticeable difference, 0.02 in OKLab), `nuiInGamut`, `nuiMaxChroma` and `nuiContrast`.

## Behavior

- The field takes any CSS color, names included, on Enter or when it loses focus. One it can't read goes back to the value; Escape does the same.
- A color given from outside (the value, the field, a swatch, the eyedropper) stays exactly as it is until the picker moves. A few, such as pure blue, lie past the edge of the area's slice, where no thumb position reaches.
- Formats of sRGB (hex, rgb, hsl) and of P3 bring the color into their gamut first, the CSS way: lightness and hue kept, chroma lowered. A color just outside is only clipped.
- Grays have no hue of their own: the hue slider keeps its place when chroma reaches zero.
- On the wheel, chroma is OKLCH's own. It's kept while the lightness or the hue leave it no room (the color takes the most there is), and comes back when they do. The pointer past the gamut's edge puts the thumb on it.
- The preview copies the value as the field shows it, and a status says "Copied".
- A swatch that matches the color shows pressed.
- The contrast sample is drawn by CSS, the text in the color on the background.

## Keyboard

| Key                 | On the area's thumb                         | On the wheel's thumb                                      |
| ------------------- | ------------------------------------------- | --------------------------------------------------------- |
| ← / →               | Less or more chroma, by 1% (10% with Shift) | Turn the hue back or on, by 1° (10° with Shift)           |
| ↑ / ↓               | Lighter or darker, by 1% (10% with Shift)   | More or less chroma, by 1% of the radius (10% with Shift) |
| Page Up / Page Down | Lighter or darker, by 10%                   | More or less chroma, by 10% of the radius                 |
| Home / End          | No chroma, or the most                      | No chroma, or the most                                    |

The sliders are native ranges, with their own keys. The area, the wheel and the sliders run left to right in every language: they're pictures of color.

## Accessibility

- The thumb is a `slider` named "Color" that says both of its values: "Lightness 62%, chroma 75%". On the wheel its value is the hue, and it says "Hue 25°, chroma 0.15".
- The hue, lightness and opacity sliders are native range inputs, named; hue reads in degrees, lightness and opacity as percentages.
- The preview's copy button is named "Copy the color", and a status region says "Copied" when it has.
- Swatches are buttons named by their label or value, with `aria-pressed`.
- AA and AAA say whether they pass in words, not only by color.
- In forced colors, the colors themselves stay: they're the point.
