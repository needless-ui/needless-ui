---
'@needless-ui/angular': patch
---

**Popups on iOS:** with the on-screen keyboard up, combobox and select lists, popovers (the date pickers' calendars and the data grid's column panel among them), tour cards and the editor's link box were drawn too high, often over what they belong to, by as far as Safari had moved the visible area for the keyboard. WebKit measures `getBoundingClientRect()` from that visible area (the visual viewport), while Chromium and Firefox measure from the layout viewport that fixed positions use, and `nuiFollow()` assumed the latter. It now measures where fixed positions start in client coordinates, so popups sit next to their anchor in every engine.
