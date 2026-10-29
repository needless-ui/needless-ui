---
'@needless-ui/react': minor
---

**New package, `@needless-ui/react`:** React 19 components styled by `@needless-ui/css`, starting with the two that other libraries charge for.

- `@needless-ui/react/scheduler`: `NuiScheduler`, with month, week, day, agenda and the resource timeline, repeating events, drag and keyboard moves, working hours, `allow`, and the iCalendar helpers.
- `@needless-ui/react/grid`: `NuiGrid`, with sorting, filters, search, paging or virtual scrolling, editing, the column panel, groups with aggregates, tree data (`getChildren`), row details, totals, flashing cells, cards, and CSV and Excel exports.

Both follow the same specs as the Angular components and set the same classes and attributes: the same keyboard, ARIA, touch and states. State is controlled (`sort` and `onSortChange`) or the component's own (`defaultSort`), templates are render functions (`renderEvent`, a column's `renderCell`), and methods are on the `ref`. They render on the server and hydrate, and they're marked as client components for the Next.js App Router. ESM only, one entry point per component.
