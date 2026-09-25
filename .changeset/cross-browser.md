---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

Every component now runs its tests in Chromium, Firefox and WebKit, and `specs/browser-support.md` lists the supported browsers: Chrome and Edge 120, Firefox 125, Safari 17 and iOS 17. What that turned up:

- **Safari doesn't focus the buttons it clicks.**
  - The select focuses its trigger when its list opens, so keys pressed after opening it by mouse work there too (the phone field's country list included).
  - A popover trigger focuses itself when clicked, so Tab goes on into the popover and focus comes back to the trigger on close.
  - A clicked rating star takes focus, so the arrow keys go on from it.
  - A dialog returns focus to the control that opened it, instead of leaving it on the page.
- **Avatar initials** split names at spaces instead of using `Intl.Segmenter`'s word dictionaries. Firefox has none for Chinese, so a name like 毛泽东 got no initials there.
- **Dropzone:** files whose folder entries can't be read (dragged in from some apps) arrive as plain files instead of not at all.
- **Drags** (splitter handles, the color area, grid column edges, toast swipes) no longer fail when the pointer can't be captured, as with synthetic events in tests.
- **CSS:**
  - The dialog backdrop gets a fallback color where `::backdrop` can't read custom properties (Chrome 120–121, Safari 17.0–17.3).
  - The carousel's rotation ring stays drawn without `@property` (Firefox 125–127).
  - The bundle's prefixes target the supported browsers.
