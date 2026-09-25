# Browser support

| Package                | Status      |
| ---------------------- | ----------- |
| `@needless-ui/tokens`  | Implemented |
| `@needless-ui/css`     | Implemented |
| `@needless-ui/angular` | Implemented |
| `@needless-ui/react`   | Planned     |

Which browsers Needless UI supports, how that's tested, and what components do where a browser falls short. The docs page `/guides/browser-support` says the same for users.

## Supported browsers

| Browser                                   | From   | Needed for                                                   |
| ----------------------------------------- | ------ | ------------------------------------------------------------ |
| Chrome and Edge, on computers and Android | 120    | Unprefixed CSS `mask` (icons), `:dir()` (right-to-left text) |
| Firefox, on computers and Android         | 125    | The Popover API                                              |
| Safari on macOS                           | 17.0   | The Popover API                                              |
| Every browser on iPhone and iPad          | iOS 17 | The Popover API (every iOS browser uses WebKit)              |
| Samsung Internet                          | 25     | Chromium 121                                                 |

Other Chromium browsers (Opera, Brave, Vivaldi) follow Chrome's versions. Angular 22 itself supports Chrome, Edge and Firefox 119 and Safari 17 ("Baseline widely available" on 2026-05-07); the components need a little more. Internet Explorer, EdgeHTML and Opera Mini aren't supported.

`packages/css/scripts/bundle.ts` targets these versions for prefixes. Don't raise a floor without updating this table, the docs page and the targets together.

### What sets the floor

Required: a component breaks without it.

| Feature                                                                    | Chrome, Edge | Firefox | Safari, iOS |
| -------------------------------------------------------------------------- | ------------ | ------- | ----------- |
| Popover API (`popover`, `showPopover()`, `popovertarget`, `ToggleEvent`)   | 114          | 125     | 17.0        |
| Unprefixed `mask`, `:dir()`, unprefixed `background-clip: text`            | 120          | 53      | 16.4        |
| `:has()`                                                                   | 105          | 121     | 15.4        |
| `<dialog>` with `:modal`                                                   | 105          | 103     | 15.6        |
| `oklch()`, `color-mix()`, `@layer`                                         | 111          | 113     | 16.2        |
| Regular-expression lookbehind (editor input rules)                         | 62           | 78      | 16.4        |
| `Intl.Segmenter`, `Intl.DisplayNames`, `Intl.DateTimeFormat#formatRange()` | 87           | 125     | 14.1        |
| ES2022 (the library's compile target)                                      | 94           | 93      | 16.4        |

### Where newer browsers do more

Progressive: older supported browsers skip it, and nothing breaks.

| Feature                                                        | Browsers                             | Without it                                               |
| -------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------- |
| `@starting-style`, `transition-behavior` (animated popups)     | Chrome 117, Firefox 129, Safari 17.5 | Popovers, menus and dialogs appear and disappear at once |
| `linear()` spring easing                                       | Chrome 113, Firefox 112, Safari 17.2 | The transitions that use it don't run                    |
| `corner-shape`                                                 | Chrome 139                           | Round corners                                            |
| `field-sizing: content` (chat composer)                        | Chrome 123                           | A script grows the field                                 |
| Scroll-driven animations (breadcrumb edges)                    | Chrome 115, Safari 26                | No fading edges                                          |
| `@property` (carousel rotation ring)                           | Chrome, Firefox 128, Safari          | The ring fills at once                                   |
| `::backdrop` reading custom properties (dialog backdrop color) | Chrome 122, Safari 17.4              | A fixed fallback color                                   |
| `scrollend` (carousel, tour)                                   | Chrome, Firefox                      | Timeouts                                                 |
| `Intl.Locale` week info (first day of the week)                | Chrome, Edge, Safari                 | A built-in table of regions (Firefox)                    |
| EyeDropper (color picker)                                      | Chrome and Edge on computers         | No eyedropper button                                     |
| Display-P3 canvas (color picker area)                          | Chrome, Safari                       | sRGB                                                     |
| `webkitdirectory` (dropzone folders)                           | Every browser on computers           | Files only                                               |
| `showPopover({ source })` (focus returns to the anchor)        | Chrome 133                           | Focus returns to what was focused before                 |
| CloseWatcher (Android's back gesture closes manual popovers)   | Chrome and Edge 126, Firefox 149     | Only Escape closes them; back goes back a page           |

## Touch and small screens

- **Drags** (splitter handles, the color area, grid column edges, swiping toasts away) use pointer events, set `touch-action` so the page doesn't scroll under the finger, and do nothing when the browser takes the gesture back (`pointercancel`). The scheduler picks an event up with a long press, since a finger that moves at once scrolls the page. The carousel swipes with native scroll snapping, and a finger on its slides stops its rotation.
- **Taps** do what clicks do, and stand in where there's no second click: a tap on the active grid cell starts editing it. Reordering columns by dragging their headers is left to the column menu on touch, and grid cards, which have no header row, sort and open the column menu from a toolbar.
- **Fields** have at least 16px of text on touch screens, or Safari on iPhone zooms the page into them. Text from keyboards that compose (Android keyboards compose every word) is read when each composition ends: the editor, date and time fields, OTP and mask.
- **Targets** are at least 24 by 24 CSS pixels (WCAG 2.2, 2.5.8); splitter handles, grid column edges and slider thumbs grow on coarse pointers.
- **Hover only adds.** A hovercard doesn't open by touch. On a touch screen with nothing that hovers, the command palette hides its key hints, the dropzone its folder button, and the chat's Return makes a new line while its button sends (`sendOn: 'auto'`).
- **Small screens.** Components narrow with their container down to 320px wide: lists scroll and fields wrap. Popups stay in the visible part of the page (above the on-screen keyboard), go below their anchor when there's no room beside it, and scroll when they're taller than the room they have. The range picker shows one month under 40rem.
- **iOS.** Presses show (`:active` needs a touch listener there), and a tap outside closes a menu even when the tapped trigger never took focus.
- **Back gesture.** Android's back gesture or button is a close request: it closes the popup on top, as Escape does, focus going where Escape sends it. The browser closes dialogs and `popover="auto"` popovers (the popover, the select's list) itself. Menus, combobox lists, hovercards and interactive tour cards are manual popovers: each listens with a CloseWatcher while it's open (`nuiOnCloseRequest()` in `@needless-ui/angular`), where the browser has the API. One request closes one popup, so a submenu closes back to its item before its menu closes. Without the API, only Escape closes them, and back goes back a page.
- **Platform limits, not bugs.** Phones and tablets mostly can't pick folders, and have no EyeDropper.

## Safari and focus

Safari doesn't focus a button, checkbox or radio when it's clicked, and by default its Tab key only moves between text fields and pop-up menus (Option-Tab, or "Press Tab to highlight each item on a webpage", reaches the rest). So that the keyboard carries on after a click as in other browsers:

- The select focuses its trigger when its list opens (the list is driven from the trigger).
- A popover trigger focuses itself when clicked, so Tab goes on into the popover and the browser returns focus there on close.
- A rating star focuses itself when clicked, so the arrow keys go on from it.
- A dialog remembers the control a pointer pressed last before it opened, and returns focus there if the browser leaves it on the page instead.

## Testing

- **Every change** (CI): the Angular tests run in Chromium, Firefox and WebKit (Playwright's builds; `browsers` in `angular.json`). Test files run one at a time per browser (`packages/angular/vitest.config.ts`): Firefox gives focus to one page at a time, and focus tests flake when files share it.
- **Close requests** are tested with a real Escape that the page's keydown listeners never see: it reaches the close watchers as Android's back gesture does. Those tests run where CloseWatcher exists (Playwright's WebKit has it, ahead of Safari), and each popup is also tested with the API removed, as in Safari and older Firefox and Chrome.
- **Before a release**: `pnpm build:docs`, then `pnpm check:browsers`. It opens every component page in each engine on a computer screen and on a phone-sized touch screen (Pixel 7 in Chromium, iPhone 15 in WebKit, a 412px touch screen in Firefox), and fails on a page that doesn't hydrate, throws, fails a request, is wider than the screen, or has a popup that doesn't open, or close on Escape.
- **By hand, on release candidates**: Safari on iPhone in the Xcode simulator (the oldest supported iOS and the newest), for real touch.

Last full run (2026-09-25): Chromium 153, Firefox 155, WebKit 26.6, and iOS Safari 17.5 and 18.6 in the simulator. Versions between the floor and these aren't tested one by one; they're supported because they have every required feature.

## Known browser behavior

- Chrome and Edge let a second Escape close a dialog whose `cancel` was prevented, unless the user interacted in between (the HTML close-request rules against trapping). A `dismissible="false"` dialog can therefore close on a double Escape there.
- A close watcher gets Escape too, in every engine that has one: as the key's default action, after every keydown listener, and only if none of them called `preventDefault()`. So a component that closes a popup on Escape prevents the key (Angular Aria's menus do, and so do the combobox and the tour), or nothing would stop the same Escape from reaching the watcher and closing the popup again. A watcher stopped during the keydown passes the Escape on to the next one, which would close a parent menu or a dialog as well. The hovercard hides on Escape anywhere without preventing it, so its watcher lasts until the card's `toggle` event: it takes that Escape, and whatever is behind the card stays open.
- Watchers made with no click, tap or key press in between can share a group, and one close request closes a whole group (another rule against trapping). A popup that opens without one, such as a submenu or a hovercard opened by hovering, can then close together with the popup below it.
- Safari 17 gives a column flex item with `flex: 1` (a 0% basis) no height inside a popup sized by its content. The option lists of the select, combobox, phone field and command palette take `flex: 1 1 auto`, or they'd open empty there.
- Safari on iPhone and iPad keeps drawing a field's own caret whatever `caret-color` says. The OTP input starts its hidden text out of view there (`text-indent`), so only its drawn caret shows.
- With the on-screen keyboard up, Safari on iPhone can show page below the edge of fixed layers. A dialog's backdrop reaches past the viewport, so no strip of the page is left undimmed.
