---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

Every component was tried on phones and tablets, with touch and on-screen keyboards. What that turned up:

- **Rich text editor:** words from keyboards that compose them (Android keyboards compose every word) no longer end up scrambled. The editor redraws once each composition ends and measures the text actually on screen.
- **Scheduler:**
  - A scroll that started on an event or a cell used to leave a drag half-done, and the next tap anywhere moved or created an event. Now a drag the browser takes back changes nothing.
  - On touch screens, a long press picks an event up (or starts choosing time), and the finger then drags it instead of scrolling the page. The resize edge is taller for a finger.
  - The scheduler narrows with its container instead of pushing past it, and keeps its times in view as a week scrolls sideways.
- **Date and time fields:** text a keyboard composes is taken once, when the composition ends, instead of piling up in the segment ("AaM").
- **Number field:** a lone `.` or `,` reads as the decimal point unless three digits follow it, since a phone's keypad has its region's separator, not the page's. Fixed along the way: with `maximumFractionDigits: 0`, German numbers read their group separator as a decimal point. On iPhone and iPad, a field that takes negatives asks for the text keyboard, because the number pad has no minus key.
- **OTP input:** tapping a slot selects its character, as a click does. Characters a keyboard composes that the pattern doesn't allow are cleaned out.
- **Grid:**
  - A tap on the active cell starts editing it, since touch screens have no double click.
  - A sideways scroll that starts on a header no longer moves the column; dragging headers is left to the column menu on touch.
  - Column edges are wider and always visible for a finger.
- **Menu:** a tap outside closes it, even when the tapped trigger didn't take focus, as in Safari. The trigger focuses itself when clicked.
- **Popups** stay in the visible part of the page, above the on-screen keyboard, and go below their anchor when there's no room beside it. With an arrow, a popover that's taller than its room scrolls, and its arrow goes.
- **Tour:** a card with no room above or below its target goes in the middle instead of shrinking until its buttons are out of reach, and scrolls on short screens.
- **Chat:** `sendOn` defaults to a new `auto`. Enter sends where there's a keyboard and a pointer; on touch screens, Return makes a new line and the button sends, as in message editing. `enterkeyhint` says which.
- **Combobox:** its buttons no longer bring up the on-screen keyboard when tapped, and the option lists don't highlight or scroll under a finger.
- **Date range picker:** one month on screens under 40rem, where two months stacked were taller than the screen.
- **Carousel:** a finger on the slides stops the rotation for good, as keyboard focus does.
- **Masks:** no autocorrect or spell check.
- **CSS:**
  - Fields have at least 16px of text on touch screens, so Safari on iPhone doesn't zoom into them.
  - Splitter handles and color slider thumbs grow for a finger.
  - The breadcrumbs, color picker, date range picker, OTP input and phone field narrow down to 320px wide.
  - The dropzone's folder button hides on phones and tablets, and the command palette hides its key hints there.
  - Toasts stay clear of a phone's safe areas.
  - Presses show on iOS: components register the touch listener Safari needs to match `:active`.
