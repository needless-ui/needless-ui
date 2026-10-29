# @needless-ui/core

## 0.11.1

No changes in this release.

## 0.11.0

### Minor Changes

- [#38](https://github.com/needless-ui/needless-ui/pull/38) [`7492066`](https://github.com/needless-ui/needless-ui/commit/74920662e76b8ca89be787fe87bbed9bf99ab14f) - **New package, `@needless-ui/core`:** the framework-free logic behind the components, shared by the Angular and React packages so they behave the same: plain dates, numbers read in a locale, placement, the virtualizer, the scheduler's layout, repeat rules and iCalendar files, and the data grid's model (as pure functions) and spreadsheet writer. `@needless-ui/angular` now depends on it and exports what moved from the same entry points as before, so its API doesn't change. `NuiGridEngine` keeps its signals and does its work through core's functions.

### Patch Changes

- [#48](https://github.com/needless-ui/needless-ui/pull/48) [`d928f07`](https://github.com/needless-ui/needless-ui/commit/d928f0755f838376a9086f7030ed3ec999c466cb) - **Scheduler:** `@needless-ui/core/scheduler` holds the scheduler's view as pure functions (`nuiSchedulerFrame`, `nuiSchedulerColumns`, `nuiSchedulerTarget` and the rest): which days, cells and rows each view shows, where events sit on them, where keys and drags move them, and the titles and labels it reads out. `NuiScheduler` and the React scheduler both draw from it, so they lay out, move and announce events the same way. On a server, the Angular scheduler now writes times with plain spaces, as browsers do.
