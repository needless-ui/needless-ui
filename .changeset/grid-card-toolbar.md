---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

**Grid:** cards (`layout="list"`, or `auto` below 36rem) hide the header row, and with it the sort buttons and the column menus, so on phones rows could be neither sorted nor filtered. A toolbar above the cards now does both:

- A "Sort by" select with the visible columns that sort, and ascending and descending buttons. Choosing a column replaces the sort; the buttons turn its first column around.
- A Filter button that opens the column panel, with a select to pick the column. It counts the columns that filter. On cards, the panel leaves out pinning and fitting, which cards have no use for.
- `toolbar` shows the bar over a table too (`true`), or never (`false`). It defaults to `auto`: with cards.
- The controls are at least 24px, taller on touch screens, and the select has 16px text there so iPhones don't zoom into it.

`NuiGridLabels` gains `toolbar`, `sortBy`, `unsorted`, `column` and `activeFilters` for the toolbar's words.

Cards also move the grid's tab stop into the rows. It stayed on the hidden header row, so Tab never reached cards, and the arrow keys and `focusCell()` could go up to a row that isn't there.

The grid's rules for its header, totals and print layout now start at `.nui-grid`. A bare `thead` let critical-CSS tools inline the header's rule into every page with a table, and in print a bare `[data-pinned]` reached elements outside the grid.
