---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

A scheduler (`@needless-ui/angular/scheduler`): events in a month, a week, a day or an agenda.

- Events are plain data with ISO times. Timed events that overlap share the width and stretch into free columns; events across midnight show in both days; all-day and multi-day events run across days as bars in lanes, with "N more" when a month cell is full. A line marks now.
- With `editable`, events move and resize by dragging, with a ghost where they'd land; with `selectable`, dragging across empty time chooses it. The scheduler reports `eventChange`, `slotSelect`, `eventClick` and `rangeChange` (the days shown, to load their events), and never changes the events itself.
- The grid is one tab stop: arrows move through days and times, Shift extends the chosen time, Enter goes into a cell's events, and Alt with the arrows moves an event (with Shift, resizes it), so every drag has a keyboard equivalent. Moves are announced.
- `nuiSchedulerEvent` draws events your way. The layout functions (`nuiSchedulerPlace`, `nuiSchedulerLanes`) are exported too.
