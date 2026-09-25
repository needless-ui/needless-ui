---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

A splitter, a guided tour and a dropzone.

- **Splitter** (`@needless-ui/angular/splitter`): panes side by side or stacked, with handles that drag and move from the keyboard (the WAI-ARIA window splitter). Panes take sizes and limits in pixels, rems or percent; a handle that reaches a limit pushes the panes beyond it; `collapsible` panes fold below half their minimum, or with Enter, and come back at their size. `[(sizes)]` binds the layout, and `storageKey` keeps it between visits.
- **Tour** (`@needless-ui/angular/tour`): a card for each step, beside its target, with the page dimmed around it by a spotlight that follows scrolling. Each card is a dialog, modal unless the step is `interactive`; `beforeShow` can open what a step points into, targets out of view scroll in, Escape ends the tour, and focus goes back where it was.
- **Dropzone** (`@needless-ui/angular/dropzone`): files dropped, chosen, pasted, or whole folders, checked against `accept`, sizes, `maxFiles` and your own `validate`, with image previews. With an `upload` function, files upload a few at a time with progress, cancel and retry (`NuiUploadQueue` works on its own too); without one, the dropzone holds them for a form, with Signal Forms, reactive forms or `ngModel`.
