---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

**Rich text editor:** list items nest from the toolbar, for touch screens, which have no Tab key.

- New `indent` and `outdent` tools move the list items in the selection a level in or out, as Tab and Shift+Tab do. Their buttons are enabled only in a list (Indent only above the deepest level) and name Tab and Shift+Tab as their keys. Their labels are `indent` and `outdent` in `NuiEditorLabels`.
- The default toolbar (`NUI_EDITOR_TOOLS`) has them after the lists, on touch screens only: a phone or a tablet on its own, `(hover: none) and (pointer: coarse)`. Listed in other `tools`, they show on every screen. On other screens the CSS hides them (`data-touch`) until the editor runs and drops them, so a page rendered on the server doesn't shift when it starts.
- Outdenting a top-level item, with the button or Shift+Tab, turns it into a paragraph, as Backspace does. Shift+Tab used to leave it as it was.
- A click or a tap on a toolbar button leaves focus in the text, so a phone's on-screen keyboard stays open. Before, the toolbar moved focus to the button after the command ran, and a click on Link, once its form had opened, left focus on the button instead of the address field.
- Buttons that can't act, such as Undo with nothing to undo, are `aria-disabled` from the start; the attribute used to say `false` until the first edit. They stay in the toolbar's arrow-key order.
- CSS: icons for the two tools, turned for right-to-left text.
