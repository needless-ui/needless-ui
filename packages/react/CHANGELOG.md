# @needless-ui/react

## 0.11.1

### Patch Changes

- [#49](https://github.com/needless-ui/needless-ui/pull/49) [`43180d2`](https://github.com/needless-ui/needless-ui/commit/43180d2050ca44ad0d68bb7341a491b2a49e65bc) - **Fixes from testing on phones and tablets:**

  - **Scheduler:** a tap on free time no longer also clicks the event the app books there (`eventClick` right after `slotSelect`). The click that ends a tap or a drag is ignored when it lands on an event. In Chrome on Android, React's scheduler drew the new event before every such click, and Angular's before some.
  - **Scheduler:** the day no longer opens at the week's sideways scroll, a day's timeline no longer opens a pixel past its first hour, and the label of the hour the week and the day open at shows whole: the first one, at the top, sits under its line, where the all-day row covered half of it.
  - **Grid:** cards for groups and totals show what they hold, the group with its toggle and the aggregates, instead of every column's name with no value.
  - **Angular:** what the scheduler, chat, toast, carousel, dropzone and phone field announce no longer shows as text at the bottom of the page in apps without Angular Material: they load the CDK's styles that hide its announcer. `nuiAnnouncer()` in `@needless-ui/angular` gives an app the same announcer.

- Updated dependencies [[`43180d2`](https://github.com/needless-ui/needless-ui/commit/43180d2050ca44ad0d68bb7341a491b2a49e65bc), [`1bfc988`](https://github.com/needless-ui/needless-ui/commit/1bfc988995e4d1a4d02cccaeb81d4d8a7a3980b4)]:
  - @needless-ui/css@0.11.1
  - @needless-ui/core@0.11.1

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
