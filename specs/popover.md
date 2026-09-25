# Popover and hovercard

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

- **Popover** (`nui-popover`): a native `popover="auto"` element next to the button that opens it, for interactive content (filters, a small form). An optional arrow (`data-arrow`) points at the trigger.
- **Hovercard** (`nui-hovercard`): a native `popover="manual"` element with `role="tooltip"`, for rich text that describes its trigger (a profile, a definition). No controls inside.

Both are placed by `nuiFollow()` from `@needless-ui/angular`, which writes `top`/`left`, the space left (`max-height`/`max-width`), `data-side` and `--nui-anchor-center` (where the arrow goes). They flip to the other side when there's no room and stay on screen.

## API

| CSS hook              | Angular                          | Values                                       | Default  |
| --------------------- | -------------------------------- | -------------------------------------------- | -------- |
| `data-side` (written) | `side`                           | `top`, `bottom`, `start`, `end`              | `bottom` |
| —                     | `align`                          | `start`, `center`, `end`                     | `start`  |
| —                     | `offset`                         | px between trigger and panel                 | 8        |
| `data-arrow`          | `arrow`                          | boolean                                      | false    |
| —                     | `openDelay`, `closeDelay` (card) | ms                                           | 500, 300 |
| —                     | `(openChange)`                   | boolean                                      | —        |
| —                     | `show(anchor)`, `hide()`         | open from code, next to any element          | —        |
| —                     | `nuiPopoverTrigger`              | the popover to open (native `popovertarget`) | —        |
| —                     | `nuiHovercardTrigger`            | the card that describes this element         | —        |

`start` and `end` follow the writing direction. Customization inputs (`enter`, `motion`, `spring`, `corners`, `radius`, `density`) work as everywhere.

## Behavior

- A popover opens and closes with its trigger, closes on Escape and on clicks outside (the browser's light dismiss), and returns focus to the trigger. Only one auto popover is open at a time, unless nested.
- A hovercard opens after `openDelay` on hover (mouse or pen, not touch) and at once when its trigger gets keyboard focus. It stays open while the pointer is over it or travelling to it, through the triangle between the pointer and the card, and closes `closeDelay` after the pointer leaves both.
- Touch screens can't hover, so a finger never opens a hovercard: its text only adds to what the page shows, and is read with its trigger by screen readers (`aria-describedby`). Put anything a person needs in the page, or in a popover.
- Both follow their trigger when the page scrolls or resizes.

## Keyboard

| Key                          | Behavior                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| Enter / Space on the trigger | Opens or closes the popover                                                                    |
| Tab                          | Moves into an open popover: it comes right after its trigger in tab order                      |
| Escape                       | Closes the popover (focus returns to the trigger) or hides the hovercard, without moving focus |

## Accessibility

- The popover is a non-modal `role="dialog"`; name it with `aria-label` or `aria-labelledby`. Its trigger gets `aria-haspopup="dialog"` and the native `aria-expanded`.
- The hovercard is `role="tooltip"` and its trigger's `aria-describedby`, so its text is announced with the trigger. It meets WCAG 1.4.13: dismissible (Escape), hoverable, and persistent while hovered or focused.
