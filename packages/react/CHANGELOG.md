# @needless-ui/react

## 0.11.0

### Minor Changes

- [#38](https://github.com/needless-ui/needless-ui/pull/38) [`7492066`](https://github.com/needless-ui/needless-ui/commit/74920662e76b8ca89be787fe87bbed9bf99ab14f) - **New package, `@needless-ui/react`:** React 19 components styled by `@needless-ui/css`, starting with the two that other libraries charge for.

  - `@needless-ui/react/scheduler`: `NuiScheduler`, with month, week, day, agenda and the resource timeline, repeating events, drag and keyboard moves, working hours, `allow`, and the iCalendar helpers.
  - `@needless-ui/react/grid`: `NuiGrid`, with sorting, filters, search, paging or virtual scrolling, editing, the column panel, groups with aggregates, tree data (`getChildren`), row details, totals, flashing cells, cards, and CSV and Excel exports.

  Both follow the same specs as the Angular components and set the same classes and attributes: the same keyboard, ARIA, touch and states. State is controlled (`sort` and `onSortChange`) or the component's own (`defaultSort`), templates are render functions (`renderEvent`, a column's `renderCell`), and methods are on the `ref`. They render on the server and hydrate, and they're marked as client components for the Next.js App Router. ESM only, one entry point per component.

### Patch Changes

- Updated dependencies [[`7492066`](https://github.com/needless-ui/needless-ui/commit/74920662e76b8ca89be787fe87bbed9bf99ab14f), [`d928f07`](https://github.com/needless-ui/needless-ui/commit/d928f0755f838376a9086f7030ed3ec999c466cb)]:
  - @needless-ui/core@0.11.0
  - @needless-ui/css@0.11.0
