---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

- **Select:** on touch screens, where there are no keys to type to jump with, a list of more than 20 options gets a search field above it. It waits for a tap, so the on-screen keyboard doesn't cover the list as it opens. `search` shows it always, never or `'auto'` (the default: touch screens, long lists), and `searchLabel` names it. On a keyboard, a letter typed on the trigger goes into the field.
- **Phone field:** its country list is 245 countries long, so on touch screens it can be searched by name or calling code (`+39` finds Italy). `labels.search` names the field.
- **Tour:** under pinch zoom in Safari on iPhone, the spotlight dimmed only a corner of the page, and whether the card fitted beside its target was measured against the wrong part of the screen.
- **Grid:** the pager's first, previous, next and last buttons are grouped (`nui-grid-page-nav`), so on a narrow grid they wrap to a new line together instead of one by one.
