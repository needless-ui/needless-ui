---
'@needless-ui/angular': patch
---

**Calendar:** its grid could drop out of the tab order, so Tab skipped the days and the arrow keys never reached them. The day in the tab order is now always one in sight:

- A `month` set from outside that doesn't hold the chosen day (or today, with none chosen) puts the tab stop on a chosen day in sight, today, or else the first day there that can be chosen. Zooming out then shows that month's year, not the chosen day's.
- A day chosen from outside while `month` shows another month, or fewer `months` side by side, no longer takes the tab stop out of sight.
- Escape after paging the months or picking a year zooms back in on the month the keyboard is on. Focus used to fall to the page.
- After the second end of a range, or putting back the first of several days, the keyboard stays on the day picked instead of jumping to the first chosen one.
