---
'@needless-ui/angular': patch
---

Android's back gesture now closes menus, combobox lists, hovercards and interactive tour cards, as Escape does, in browsers with the CloseWatcher API (Chrome and Edge 126, Firefox 149). Browsers already did this for dialogs and `popover="auto"` popups, but not for these manual popovers. Elsewhere nothing changes, and Escape closes them as before.

- **Menu:** a close request closes the innermost open menu only. A submenu closes back to its item, and its menu stays open; the menu closes with focus back on its trigger. Escape still closes the whole menu.
- **Combobox:** the list closes as on Escape, and focus stays in the field.
- **Hovercard:** it hides without moving focus. The Escape that hides it no longer also closes a dialog or popover behind it.
- **Tour:** on an interactive step, the tour ends as dismissed, and focus goes back where it was. Modal steps are dialogs, which the browser already closed.
- `nuiOnCloseRequest()` in `@needless-ui/angular` does the same for your own popups: call it when one opens, and the function it returns when it closes.
