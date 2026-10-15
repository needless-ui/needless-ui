---
'@needless-ui/angular': patch
---

**Dialog:** `close()` (and with it the `nuiDialogClose` buttons, a click on the backdrop, and the command palette running a command) sets `open` to false and emits `closed` at once. It used to wait for the browser's `close` event, which comes in a later task: opening the dialog again in between was lost, since `open` was still true, and the late event then closed it. A `close` event that comes once the dialog has opened again now leaves it open.
