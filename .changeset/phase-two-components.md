---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

Four new components, and the pieces they share:

- **Select:** one option or many, with groups, trees, type to jump and select all. Long lists render only the rows in view, so 100,000 options open as fast as ten.
- **Combobox:** a text field with fuzzy search that marks what matched, chips for many values, new values from typed text, and results from a server.
- **Command palette:** ⌘K from anywhere, search that reaches into nested pages, and shortcuts shown the way each platform writes them.
- **Popover and hovercard:** native popovers next to their trigger that flip and follow it, with arrows, and hover delays for the rich tooltip.

Shared, for building your own: `NuiOptionEngine` and `nui-option-list` (`@needless-ui/angular/select`), and in `@needless-ui/angular` `nuiFollow()` and `nuiPlace()` for placement, `NuiVirtualizer`, `nuiFuzzyMatch()`, and `nuiMatchesShortcut()` with `nuiShortcutKeys()`.
