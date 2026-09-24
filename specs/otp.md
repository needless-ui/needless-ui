# OTP input

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A wrapper (`nui-otp`) with one native `<input>` (`nui-otp-input`) laid invisibly over a row of slots (`nui-otp-slot`, hidden from assistive technology), with optional separators between groups.

## API

| CSS hook                                            | Angular                   | Values                                  | Default  |
| --------------------------------------------------- | ------------------------- | --------------------------------------- | -------- |
| —                                                   | `length` on `nuiOtp`      | number of characters                    | 6        |
| —                                                   | `pattern`                 | `digits`, `alphanumeric`                | `digits` |
| `nui-otp-separator`                                 | `groups`                  | sizes, e.g. `[3, 3]`                    | none     |
| —                                                   | `masked`                  | boolean: draws dots                     | `false`  |
| —                                                   | `(completed)`             | emits the code when the last slot fills | —        |
| `data-filled`, `data-active`, `data-caret` on slots | set by the input          | —                                       | —        |
| `aria-invalid="true"` on the input                  | yours                     | red slots and a shake                   | —        |
| —                                                   | `webOtp` on `nuiOtpInput` | boolean: fills from SMS via WebOTP      | `false`  |

The input gets `autocomplete="one-time-code"`, `inputmode`, `maxlength` and `pattern`. Any forms API works on it.

## Behavior

- Pasting cleans the code ("123-456", " 123 456 ") and drops characters the pattern doesn't allow; typing refuses them.
- Clicking or arrowing onto a filled slot selects its character, so typing replaces it.
- Values set by a form (without an input event) still update the slots.

## Keyboard

Everything a text field does. ←/→ move one slot; Backspace deletes before the caret.

## Accessibility

- Screen readers meet one ordinary text field; label it with `aria-label` or a `<label>`.
- The active slot shows the focus ring, since the real input is invisible.
- Under reduced motion the caret doesn't blink and nothing hops or shakes.

## Implementation notes

- **Angular:** `NuiOtp` (`[nuiOtp]`) renders the slots; `NuiOtpInput` (`input[nuiOtpInput]`) watches the input's `value` property to follow programmatic writes.
