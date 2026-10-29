---
'@needless-ui/core': minor
'@needless-ui/angular': patch
---

**New package, `@needless-ui/core`:** the framework-free logic behind the components, shared by the Angular and React packages so they behave the same: plain dates, numbers read in a locale, placement, the virtualizer, the scheduler's layout, repeat rules and iCalendar files, and the data grid's model (as pure functions) and spreadsheet writer. `@needless-ui/angular` now depends on it and exports what moved from the same entry points as before, so its API doesn't change. `NuiGridEngine` keeps its signals and does its work through core's functions.
