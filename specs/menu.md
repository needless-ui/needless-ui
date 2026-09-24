# Menu

| Package                | Status                                |
| ---------------------- | ------------------------------------- |
| `@needless-ui/css`     | Implemented                           |
| `@needless-ui/angular` | Implemented (on `@angular/aria/menu`) |
| `@needless-ui/react`   | Planned                               |

Follows the WAI-ARIA Authoring Practices [menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) pattern.

## Anatomy

| Part      | CSS class            | Angular            | Role / attributes                                        |
| --------- | -------------------- | ------------------ | -------------------------------------------------------- |
| Trigger   | (a button)           | `nuiMenuTrigger`   | `aria-haspopup`, `aria-expanded`, `aria-controls`        |
| Menu      | `nui-menu`           | `nuiMenu`          | `role="menu"`, `popover="manual"`                        |
| Item      | `nui-menu-item`      | `nuiMenuItem`      | `role="menuitem"`, `menuitemcheckbox` or `menuitemradio` |
| Separator | `nui-menu-separator` | `nuiMenuSeparator` | `role="separator"`                                       |
| Shortcut  | `nui-menu-shortcut`  | `nuiMenuShortcut`  | Hint text at the end of an item                          |

A submenu is a `nuiMenu` placed inside its parent menu and linked from an item with `[submenu]`.

## API

| CSS hook             | Angular                           | Values / notes                                         |
| -------------------- | --------------------------------- | ------------------------------------------------------ |
| `data-active="true"` | set by Angular Aria               | The highlighted item (keyboard or pointer)             |
| `data-tone`          | `tone`                            | `neutral` (default) or `danger`                        |
| `aria-checked`       | `checked`                         | Shows the check or radio indicator                     |
| `aria-disabled`      | `[disabled]`                      | Dimmed, stays focusable and announced, can't be chosen |
| —                    | `value`                           | Unique across the whole menu tree                      |
| —                    | `(selected)` on the item          | Emits the item's value when it's chosen                |
| —                    | `(itemSelected)` on the root menu | Emits the value of any chosen item, submenus included  |

## Keyboard

| Key               | On the trigger                | In the menu                                      |
| ----------------- | ----------------------------- | ------------------------------------------------ |
| Enter / Space     | Opens, focuses the first item | Chooses the item, or opens its submenu           |
| ↓                 | Opens, focuses the first item | Next item                                        |
| ↑                 | Opens, focuses the last item  | Previous item                                    |
| Home / End        |                               | First / last item                                |
| → (← in RTL)      |                               | Opens the submenu and focuses its first item     |
| ← (→ in RTL)      |                               | Closes the submenu, back to its parent item      |
| Escape            | Closes                        | Closes the whole menu, focus back to the trigger |
| Printable letters |                               | Jumps to the next item starting with them        |

Choosing an item closes the menu and returns focus to the trigger. Moving focus outside the trigger and menu also closes it.

## Positioning

The menu renders as a popover in the top layer. It opens below the trigger, aligned to the start edge, and flips above when there's more room there. Submenus open toward the inline end and flip at the viewport edge. Everything stays at least 8px inside the viewport, and tall menus scroll. The position follows the trigger while the page scrolls or resizes.

## Accessibility

- The highlighted item uses a solid accent fill with at least 4.5:1 text contrast, which doubles as the focus indicator. In forced-colors mode it gets a `Highlight` outline instead.
- Checkable items announce their state through `aria-checked`, and every label lines up once any item is checkable.
- The smallest item height is 28px, above the WCAG 2.2 minimum of 24px.
- Submenu chevrons mirror in right-to-left text.

## Implementation notes

- **Angular:** behavior comes from Angular Aria (`Menu`, `MenuItem`, `MenuTrigger`, composed as host directives). Needless UI adds the styles, the popover, positioning, and a per-item `(selected)` output. Aria chooses the item to focus before the popover is visible, so `nuiMenu` moves focus there once it shows.
- **React (planned):** same markup and attributes, with behavior from React Aria's menu.
