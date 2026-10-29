---
'@needless-ui/css': patch
'@needless-ui/angular': patch
'@needless-ui/react': patch
---

**Fixes from testing on phones and tablets:**

- **Scheduler:** a tap on free time no longer also clicks the event the app books there (`eventClick` right after `slotSelect`). The click that ends a tap or a drag is ignored when it lands on an event. In Chrome on Android, React's scheduler drew the new event before every such click, and Angular's before some.
- **Scheduler:** the day no longer opens at the week's sideways scroll, a day's timeline no longer opens a pixel past its first hour, and the label of the hour the week and the day open at shows whole: the first one, at the top, sits under its line, where the all-day row covered half of it.
- **Grid:** cards for groups and totals show what they hold, the group with its toggle and the aggregates, instead of every column's name with no value.
- **Angular:** what the scheduler, chat, toast, carousel, dropzone and phone field announce no longer shows as text at the bottom of the page in apps without Angular Material: they load the CDK's styles that hide its announcer. `nuiAnnouncer()` in `@needless-ui/angular` gives an app the same announcer.
