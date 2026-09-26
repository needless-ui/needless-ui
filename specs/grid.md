# Data grid

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A native `<table role="grid">` (a `treegrid` when rows are grouped or nest) inside a scroll container (`nui-grid-scroll`), so the header stays in view and pinned columns stay put while the rest scrolls:

- **Header row:** one `nui-grid-header` per column. Each has its label, a sort mark with its priority when several columns sort, a filter mark, a button for the column panel (`nui-grid-menu-button`) and a resize handle (`nui-grid-resize`).
- **Rows** (`nui-grid-row`) of cells (`nui-grid-cell`). A checkbox column (`nui-grid-select`) comes first when rows can be selected. A cell being edited holds an editor (`nui-grid-editor`) and, when the value isn't valid, a message (`nui-grid-error`).
- **The column panel** (`nui-grid-panel`), a popover. It holds sorting, the filter for the column, pinning, moving, fitting and hiding, and the list of every column to show or hide.
- **Groups** (`nui-grid-group`): a row per group of rows, with its toggle (`nui-grid-toggle`), its column's value and count, and each column's aggregate. **Tree data** indents rows by depth (`nui-grid-tree`) with a toggle for the ones with children. **Details** (`nui-grid-detail`) open under a row from a column of toggles, and a **totals row** (in `tfoot`) sums up every row that passes the filters.
- **The pager** (`nui-grid-pager`), when rows come in pages: rows per page, the range shown, and first, previous, next and last buttons (`nui-grid-page`), grouped in `nui-grid-page-nav` so they wrap together.
- **The toolbar** (`nui-grid-toolbar`), above cards, which have no header row (and above a table, with `toolbar`): a "Sort by" select (`nui-grid-sort-by`), ascending and descending buttons (`nui-grid-direction`), with multiple selection a labeled "Select all rows" checkbox (`nui-grid-select-all`), and a filter button (`nui-grid-filter-button`) that opens the column panel, with the number of columns that filter (`nui-grid-count`).
- **States:** a progress bar and skeleton rows while `loading`, and a message row when there are no rows (`nui-grid-empty`).

The grid's model (`NuiGridEngine`: filtering, sorting, paging, selection, column state and the active cell) has no DOM and is exported.

## API

| CSS hook                     | Angular                                        | Values                                                                                  | Default             |
| ---------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------- |
| —                            | `[(rows)]`                                     | the data; edits replace rows immutably                                                  | —                   |
| —                            | `columns`                                      | `NuiGridColumn[]`: see below                                                            | —                   |
| —                            | `rowId`                                        | `(row) => key`, for selection and tracking                                              | `row.id ?? row`     |
| `aria-multiselectable`       | `selection`, `[(selected)]`                    | `none`, `single`, `multiple`; the selected keys                                         | `none`              |
| `aria-sort`, `nui-grid-sort` | `[(sort)]`                                     | `{ column, direction }[]`, first sorts first                                            | `[]`                |
| `nui-grid-filtered`          | `[(filters)]`, `[(search)]`                    | a filter per column id; words that must all appear in a row                             | `{}`, `''`          |
| `nui-grid-pager`             | `[(pageSize)]`, `[(page)]`                     | rows per page (0 for one scrolling list); page index from 0                             | `0`, `0`            |
| —                            | `pageSizes`                                    | choices in the pager                                                                    | `[10, 25, 50, 100]` |
| —                            | `virtual`                                      | render only the rows in view: always, never, or `auto` past 100 rows                    | `auto`              |
| `--_height`                  | `height`                                       | a CSS length that bounds the scroll container                                           | none                |
| `data-pinned`, `col` widths  | `[(columnState)]`                              | `{ id, width?, hidden?, pinned? }[]` in display order, to save and restore              | from `columns`      |
| —                            | `mode`, `total`                                | `client` sorts, filters and pages itself; `server` leaves it to you                     | `client`            |
| `aria-busy`                  | `loading`                                      | boolean                                                                                 | false               |
| —                            | `label`, `labels`                              | the grid's accessible name; every text it shows or announces, for translation           | —                   |
| —                            | `(rowActivate)`, `(cellEdit)`, `(queryChange)` | Enter or double click on a row; a committed edit; sort, filters, search or page changed | —                   |
| —                            | `exportCsv()`, `focusCell()`, `clearFilters()` | the filtered, sorted rows as CSV; focus a cell from code                                | —                   |
| `nui-grid-group`             | `[(groupBy)]`, `[(collapsed)]`                 | column ids to group by, outermost first; keys of the groups closed                      | `[]`, `[]`          |
| `nui-grid-tree`              | `children`, `[(expanded)]`                     | `(row) => rows`: tree data; keys of the rows open                                       | none, `[]`          |
| `nui-grid-detail`            | `nuiGridDetail`, `[(details)]`                 | a row's details, as a template; keys of the rows whose details are open                 | none, `[]`          |
| `tfoot`                      | `totals`                                       | a row with each column's aggregate over every filtered row                              | false               |
| `data-flash`                 | `flash`                                        | cells whose text changes when `rows` change flash                                       | false               |
| `data-cards`                 | `layout`                                       | `table`; `list` shows rows as cards; `auto` does below 36rem                            | `table`             |
| `nui-grid-toolbar`           | `toolbar`                                      | the bar that sorts, filters and selects all rows: always, never, or `auto` with cards   | `auto`              |
| —                            | `exportXlsx()`, `print()`, `expandAll()`       | a spreadsheet (.xlsx) of the filtered, sorted rows; print every row; open or close all  | —                   |

Templates: `nuiGridCell` (a column's cells, by id), `nuiGridHeader` (its header), `nuiGridEmpty` (the empty message) and `nuiGridDetail` (a row's details). Personality inputs: `corners`, `radius` and `density`.

### Columns

| Property                                                         | Meaning                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `id`, `header`                                                   | Key in every model, and the header text                                              |
| `value`                                                          | A key of the row or `(row) => value`; defaults to `row[id]`                          |
| `type`                                                           | `text`, `number`, `date`, `boolean` or `enum`: alignment, sorting, filter and editor |
| `format`                                                         | `Intl` options for numbers and dates, or `(value, row) => text`                      |
| `options`                                                        | `NuiOption[]` for `enum`: labels, filter choices and the editor's choices            |
| `width`, `minWidth`, `maxWidth`, `flex`                          | Pixels; `flex` shares the room left over                                             |
| `pinned`, `hidden`, `align`                                      | Initial state and alignment                                                          |
| `sortable`, `filterable`, `resizable`, `reorderable`, `hideable` | All true unless set to false                                                         |
| `compare`                                                        | A custom sort                                                                        |
| `editable`, `validate`, `set`                                    | Whether cells can be edited, how a value is checked, and how the new row is made     |
| `aggregate`                                                      | `sum`, `avg`, `min`, `max`, `count` or a function: what group rows and totals show   |

## Behavior

- Sorting is stable and knows each type: text uses the locale's collation with numbers in order ("File 2" before "File 10"), and empty values go last. Shift adds a column to the sort instead of replacing it.
- Filters by type: text contains, equals, starts or ends with; numbers and dates compare or fall between two values; booleans are yes or no; enums keep the chosen values. The search matches the formatted text of the visible columns, ignoring case and accents, and every word must appear.
- Selection is by key, so it survives sorting, filtering, paging and new data. Shift+click selects a range. The header checkbox (and the toolbar's, on cards) selects every row that matches the filters, and shows a mixed state when some are selected. With no row to select, it's disabled.
- Editing starts with Enter, F2, a double click or typing. Enter commits and Escape cancels. A `validate` message keeps the editor open, shown and announced. A committed edit replaces the row in `rows` (through `set`, or a copy with the new value) and emits `cellEdit`.
- Columns resize by dragging the handle (a double click fits the content), and move by dragging the header; the panel and keys do both too. Pinned columns stick to their edge. The column state records all of it.
- Only the rows in view are rendered when rows don't come in pages. The active cell always stays rendered, and `aria-rowcount` and `aria-rowindex` give the true positions.
- In `server` mode the grid shows `rows` as they come and uses `total` for counts. It still keeps the sort, filters, search and page, and emits `queryChange`, so you can fetch.
- **Groups:** rows group by the `groupBy` columns in turn, groups in the order of their column's sort (ascending otherwise), empty last. Each group row shows its value, its count, and the aggregate of every column that has one; groups start open. Paging and virtual scrolling count group rows too. A group's checkbox selects its rows.
- **Tree data:** with `children`, each row can open to show its own; rows sort among their siblings. A search or filter keeps the rows above a match, open, so the match shows where it is.
- **Details** open under their row, from a column of toggles, and render the `nuiGridDetail` template.
- **Totals** aggregate every row that passes the filters (in tree data, the top-level ones), in a row that sticks to the bottom.
- **Live data:** with `flash`, cells whose text changes when `rows` do flash for a moment (a ring under reduced motion). Rows need a key that lasts across updates (`rowId`), so the grid can tell a row changed rather than came new.
- **Export and print:** `exportXlsx()` writes a real spreadsheet: typed cells (numbers, dates, booleans), the columns' number formats, a bold, frozen header with filters. `print()`, and the browser's own print, lay out every row with nothing sticky or virtual.
- **Cards:** with `layout="list"`, or `auto` below 36rem, rows show as cards, each cell with its column's name.
- **The toolbar** stands in for the header row, which cards don't have. "Sort by" lists the visible columns that sort (and the one sorted by, even hidden) and shows the first column of the sort: choosing one replaces the sort, keeping its direction, and "None" clears it. The two buttons turn the first column around and leave the rest of a sort by several columns as it is. With `selection="multiple"`, a "Select all rows" checkbox does what the header's does, so a finger can select every row (Ctrl + A needs a keyboard); it sits before the filter button, so on a narrow bar it wraps to the start of the second line, above the cards' checkboxes. The filter button opens the column panel, which gains a select for its column; it starts on the column it showed last, else the first that filters, else the first that can. Cards have no pinned edges or widths, so there the panel leaves out pinning and fitting. `toolbar` shows the bar over a table too (`true`) or never (`false`); a bar with nothing to sort, filter or select isn't shown.

## Keyboard

The grid is one tab stop, and the arrow keys move between cells (header cells included; cards have none, so there the keys stay in the rows). The toolbar's controls come before it in the tab order.

| Key                                                 | Behavior                                                      |
| --------------------------------------------------- | ------------------------------------------------------------- |
| Arrows                                              | Move one cell (← and → are mirrored in right-to-left text)    |
| Home / End                                          | First or last cell in the row                                 |
| Ctrl + Home / Ctrl + End                            | First or last cell in the grid                                |
| Page Down / Page Up                                 | One screen of rows down or up                                 |
| Enter, Space (header)                               | Sort by the column; with Shift, add it to the sort            |
| Alt + ↓ (header)                                    | Open the column panel                                         |
| Alt + ← / → (header)                                | Make the column narrower or wider                             |
| Alt + Shift + ← / → (header)                        | Move the column                                               |
| Enter (cell)                                        | Edit the cell if it can be edited, otherwise activate the row |
| F2, or typing (cell)                                | Edit the cell                                                 |
| Enter / Escape / Tab (editing)                      | Commit / cancel / commit and move to the next cell            |
| Space                                               | Select or unselect the row                                    |
| Shift + Space                                       | Select the rows from the last one selected                    |
| Ctrl + A                                            | Select every row                                              |
| → / ← (group, or first cell of a row with children) | Open / close it; ← again goes up to its parent                |
| Enter (group)                                       | Open or close the group                                       |
| Space (group)                                       | Select or unselect the group's rows                           |
| Enter (details column)                              | Open or close the row's details                               |

## Accessibility

- A native table with `role="grid"`, named by `label`. The header cells are `columnheader`s with `aria-sort` and the data cells are `gridcell`s. Rows carry `aria-selected` when rows can be selected.
- Focus moves with a roving `tabindex`, so screen readers follow the cell with its row and column headers. A cell being edited holds a labeled field; `aria-invalid` and the message it's described by show what's wrong.
- `aria-rowcount`, `aria-rowindex` and `aria-colindex` are right while rows are virtualized, paged or hidden.
- The column panel is a dialog named after the column, and closing it returns focus to the header. Sort changes, row counts and paging are announced through a polite status region.
- The toolbar is a group ("Sort and filter"). "Sort by" is a native select named by its label, the direction buttons are toggle buttons (`aria-pressed`) named "Ascending" and "Descending", "Select all rows" is a native checkbox named by its visible label (the whole label is its target, at least 24px tall) and mixed (`indeterminate`) while only some rows are selected, and the filter button has `aria-haspopup="dialog"` and `aria-expanded`, with the number of columns that filter said after its name ("Filter 2 active"). Opened from there, the panel's first control is the select that picks its column, and closing the panel returns focus to the button. A sort chosen in the toolbar is announced as one chosen in a header is.
- With cards, the grid's tab stop is in the rows: the header row isn't drawn, so the keyboard doesn't go there.
- Grouped or nested rows make the table a `treegrid`: rows carry `aria-level`, `aria-setsize`, `aria-posinset`, and `aria-expanded` when they open. Toggles and the details' buttons are named and say whether they're open. Aggregates are read with their kind ("Sum: 475").
- Angular Aria's grid moves through the cells that are rendered. This grid moves through the data, so it can render only what's in view.
