# Rating

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A radio group (`nui-rating`) of labels (`nui-rating-item`), each with a visually hidden native radio (`nui-rating-input`) and a star (`nui-rating-star`). Read-only, one strip (`nui-rating-display`) filled to a fraction.

## API

| CSS hook                    | Angular                      | Values                             | Default |
| --------------------------- | ---------------------------- | ---------------------------------- | ------- |
| —                           | `[(value)]`, forms           | number or null                     | null    |
| `--_max`                    | `max`                        | number of stars                    | 5       |
| `data-readonly`, `--_value` | `readonly`                   | boolean: shows any fraction        | `false` |
| `:disabled` radios          | `disabled`                   | boolean                            | `false` |
| —                           | `clearable`                  | clicking the chosen star clears it | `false` |
| —                           | `starLabel`, `readonlyLabel` | label functions, for translations  | English |

## Behavior

CSS fills every star up to the checked one and, on hover, previews up to the pointer.

## Keyboard

Native radio group: Tab reaches the group, arrows change the rating, Space checks.

## Accessibility

- Each star is a real radio named "3 stars"; name the group with `aria-label`.
- Read-only it's `role="img"` named "Rated 4.3 out of 5".
- Stars are drawn with CSS masks, so they follow forced colors.
