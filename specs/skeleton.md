# Skeleton

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

One element (`nui-skeleton`) per placeholder line, circle or block.

## API

| CSS hook     | Angular | Values                             | Default |
| ------------ | ------- | ---------------------------------- | ------- |
| `data-shape` | `shape` | `text` (a line), `circle`, `block` | `text`  |

Size it with CSS (`inline-size`, `block-size`).

## Behavior

The shimmer is fixed to the viewport, so a single highlight sweeps across every skeleton on the page together.

## Accessibility

- Skeletons are `aria-hidden`. Mark the region that is loading with `aria-busy="true"` and remove it when the content arrives.
- Under reduced motion there is no shimmer. In forced-colors mode skeletons get an outline.
