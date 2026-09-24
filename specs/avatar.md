# Avatar

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

An element (`nui-avatar`) with a picture (`nui-avatar-image`) or initials (`nui-avatar-initials`), and an optional status dot (`nui-avatar-status`). Avatars can sit in a group (`nui-avatar-group`).

## API

| CSS hook                 | Angular               | Values                              | Default  |
| ------------------------ | --------------------- | ----------------------------------- | -------- |
| —                        | `name` (required)     | the person's name                   | —        |
| —                        | `src`                 | picture URL                         | none     |
| `data-size`              | `size`                | `sm`, `md`, `lg`                    | `md`     |
| `data-shape`             | `shape`               | `circle`, `square`                  | `circle` |
| `data-status` on the dot | `status`              | `online`, `away`, `busy`, `offline` | none     |
| `--_hue`                 | from `name`           | 0–359                               | —        |
| —                        | `label`, `decorative` | accessible name, or hidden          | the name |

`nuiInitials(name)` and `nuiNameHue(name)` are exported.

## Behavior

- Initials are the first graphemes of the first and last words.
- The color is a hash of the name, so a person keeps their color everywhere. Lightness and chroma are capped so white initials stay above 4.5:1 at every hue.
- A picture that fails to load falls back to initials; a new `src` tries again.

## Accessibility

- `role="img"` named after the person. Next to a visible name, `decorative` hides it instead.
- The status is visual only; include it in `label` when it matters ("Ada Lovelace, online").
