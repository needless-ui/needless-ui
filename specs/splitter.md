# Splitter

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

Panes side by side, or stacked (`nui-splitter`, `data-orientation`), with a handle between every two (`nui-splitter-handle`): a strip with a line and a grip that drags, and moves from the keyboard. Each pane (`nui-splitter-pane`) takes a share of the room the handles leave, in percent.

Sizes add up to 100. A pane's own sizes (its first size, its limits, its folded size) take pixels, rems or percent: `240px`, `12rem`, `30%`.

## API

| CSS hook             | Angular                      | Values                                                             | Default       |
| -------------------- | ---------------------------- | ------------------------------------------------------------------ | ------------- |
| `data-orientation`   | `orientation`                | `horizontal` (side by side) or `vertical` (stacked)                | `horizontal`  |
| `flex-grow` per pane | `[(sizes)]`                  | each pane's share in percent, in order                             | shared evenly |
| —                    | `storageKey`                 | keeps the sizes in `localStorage` (`nui-splitter:<key>`)           | —             |
| —                    | `step`                       | how far an arrow key moves a handle, in percent (twice with Shift) | 5             |
| —                    | pane `defaultSize`           | its size at first, when there are no sizes to restore              | an even share |
| —                    | pane `min`, `max`            | its limits                                                         | `0`, `100%`   |
| `data-collapsed`     | pane `collapsible`           | it folds: dragged below half its minimum, or Enter on its handle   | false         |
| —                    | pane `collapsedSize`         | its size folded, such as a rail of icons                           | 0             |
| `aria-label`         | pane `label`, handle `label` | names the handle that resizes the pane                             | —             |
| `aria-disabled`      | handle `disabled`            | the handle doesn't move                                            | false         |
| `data-dragging`      | —                            | on the splitter and the handle while a handle is dragged           | —             |

## Behavior

- A handle moves the boundary between the panes on its sides. When the pane it takes room from reaches its minimum, the panes beyond it give way in turn; the handle stops when none can.
- Sizes that don't fit the limits are fitted: the given ones where they can, the rest shared out, the total kept at 100.
- A collapsible pane folds when dragged below half its minimum and comes back past it. Enter or a double click on its handle folds it, and brings it back at the size it had.
- With `storageKey`, the sizes are saved when a drag ends or a key moves a handle, and restored on the next visit.
- In right-to-left text, horizontal panes run from the right, and the arrow keys follow the handle's direction.

## Keyboard

Each handle is a tab stop.

| Key        | Behavior                                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| ← / →      | Moves a vertical handle (horizontal panes) by `step`; mirrored in right-to-left |
| ↑ / ↓      | Moves a horizontal handle (stacked panes) by `step`                             |
| Shift      | With an arrow, moves twice as far                                               |
| Home / End | The pane before the handle to its minimum or maximum                            |
| Enter      | Folds the collapsible pane, or brings it back                                   |

## Accessibility

- A handle is a focusable `separator` (the WAI-ARIA window splitter): `aria-valuenow` is the size of the pane before it, between `aria-valuemin` and `aria-valuemax`, `aria-controls` points at that pane, and `aria-orientation` is the handle's own (vertical between side-by-side panes).
- Name each handle, through the pane's `label` or its own: "Files" says what it resizes.
- Dragging captures the pointer, so it keeps up with fast moves and ends where the pointer does.
