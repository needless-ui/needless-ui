# Tour

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A guided tour (`nui-tour`): a card for each step (`nui-tour-card`) beside the part of the page it's about, with the rest of the page dimmed around it (`nui-tour-spotlight`). The card has a close button (`nui-tour-close`), a title (`nui-tour-title`), its content (`nui-tour-body`) and a footer (`nui-tour-footer`) with the progress (`nui-tour-progress`, and `nui-tour-dots` for sighted users), Back, and Next or Done.

The card is a dialog (`nui-tour`, full screen and transparent) in the top layer. A step without a target shows centered (`data-centered`).

## API

| CSS hook           | Angular                 | Values                                                                      | Default        |
| ------------------ | ----------------------- | --------------------------------------------------------------------------- | -------------- |
| —                  | `steps`                 | the steps, in order                                                         | `[]`           |
| —                  | `[(open)]`, `start()`   | the tour is on; starts it, from the first step or one given                 | false          |
| —                  | `[(step)]`              | the step shown, from 0                                                      | 0              |
| —                  | `(finished)`            | the last step was done                                                      | —              |
| —                  | `(dismissed)`           | the tour ended early, on this step (Escape or the close button)             | —              |
| —                  | `end(finished)`         | ends the tour from code                                                     | —              |
| —                  | `labels`                | every text it shows, for translation                                        | —              |
| —                  | step `target`           | a selector, an element, or a function that finds one; none centers the card | —              |
| —                  | step `title`, `content` | the card's title, and its text or a template                                | —              |
| `data-side`        | step `side`, `align`    | where the card goes beside the target                                       | bottom, center |
| —                  | step `padding`          | room around the target in the spotlight, in pixels                          | 8              |
| `data-interactive` | step `interactive`      | the target can be used: clicks reach it                                     | false          |
| —                  | step `beforeShow`       | runs (and is awaited) before the step shows, such as opening a panel        | —              |

## Behavior

- Each step waits for its `beforeShow`, then scrolls its target into view if it isn't (smoothly, unless motion is reduced), then points at it. The spotlight and the card follow the target as the page scrolls and resizes.
- Next on the last step says Done, and finishes the tour. Back is there from the second step.
- The card flips to the other side of the target when there's no room, and stays in the viewport.
- When the tour ends, focus goes back where it was when it started.
- Android's back gesture ends the tour as Escape does, as dismissed. A modal card is a dialog, which gets the close request from the browser (its `cancel` event); an interactive step's card is a manual popover, so it listens with a close watcher while it shows, in browsers with the CloseWatcher API.

## Keyboard

| Key         | Behavior                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| Tab         | Moves through the card's buttons; focus stays in the card on modal steps |
| Enter/Space | Next, Back or Done, on the focused button                                |
| Escape      | Ends the tour, as dismissed                                              |

## Accessibility

- The card is a `dialog` named by its title and described by its content. Normal steps are modal: the page behind is inert. Interactive steps are non-modal, so the target can be reached and used.
- Focus moves to the card's main button (Next or Done) on every step.
- The progress is text ("2 of 5"); the dots are decorative.
- The close button is named "End the tour", and Escape does the same.
