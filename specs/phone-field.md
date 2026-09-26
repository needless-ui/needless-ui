# Phone field

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A phone number field (`nui-phone-field`, `nui-phone`): one box with a country picker (`nui-phone-country`, a select whose trigger shows the flag and the calling code) and the number (`nui-phone-input`, `type="tel"`). The list of countries shows each flag (`nui-phone-flag`), name and code (`nui-phone-code`).

The value is the number in E.164: `+393331234567`. The box keeps left-to-right order in every language, code first, as numbers are read.

## API

| CSS hook        | Angular            | Values                                      | Default               |
| --------------- | ------------------ | ------------------------------------------- | --------------------- |
| —               | `[(value)]`        | the number in E.164, or empty               | `''`                  |
| —               | `[(country)]`      | the country, as its region: `IT`            | the locale's region   |
| —               | `countries`        | the countries to offer                      | every one with a code |
| —               | `locale`           | the language of country names               | `LOCALE_ID`           |
| —               | `label`, `inputId` | names the number; its id, for `<label for>` | —                     |
| —               | `placeholder`      | the number's placeholder                    | —                     |
| `data-invalid`  | `invalid`          | marks the number invalid (`aria-invalid`)   | false                 |
| `data-disabled` | `disabled`         | —                                           | false                 |
| —               | `labels`           | every text it says, for translation         | —                     |

Helpers: `nuiParsePhone`, `nuiFormatPhone`, `nuiPhoneValid`, `nuiPhoneRegionOf` and the calling codes in `NUI_PHONE_COUNTRIES`.

## Behavior

- The number is grouped as its country groups numbers, as it's typed: `(212) 555-1234`, `6 12 34 56 78`, `11 91234-5678`. Countries without a settled grouping get groups of three.
- A trunk prefix typed at the start (the 0 of `07400 123456`, the 1 before a North American number) is shown and left out of the value. Italy, San Marino and the Vatican keep their leading 0: it's part of the number.
- Typing or pasting a calling code (`+44…` or `0044…`) picks its country, and the rest is the number. Until the digits make a code, they stay as typed.
- Where countries share a code, the start of the number tells them apart as it's typed: area code 416 is Canada, 268 Antigua and Barbuda.
- Picking a country regroups the number and moves on to it.
- Safari on iPhone turns phone numbers in the page's text into links by itself, moving the text, which breaks a number that Angular keeps up to date (`nuiFormatPhone`'s output, say). Pages that show numbers add `<meta name="format-detection" content="telephone=no">`.
- On touch screens, which have no keys to type a name with, the country list has a search field (the select's `search: 'auto'`, named by `labels.search`, "Search countries") that finds countries by name or calling code: `+39` finds Italy.
- With forms, a number of the wrong length for its country, or a code no country has, is an error: `{ nuiPhone: { region, actual, min, max } }`.
- Digits of any script are taken, and written 0 to 9.

The groupings and lengths are for the countries most numbers come from, not every numbering plan: for full validation, check numbers on the server with a numbering-plan library.

## Keyboard

The select's keys on the country picker (type a name to jump to it), and the field's own on the number, with Backspace and Delete skipping over spaces and brackets.

## Accessibility

- The country picker is named "Country code" and reads its flag and code. Picking a country from the number (by its code or area code) is announced.
- Name the number with a `<label for>` and `inputId`, or `label`.
- `autocomplete="tel"` lets browsers fill the whole number, code and all.
- Flags are emoji, hidden from assistive technology in the list: the name says which country it is.
