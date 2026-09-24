# Breadcrumbs

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A `<nav>` (`nui-breadcrumbs`) with an ordered list of links. The last item is the current page, marked `aria-current="page"`.

## API

| CSS hook     | Angular | Values        | Default      |
| ------------ | ------- | ------------- | ------------ |
| `aria-label` | `label` | landmark name | "Breadcrumb" |

## Behavior

- Separators are CSS, mirrored in right-to-left text.
- A trail longer than its container scrolls sideways; it starts at the end, and the ends fade where there is more to scroll (with scroll-driven animations).

## Accessibility

A navigation landmark with a plain list: screen readers announce the number of items and the current page. Links are at least 24px tall.
