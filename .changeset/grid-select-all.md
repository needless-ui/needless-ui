---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

**Grid:** cards hide the header row, and with it the checkbox that selects every row, so on touch screens, with `selection="multiple"`, rows could only be selected one at a time (Ctrl + A needs a keyboard). The toolbar now has a "Select all rows" checkbox:

- A native checkbox named by its label on screen (`NuiGridLabels.selectAll`). Like the header's, it's checked when every row that passes the filters is selected and mixed when some are, and it selects or clears them all.
- It comes after the sort buttons, so on a narrow toolbar it wraps to the start of the second line, above the cards' checkboxes. The whole label is its target, as tall as the other controls and taller on touch screens.
- The toolbar also shows for it alone, when no column sorts or filters.

Both select-all checkboxes are disabled while no row passes the filters. A click on the header's used to check it with nothing selected. `NuiGridEngine.selectableKeys` holds the keys that select all acts on.

Cards line their checkboxes up with the column names and the toolbar's, and a selected, hovered or group card is colored to its edges.
