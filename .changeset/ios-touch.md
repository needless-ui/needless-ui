---
'@needless-ui/angular': patch
'@needless-ui/css': patch
---

Found by trying every component with a finger in Safari on iOS 17:

- **Select, combobox, phone field and command palette:** their option lists opened empty in Safari 17, whose flexbox gave a `flex: 1` list no height inside a popup sized by its content. The lists now take `flex: 1 1 auto`.
- **Dialog:** with the on-screen keyboard up, Safari on iPhone left a strip of the page below the backdrop undimmed. The backdrop now reaches past the viewport.
- **OTP input:** Safari on iPhone drew its own caret beside the first slot, whatever `caret-color` said. The hidden text now starts out of view there.
- **Chat:** tapping send took focus from the field, so a phone's keyboard closed after every message. The button no longer takes focus.
