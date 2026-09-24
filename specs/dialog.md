# Dialog

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A native `<dialog>` element with the `nui-dialog` class, opened with `showModal()`. Inside it:

| Part        | CSS class                | Angular                | Role                                 |
| ----------- | ------------------------ | ---------------------- | ------------------------------------ |
| Title       | `nui-dialog-title`       | `nuiDialogTitle`       | Referenced by `aria-labelledby`      |
| Description | `nui-dialog-description` | `nuiDialogDescription` | Referenced by `aria-describedby`     |
| Actions     | `nui-dialog-actions`     | `nuiDialogActions`     | Row of buttons, aligned to the end   |
| Close       | (a button)               | `nuiDialogClose`       | Closes with an optional return value |

Content between the description and the actions is free-form.

## API

| CSS hook    | Angular       | Values                                        | Default |
| ----------- | ------------- | --------------------------------------------- | ------- |
| `data-size` | `size`        | `sm` (24rem), `md` (32rem), `lg` (44rem)      | `md`    |
| —           | `[(open)]`    | boolean                                       | `false` |
| —           | `modal`       | boolean                                       | `true`  |
| —           | `dismissible` | boolean: Escape and backdrop clicks close it  | `true`  |
| —           | `(closed)`    | emits the return value (empty when dismissed) | —       |

It also takes the [customization](customization.md) presets `enter`, `motion`, `spring`, `corners`, `radius` and `density`, as inputs or as `data-nui-*` attributes on it or any ancestor.

## Behavior

- **Opening** uses `showModal()`: the rest of the page becomes inert, the dialog renders in the top layer above everything, and the page stops scrolling.
- **Initial focus** follows the platform: the element with `autofocus`, otherwise the first focusable element. Put `autofocus` on the safest choice (usually Cancel) for destructive confirmations.
- **Closing**: Escape, a backdrop click, or any `nuiDialogClose` button. A backdrop click only counts when the press starts and ends outside the dialog box, so dragging a text selection out of the dialog doesn't close it.
- **Focus returns** to the element that opened the dialog (platform behavior).
- **Return value**: `nuiDialogClose="delete"` closes with `"delete"`; Escape and backdrop clicks close with `""`. The value resets each time the dialog opens.
- **Not dismissible**: Escape and backdrop clicks are ignored. Browsers may still close the dialog on a repeated Escape when the user hasn't interacted with the page in between (close-request abuse protection), so always offer an explicit way out.

## Keyboard

| Key    | Behavior                                 |
| ------ | ---------------------------------------- |
| Tab    | Moves focus within the dialog (platform) |
| Escape | Closes, unless not dismissible           |

## Accessibility

- `role="dialog"` and `aria-modal` come from the native element opened with `showModal()`.
- The title and description are wired with generated ids, so screen readers announce both on open.
- The raised surface and text meet WCAG 2.2 AA contrast in both modes. The border stays visible in forced-colors mode.
- It arrives from `--nui-enter` on the `--nui-motion` spring and leaves with a quick fade. Under `prefers-reduced-motion` the springs and durations collapse and the entrance transform is ignored, so nothing moves.

## Implementation notes

- **Angular:** `NuiDialog` syncs `[(open)]` with the element in an `afterRenderEffect`, so nothing runs during server rendering. The dialog is rendered closed and opens after hydration.
- **React (planned):** same markup; open state drives `showModal()` and `close()` in an effect.
