---
'@needless-ui/angular': patch
---

**Scheduler:** without `selectable`, Enter or Space on an empty cell left that cell drawn as chosen time (`data-selected`) until another key cleared it, though nothing was chosen. The keys now choose nothing there, and mark nothing.
