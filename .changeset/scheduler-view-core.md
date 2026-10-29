---
'@needless-ui/core': patch
'@needless-ui/angular': patch
---

**Scheduler:** `@needless-ui/core/scheduler` holds the scheduler's view as pure functions (`nuiSchedulerFrame`, `nuiSchedulerColumns`, `nuiSchedulerTarget` and the rest): which days, cells and rows each view shows, where events sit on them, where keys and drags move them, and the titles and labels it reads out. `NuiScheduler` and the React scheduler both draw from it, so they lay out, move and announce events the same way. On a server, the Angular scheduler now writes times with plain spaces, as browsers do.
