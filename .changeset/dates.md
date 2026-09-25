---
'@needless-ui/css': minor
'@needless-ui/angular': minor
---

A calendar (`@needless-ui/angular/calendar`) and date and time pickers (`@needless-ui/angular/date-picker`), on plain ISO values with no time zone: `2026-09-25`, `14:30`, `2026-09-25T14:30`.

- **`<nui-calendar>`** chooses a day, a range (previewed between the two picks) or several days, with `min`, `max`, `unavailable` days, months side by side, ISO week numbers and the locale's first day of the week. Its title zooms out to months and years. The keyboard follows the WAI-ARIA date picker, mirrored right to left, and every day is named by its full date.
- **`<nui-date-field>`** and **`<nui-time-field>`** are typed in segments, spin buttons in the locale's order, with its separators, digits and 12- or 24-hour clock. Digits move on by themselves once no other could follow, the arrow keys step, Backspace goes back, and a pasted date fills every segment. Empty segments show the locale's initials (`mm/dd/yyyy`, `TT.MM.JJJJ`, `jj/mm/aaaa`, `年/月/日`).
- **`<nui-date-picker>`** adds a calendar in a popover (with `granularity`, it takes a time too), and **`<nui-date-range-picker>`** two fields with a two-month range calendar and presets (`nuiDateRangePresets()`).
- Every field works with Signal Forms, reactive forms and `ngModel`.
- The primary entry point gains plain-date helpers: arithmetic that stays in the month (`nuiAddMonths`), weekdays and ISO weeks, the locale's week (`nuiWeekInfo`), and formatting that never shifts a day (`nuiFormatDate`).

Also: `@angular/forms` is now a peer dependency, as the number field already needed it.
