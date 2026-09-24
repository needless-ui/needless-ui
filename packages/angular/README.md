# @needless-ui/angular

Angular components for [Needless UI](https://github.com/needless-ui/needless-ui), the Needlessly Engineered Styling Toolkit. They use signal inputs, work zoneless and with SSR, and are styled by [`@needless-ui/css`](https://www.npmjs.com/package/@needless-ui/css). Keyboard and ARIA behavior for composite widgets comes from [Angular Aria](https://angular.dev/guide/aria/overview).

Requires Angular 22.

## Install

```bash
pnpm add @needless-ui/angular @angular/aria @angular/cdk
```

Import the styles once in `src/styles.css`:

```css
@import '@needless-ui/css';
```

## Use

Each component has its own entry point, so your bundle only contains what you import.

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

| Entry point                   | Exports                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `@needless-ui/angular/button` | `NuiButton`, `NuiButtonVariant`                                                             |
| `@needless-ui/angular/dialog` | `NuiDialog`, `NuiDialogTitle`, `NuiDialogDescription`, `NuiDialogActions`, `NuiDialogClose` |
| `@needless-ui/angular/menu`   | `NuiMenuTrigger`, `NuiMenu`, `NuiMenuItem`, `NuiMenuSeparator`, `NuiMenuShortcut`           |
| `@needless-ui/angular`        | Shared types: `NuiTone`, `NuiSize`                                                          |

Each component's full contract (API, keyboard, accessibility) lives in [`specs/`](https://github.com/needless-ui/needless-ui/tree/main/specs).

## License

MIT
