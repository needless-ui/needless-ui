---
'@needless-ui/angular': minor
'@needless-ui/css': minor
---

**Color picker:** an OKLCH color wheel, copying, and exact colors.

- `view="wheel"` lays colors out on a wheel: hue goes around (0° to the right, turning up), chroma grows outward, and a lightness slider replaces the hue slider. A circle around the middle holds colors of equal chroma, the wheel's shape is everything the gamut holds at that lightness, and a ring around it shows each hue's most vivid color there. The wheel keeps its chroma while the lightness or hue leave it no room, and gives it back when they do. On its thumb, the arrow keys turn the hue and change the chroma. With `gamut="p3"`, a dashed line marks where sRGB ends.
- The preview is a button that copies the value, where the browser has a clipboard, and says "Copied". `copy` turns it off; `labels.copy` and `labels.copied` name it. The hue slider reads its value in degrees.
- A color given from outside stays exactly as it is until the picker moves. Pure blue, `navy`, `mediumblue` and other colors near the blue corner of sRGB lie past the edge of the area's constant-hue slice, and typing them used to give a different blue (`#0000ff` became `#0031e5`).
- `nuiToGamut` (and so every hex, `rgb()`, `hsl()` and P3 value) maps colors the CSS Color 4 way: chroma comes down only until clipping the rest changes the color less than the eye notices. A color just outside a gamut, as a vivid one rounded in `oklch()` often is, is only clipped: `oklch(28.93% 0.2005 264.05)`, which is `#00008c` rounded, used to come back as `#00167d`.
