---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

A data grid (`@needless-ui/angular/grid`), on a native table:

- **Sorting** by several columns (Shift adds one), stable and type-aware: text in the locale's order with numbers in sequence, enums in the order of their options, empty values last.
- **Filters** per column in a panel (text, number and date comparisons, yes or no, enum choices), plus a search across the visible cells that ignores case and accents.
- **Pages** with a pager, or **virtual scrolling** that renders only the rows in view, so 100,000 rows scroll like ten.
- **Selection** by key (single or multiple, ranges, select all), and **editing** in place with validation, committed to `rows` immutably.
- **Columns** people can resize, move, pin to either edge, hide and fit to their content, with the layout kept in a `columnState` model to save.
- **Server mode**: it keeps the sort, filters, search and page, and reports them in `queryChange`.
- Every cell is reachable from the keyboard, and sorting, filtering, paging and errors are announced.

Also: `NuiVirtualizer.slice()` renders the rows in view plus any row that must stay rendered, with gaps between them. The select's list uses it, so pressing End in a long list no longer renders every row in between for a frame. `NuiPopover.show()` passes its anchor as the popover's invoker, so supporting browsers return focus there.
