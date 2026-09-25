# Input mask

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | —           |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A mask on a native text field (`input[nuiMask]`): what's typed is formatted as it's typed. The field is the page's own, styled as the page styles its fields; the mask adds no markup.

A mask is a string of tokens and literals. Lower-case tokens take any script, upper-case ones are for codes:

| Token | Takes                                       |
| ----- | ------------------------------------------- |
| `0`   | a digit (of any script, written 0 to 9)     |
| `a`   | a letter                                    |
| `*`   | a letter or a digit                         |
| `A`   | a letter from A to Z, put in upper case     |
| `X`   | a letter from A to Z or a digit, upper case |
| `\`   | makes the next character literal            |

Every other character is a literal: `+1 (000) 000-0000`, `00/00/0000`, `AA00 XXXX XXXX`. A mask can also be a function that picks one for the data typed so far, as a card number's brand does.

## API

| CSS hook    | Angular               | Values                                                                   | Default |
| ----------- | --------------------- | ------------------------------------------------------------------------ | ------- |
| —           | `nuiMask`             | the mask, or `(raw) => mask`                                             | —       |
| —           | `tokens`              | tokens to add or replace: `{ '#': { pattern: /[0-9a-f]/i } }`            | —       |
| —           | `unmask`              | the value is only the data, without literals                             | false   |
| —           | `[(value)]`           | what's shown, or the data with `unmask`                                  | `''`    |
| —           | `raw()`, `complete()` | the data typed; every place is filled                                    | —       |
| `inputmode` | —                     | `numeric` when the mask takes only digits, unless the field sets its own | —       |

Helpers: `nuiMaskFormat`, `nuiUnmask`; card numbers with `nuiCardMask`, `nuiCardBrand`, `nuiLuhn` and `nuiCardValid`; IBANs with `nuiIbanMask`, `nuiIbanLength` and `nuiIbanValid`.

## Behavior

- Characters a place doesn't take stay out. Literals go in as the data reaches them, and after the last character while typing forward (`12` becomes `12/`).
- The caret keeps its place in the data: typing or deleting in the middle doesn't send it to the end.
- Deleting a literal deletes the character of data beyond it, since the mask would only put the literal back.
- A character typed into a full field stays out; a paste that's too long is cut short.
- Input methods (composition) finish before the field is formatted.
- With forms, an unfinished value is an error: `{ nuiMask: { actual, expected } }`. An empty one isn't: add `required` for that.

## Keyboard

The field's own. Backspace and Delete skip over literals.

## Accessibility

- It's the page's field, with its label: the mask changes only its text.
- Say what's expected in the label or a hint ("Card number, 16 digits"): a mask isn't an instruction. The literals typed for people are read as they are.
- `inputmode` brings up a numeric keyboard on phones for digit masks.
