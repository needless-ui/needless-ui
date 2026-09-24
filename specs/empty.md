# Empty state

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A column (`nui-empty`) with media (`nui-empty-media`), a title (`nui-empty-title`), a description (`nui-empty-description`) and actions (`nui-empty-actions`). All parts are optional.

## API

| CSS hook                         | Angular        | Values                              | Default             |
| -------------------------------- | -------------- | ----------------------------------- | ------------------- |
| `data-illustration` on the media | `illustration` | `search`, `inbox`, `files`, `error` | none (your content) |

## Accessibility

- The media is `aria-hidden`; the title and description carry the message.
- Pick the heading level that fits the page. The built-in pictures stop floating under reduced motion.
