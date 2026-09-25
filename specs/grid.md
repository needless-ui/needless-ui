# Data grid

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

## Anatomy

A native `<table role="grid">` inside a scroll container (`nui-grid-scroll`), so the header stays in view and pinned columns stay put while the rest scrolls:

- **Header row:** one `nui-grid-header` per column. Each has its label, a sort mark with its priority when several columns sort, a filter mark, a button for the column panel (`nui-grid-menu-button`) and a resize handle (`nui-grid-resize`).
- **Rows** (`nui-grid-row`) of cells (`nui-grid-cell`). A checkbox column (`nui-grid-select`) comes first when rows can be selected. A cell being edited holds an editor (`nui-grid-editor`) and, when the value isn't valid, a message (`nui-grid-error`).
- **The column panel** (`nui-grid-panel`), a popover. It holds sorting, the filter for the column, pinning, moving, fitting and hiding, and the list of every column to show or hide.
- **The pager** (`nui-grid-pager`), when rows come in pages: rows per page, the range shown, and first, previous, next and last buttons.
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

Templates: `nuiGridCell` (a column's cells, by id), `nuiGridHeader` (its header) and `nuiGridEmpty` (the empty message). Personality inputs: `corners`, `radius` and `density`.

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

## Behavior

- Sorting is stable and knows each type: text uses the locale's collation with numbers in order ("File 2" before "File 10"), and empty values go last. Shift adds a column to the sort instead of replacing it.
- Filters by type: text contains, equals, starts or ends with; numbers and dates compare or fall between two values; booleans are yes or no; enums keep the chosen values. The search matches the formatted text of the visible columns, ignoring case and accents, and every word must appear.
- Selection is by key, so it survives sorting, filtering, paging and new data. Shift+click selects a range. The header checkbox selects every row that matches the filters, and shows a mixed state when some are selected.
- Editing starts with Enter, F2, a double click or typing. Enter commits and Escape cancels. A `validate` message keeps the editor open, shown and announced. A committed edit replaces the row in `rows` (through `set`, or a copy with the new value) and emits `cellEdit`.
- Columns resize by dragging the handle (a double click fits the content), and move by dragging the header; the panel and keys do both too. Pinned columns stick to their edge. The column state records all of it.
- Only the rows in view are rendered when rows don't come in pages. The active cell always stays rendered, and `aria-rowcount` and `aria-rowindex` give the true positions.
- In `server` mode the grid shows `rows` as they come and uses `total` for counts. It still keeps the sort, filters, search and page, and emits `queryChange`, so you can fetch.

## Keyboard

The grid is one tab stop, and the arrow keys move between cells (header cells included).

| Key                            | Behavior                                                      |
| ------------------------------ | ------------------------------------------------------------- |
| Arrows                         | Move one cell (← and → are mirrored in right-to-left text)    |
| Home / End                     | First or last cell in the row                                 |
| Ctrl + Home / Ctrl + End       | First or last cell in the grid                                |
| Page Down / Page Up            | One screen of rows down or up                                 |
| Enter, Space (header)          | Sort by the column; with Shift, add it to the sort            |
| Alt + ↓ (header)               | Open the column panel                                         |
| Alt + ← / → (header)           | Make the column narrower or wider                             |
| Alt + Shift + ← / → (header)   | Move the column                                               |
| Enter (cell)                   | Edit the cell if it can be edited, otherwise activate the row |
| F2, or typing (cell)           | Edit the cell                                                 |
| Enter / Escape / Tab (editing) | Commit / cancel / commit and move to the next cell            |
| Space                          | Select or unselect the row                                    |
| Shift + Space                  | Select the rows from the last one selected                    |
| Ctrl + A                       | Select every row                                              |

## Accessibility

- A native table with `role="grid"`, named by `label`. The header cells are `columnheader`s with `aria-sort` and the data cells are `gridcell`s. Rows carry `aria-selected` when rows can be selected.
- Focus moves with a roving `tabindex`, so screen readers follow the cell with its row and column headers. A cell being edited holds a labeled field; `aria-invalid` and the message it's described by show what's wrong.
- `aria-rowcount`, `aria-rowindex` and `aria-colindex` are right while rows are virtualized, paged or hidden.
- The column panel is a dialog named after the column, and closing it returns focus to the header. Sort changes, row counts and paging are announced through a polite status region.
- Angular Aria's grid moves through the cells that are rendered. This grid moves through the data, so it can render only what's in view.
