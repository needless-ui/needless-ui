# Toast

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A region (`nui-toaster`, a `popover="manual"` element in the top layer) holding an ordered list, newest first. Each toast (`nui-toast`) has a tone icon (drawn by CSS), a title, an optional description, an optional action button, a close button and a timer line.

## API

| CSS hook                      | Angular                                                                                       | Values                                                                              | Default                |
| ----------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------- |
| `data-position` on the region | `position` on `<nui-toaster>`                                                                 | `top-start`, `top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end` | `bottom-end`           |
| `data-expanded`               | `expanded`                                                                                    | boolean: always fanned out                                                          | `false`                |
| `data-tone` on a toast        | `tone` option                                                                                 | `neutral`, `accent`, `success`, `warning`, `danger`                                 | `neutral`              |
| `data-loading`                | `promise()`                                                                                   | spinner while a promise is pending                                                  | —                      |
| —                             | `NuiToaster.show(options)`, `success()`, `warning()`, `danger()`, `promise()`, `dismiss(id?)` | returns `{ id, update(), dismiss() }`                                               | —                      |
| —                             | `duration` option                                                                             | milliseconds, `Infinity` to stay                                                    | 5000 (8000 for danger) |

A toast with the `id` of one on screen replaces it in place.

## Behavior

- Toasts pile up behind the newest one (three visible) and fan out while the region is hovered or focused.
- Timers stop while the region is hovered or focused and while the page is hidden, then continue with the time that was left.
- A sideways swipe toward the nearest edge throws a toast away; a short or slow one springs back.
- Running an action dismisses its toast.
- A modal dialog opened later would cover the region, so the region re-enters the top layer when a toast arrives.

## Keyboard

| Key    | Behavior                                                                                   |
| ------ | ------------------------------------------------------------------------------------------ |
| Alt+T  | Moves focus to the newest toast (the key is configurable, matched by `KeyboardEvent.code`) |
| Tab    | Moves through toasts, their actions and close buttons                                      |
| Escape | Dismisses the focused toast; focus moves to the next toast, or back where it was           |

## Accessibility

- The region is a landmark (`role="region"`) whose name says how to reach it: "Notifications (Alt+T)".
- Every toast is announced through the CDK `LiveAnnouncer` when it appears or changes: politely, or assertively for danger. Toasts never take focus.
- Toasts that are waiting (loading) never time out. Nothing that must be acted on should live only in a toast: WCAG 2.2.1 allows auto-dismissal because timers pause on hover and focus and the content is repeated elsewhere.
- Under reduced motion, toasts don't swipe or animate and the timer line is hidden.

## Implementation notes

- **Angular:** `NuiToaster` is a root service; `NuiToasterRegion` (`<nui-toaster>`) renders it. Leaving toasts use `animate.leave`. Stack offsets come from measured heights (ResizeObserver).
