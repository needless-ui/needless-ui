---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

An input mask, a phone field and a color picker.

- **Input mask** (`@needless-ui/angular/mask`): `input[nuiMask]` formats a native field as people type, with tokens for digits, letters and codes, your own tokens, and masks picked by what's typed. The caret keeps its place, deleting skips over literals, digits of any script count, and forms get the data (`unmask`) or what's shown, with unfinished values as errors. Helpers for card numbers (brand, grouping, Luhn) and IBANs (country lengths, check digits).
- **Phone field** (`@needless-ui/angular/phone-field`): a country picker and a number grouped as the country writes it, valued in E.164. A trunk prefix typed at home is left out of the value; a calling code typed or pasted (`+44`, `0044`) picks its country, and so does an area code where countries share a code. `nuiParsePhone`, `nuiFormatPhone` and `nuiPhoneValid` work on their own.
- **Color picker** (`@needless-ui/angular/color-picker`): OKLCH, with an area that fills the sRGB or Display P3 gamut and marks where sRGB ends, hue and opacity sliders, a field that reads every CSS color syntax, formats from hex to `color(display-p3)`, swatches, the eyedropper, and a WCAG 2 contrast check. The color functions (`nuiParseColor`, `nuiFormatColor`, `nuiToGamut`, `nuiContrast`) are exported.
- The select gains `triggerText`, for what its trigger shows.
