---
'@needless-ui/angular': patch
---

**Data grid, combobox, date range picker:** state that followed other state through an `effect()` now follows it with `linkedSignal()`, so it's right whenever it's read. `NuiGridEngine` keeps its active cell inside the grid by itself when rows or columns go, or the header or footer rows do. It used to rely on an effect in the grid component, so an engine used on its own could keep a cell that was gone. The combobox's text and the range picker's fields behave as before.
