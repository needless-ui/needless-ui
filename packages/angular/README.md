# @needless-ui/angular

Angular components for [Needless UI](https://github.com/needless-ui/needless-ui), the Needlessly Engineered Styling Toolkit. They use signal inputs, work zoneless and with SSR, and are styled by [`@needless-ui/css`](https://www.npmjs.com/package/@needless-ui/css). Keyboard and ARIA behavior for composite widgets comes from [Angular Aria](https://angular.dev/guide/aria/overview).

Everything is MIT, including a scheduler with resource timelines and repeating events, and a data grid with grouping, tree data and Excel export: no premium tier, no license key. The scheduler and the data grid are React components too, in [`@needless-ui/react`](https://www.npmjs.com/package/@needless-ui/react).

Requires Angular 22.

## Install

```bash
ng add @needless-ui/angular
```

That adds the package with Angular Aria and the CDK, and imports the styles at the top of your global stylesheet. By hand, it's:

```bash
pnpm add @needless-ui/angular @angular/aria @angular/cdk
```

```css
/* src/styles.css */
@layer reset, nui, app; /* optional: keeps your resets from overriding components */
@import '@needless-ui/css';
```

With Tailwind CSS, components go after Tailwind's base styles and before its utilities: `@layer theme, base, nui, components, utilities;` (`ng add` writes that line when it finds Tailwind).

## Use

Each component has its own entry point, so your bundle only contains what you import. The primary entry point, `@needless-ui/angular`, holds what they share: types, the customization inputs and `springTransition()`.

```ts
import { NuiButton } from '@needless-ui/angular/button';
import {
  NuiDialog,
  NuiDialogActions,
  NuiDialogClose,
  NuiDialogTitle,
} from '@needless-ui/angular/dialog';
import { NuiMenu, NuiMenuItem, NuiMenuTrigger } from '@needless-ui/angular/menu';

@Component({
  imports: [
    NuiButton,
    NuiDialog,
    NuiDialogTitle,
    NuiDialogActions,
    NuiDialogClose,
    NuiMenu,
    NuiMenuItem,
    NuiMenuTrigger,
  ],
  template: `
    <button nuiButton variant="outline" [nuiMenuTrigger]="actions">Actions</button>
    <div nuiMenu #actions="ngMenu">
      <div nuiMenuItem value="rename" (selected)="rename()">Rename</div>
      <div nuiMenuItem value="delete" tone="danger" (selected)="confirming.set(true)">Delete</div>
    </div>

    <dialog nuiDialog size="sm" [(open)]="confirming" (closed)="$event === 'delete' && remove()">
      <h2 nuiDialogTitle>Delete this project?</h2>
      <div nuiDialogActions>
        <button nuiButton variant="soft" tone="neutral" nuiDialogClose autofocus>Cancel</button>
        <button nuiButton tone="danger" nuiDialogClose="delete">Delete</button>
      </div>
    </dialog>
  `,
})
export class ProjectActions {
  readonly confirming = signal(false);
  rename() {}
  remove() {}
}
```

## Components

| Entry point                         | Exports                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `@needless-ui/angular/avatar`       | `NuiAvatar`, `NuiAvatarGroup`                                                                                           |
| `@needless-ui/angular/breadcrumbs`  | `NuiBreadcrumbs`                                                                                                        |
| `@needless-ui/angular/button`       | `NuiButton`                                                                                                             |
| `@needless-ui/angular/calendar`     | `NuiCalendar`                                                                                                           |
| `@needless-ui/angular/carousel`     | `NuiCarousel`, `NuiCarouselSlide`                                                                                       |
| `@needless-ui/angular/chat`         | `NuiChat`, `NuiChatThread`, `NuiChatComposer`, `NuiChatSession`                                                         |
| `@needless-ui/angular/color-picker` | `NuiColorPicker`, `nuiParseColor`, `nuiFormatColor`, `nuiContrast`                                                      |
| `@needless-ui/angular/command`      | `NuiCommandPalette`, `NuiCommand`                                                                                       |
| `@needless-ui/angular/date-picker`  | `NuiDateField`, `NuiTimeField`, `NuiDatePicker`, `NuiDateRangePicker`                                                   |
| `@needless-ui/angular/dialog`       | `NuiDialog`, `NuiDialogTitle`, `NuiDialogDescription`, `NuiDialogActions`, `NuiDialogClose`                             |
| `@needless-ui/angular/dropzone`     | `NuiDropzone`, `NuiUploadQueue`                                                                                         |
| `@needless-ui/angular/editor`       | `NuiEditor`, `nuiEditorToHtml`, `nuiEditorToMarkdown`                                                                   |
| `@needless-ui/angular/empty`        | `NuiEmpty` and its parts                                                                                                |
| `@needless-ui/angular/grid`         | `NuiGrid`, `NuiGridCell`, `NuiGridDetail`, `NuiGridEngine`, `nuiXlsx`                                                   |
| `@needless-ui/angular/markdown`     | `NuiMarkdown`                                                                                                           |
| `@needless-ui/angular/mask`         | `NuiMask`, `nuiCardMask`, `nuiIbanMask`, `nuiLuhn`, `nuiIbanValid`                                                      |
| `@needless-ui/angular/menu`         | `NuiMenuTrigger`, `NuiMenu`, `NuiMenuItem`, `NuiMenuSeparator`, `NuiMenuShortcut`                                       |
| `@needless-ui/angular/number-field` | `NuiNumberField`, `NuiNumberInput`                                                                                      |
| `@needless-ui/angular/otp`          | `NuiOtp`, `NuiOtpInput`                                                                                                 |
| `@needless-ui/angular/phone-field`  | `NuiPhoneField`, `nuiParsePhone`, `nuiFormatPhone`                                                                      |
| `@needless-ui/angular/popover`      | `NuiPopover`, `NuiPopoverTrigger`, `NuiHovercard`, `NuiHovercardTrigger`                                                |
| `@needless-ui/angular/rating`       | `NuiRating`                                                                                                             |
| `@needless-ui/angular/scheduler`    | `NuiScheduler`, `NuiSchedulerEventTemplate`, `NuiSchedulerResourceTemplate`, `nuiSchedulerToIcs`, `nuiSchedulerFromIcs` |
| `@needless-ui/angular/select`       | `NuiSelect`, `NuiCombobox`, `NuiOptionTemplate`                                                                         |
| `@needless-ui/angular/skeleton`     | `NuiSkeleton`                                                                                                           |
| `@needless-ui/angular/splitter`     | `NuiSplitter`, `NuiSplitterPane`, `NuiSplitterHandle`                                                                   |
| `@needless-ui/angular/toast`        | `NuiToaster`, `NuiToasterRegion`                                                                                        |
| `@needless-ui/angular/tour`         | `NuiTour`                                                                                                               |
| `@needless-ui/angular`              | Shared types, `NuiPersonality`, `springTransition()`, `nuiFollow`, `NuiVirtualizer`, plain-date helpers                 |

Each component's full contract (API, keyboard, accessibility) lives in [`specs/`](https://github.com/needless-ui/needless-ui/tree/main/specs).

## Customize

Every component takes the customization presets as inputs. Leave one unset and it follows the nearest `data-nui-*` attribute, so a whole app can be set in one place:

```html
<body data-nui-motion="bouncy" data-nui-corners="squircle">
  <button nuiButton press="rubber" motion="elastic">Boing</button>
  <dialog nuiDialog enter="flip" [spring]="{ stiffness: 300, damping: 9 }">…</dialog>
</body>
```

- `NuiButton`: `motion`, `spring`, `press`, `corners`, `radius`, `density`
- `NuiDialog` and `NuiMenu`: `enter`, `motion`, `spring`, `corners`, `radius`, `density`

`spring` takes any `{ stiffness, damping, mass }` and compiles it to CSS with `springTransition()`, the same solver that builds the spring tokens. `NuiPersonality` gives your own components the same inputs as a host directive.

## Browser support

| Browser                                   | From   |
| ----------------------------------------- | ------ |
| Chrome and Edge, on computers and Android | 120    |
| Firefox, on computers and Android         | 125    |
| Safari on Mac                             | 17     |
| Every browser on iPhone and iPad          | iOS 17 |
| Samsung Internet                          | 25     |

Tested in Chromium, Firefox and WebKit, on computers and touch screens. Older browsers aren't supported: without the Popover API, menus, selects and popovers don't open. See the [browser support guide](https://www.needlessui.com/guides/browser-support).

## License

MIT
