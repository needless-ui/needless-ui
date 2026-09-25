---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

The data grid's second round:

- **Groups:** `[(groupBy)]` groups rows by columns in turn, as a treegrid, with a row per group that shows each column's `aggregate` (`sum`, `avg`, `min`, `max`, `count` or a function) and a checkbox for its rows. Groups open and close with the arrow keys; `[(collapsed)]` keeps which.
- **Tree data:** `children` nests rows, sorted among their siblings; a search keeps the rows above a match open. `[(expanded)]` keeps which rows are open.
- **Details:** an `nuiGridDetail` template opens under a row from a column of toggles (`[(details)]`).
- **Totals:** `totals` adds a sticky row with each column's aggregate over every filtered row, which the keyboard reaches.
- **Live data:** `flash` makes cells whose text changes flash for a moment.
- **Export and print:** `exportXlsx()` writes a real spreadsheet (typed cells, number formats, a bold frozen header with filters), with a zip writer of our own (`nuiXlsx`, `nuiZip`); `print()` and the browser's print lay out every row.
- **Cards:** `layout="list"`, or `auto` below 36rem, shows rows as cards.
