import { AvatarGroupExample } from '../examples/avatar/group';
import { AvatarPeopleExample } from '../examples/avatar/people';
import { BreadcrumbsLongExample } from '../examples/breadcrumbs/long';
import { BreadcrumbsTrailExample } from '../examples/breadcrumbs/trail';
import type { Type } from '@angular/core';
import { ButtonLinksExample } from '../examples/button/links';
import { ButtonPressesExample } from '../examples/button/presses';
import { ButtonShapesExample } from '../examples/button/shapes';
import { ButtonSizesExample } from '../examples/button/sizes';
import { ButtonTonesExample } from '../examples/button/tones';
import { ButtonVariantsExample } from '../examples/button/variants';
import { DialogConfirmExample } from '../examples/dialog/confirm';
import { DialogDismissibleExample } from '../examples/dialog/dismissible';
import { DialogEntrancesExample } from '../examples/dialog/entrances';
import { EmptyPicturesExample } from '../examples/empty/pictures';
import { EmptySearchExample } from '../examples/empty/search';
import { DialogFormExample } from '../examples/dialog/form';
import { MenuActionsExample } from '../examples/menu/actions';
import { MenuCheckableExample } from '../examples/menu/checkable';
import { MenuEntrancesExample } from '../examples/menu/entrances';
import { MenuSubmenuExample } from '../examples/menu/submenu';
import { NumberFieldFormatsExample } from '../examples/number-field/formats';
import { NumberFieldGuestsExample } from '../examples/number-field/guests';
import { OtpLettersExample } from '../examples/otp/letters';
import { OtpVerifyExample } from '../examples/otp/verify';
import { RatingAverageExample } from '../examples/rating/average';
import { RatingPickExample } from '../examples/rating/pick';
import { SkeletonCardExample } from '../examples/skeleton/card';
import { ToastActionsExample } from '../examples/toast/actions';
import { ToastTonesExample } from '../examples/toast/tones';
import type { ComponentId } from './ids';

export interface ApiMember {
  name: string;
  kind: 'input' | 'model' | 'output' | 'method';
  type: string;
  default?: string;
  /** Set on the shared customization inputs, which take their description from one place. */
  customization?: Customization;
}

export interface ApiEntry {
  name: string;
  selector: string;
  exportAs?: string;
  members: ApiMember[];
}

export interface ExampleEntry {
  /** Anchor id and key into the locale's example texts; files live in examples/<component>/<id>.* */
  id: string;
  component: Type<unknown>;
}

/** Language-neutral facts about a component. Prose lives in the locale files. */
export interface ComponentDoc {
  id: ComponentId;
  importFile: string;
  api: ApiEntry[];
  examples: ExampleEntry[];
}

const TONE = "'accent' | 'neutral' | 'danger'";
const SIZE = "'sm' | 'md' | 'lg'";

type Customization = 'motion' | 'spring' | 'press' | 'enter' | 'corners' | 'radius' | 'density';
const CUSTOMIZATION_TYPES: Record<Customization, string> = {
  motion: 'NuiMotion',
  spring: 'NuiSpring',
  press: 'NuiPress',
  enter: 'NuiEnter',
  corners: 'NuiCorners',
  radius: 'NuiRadius',
  density: 'NuiDensity',
};
/** The customization inputs a component takes from `NuiPersonality`. */
const customization = (...names: Customization[]): ApiMember[] =>
  names.map((name) => ({
    name,
    kind: 'input',
    type: CUSTOMIZATION_TYPES[name],
    customization: name,
  }));

export const COMPONENT_DOCS: Record<ComponentId, ComponentDoc> = {
  avatar: {
    id: 'avatar',
    importFile: 'snippets/import-avatar.ts',
    api: [
      {
        name: 'NuiAvatar',
        selector: '[nuiAvatar]',
        members: [
          { name: 'name', kind: 'input', type: 'string' },
          { name: 'src', kind: 'input', type: 'string' },
          { name: 'size', kind: 'input', type: SIZE, default: "'md'" },
          { name: 'shape', kind: 'input', type: "'circle' | 'square'", default: "'circle'" },
          { name: 'status', kind: 'input', type: "'online' | 'away' | 'busy' | 'offline'" },
          { name: 'label', kind: 'input', type: 'string' },
          { name: 'decorative', kind: 'input', type: 'boolean', default: 'false' },
        ],
      },
      { name: 'NuiAvatarGroup', selector: '[nuiAvatarGroup]', members: [] },
    ],
    examples: [
      { id: 'people', component: AvatarPeopleExample },
      { id: 'group', component: AvatarGroupExample },
    ],
  },
  breadcrumbs: {
    id: 'breadcrumbs',
    importFile: 'snippets/import-breadcrumbs.ts',
    api: [
      {
        name: 'NuiBreadcrumbs',
        selector: 'nav[nuiBreadcrumbs]',
        members: [{ name: 'label', kind: 'input', type: 'string', default: "'Breadcrumb'" }],
      },
    ],
    examples: [
      { id: 'trail', component: BreadcrumbsTrailExample },
      { id: 'long', component: BreadcrumbsLongExample },
    ],
  },
  button: {
    id: 'button',
    importFile: 'snippets/import-button.ts',
    api: [
      {
        name: 'NuiButton',
        selector: 'button[nuiButton], a[nuiButton]',
        exportAs: 'nuiButton',
        members: [
          {
            name: 'variant',
            kind: 'input',
            type: "'solid' | 'soft' | 'outline' | 'ghost'",
            default: "'solid'",
          },
          { name: 'tone', kind: 'input', type: TONE, default: "'accent'" },
          { name: 'size', kind: 'input', type: SIZE, default: "'md'" },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          ...customization('motion', 'spring', 'press', 'corners', 'radius', 'density'),
        ],
      },
    ],
    examples: [
      { id: 'variants', component: ButtonVariantsExample },
      { id: 'tones', component: ButtonTonesExample },
      { id: 'sizes', component: ButtonSizesExample },
      { id: 'links', component: ButtonLinksExample },
      { id: 'presses', component: ButtonPressesExample },
      { id: 'shapes', component: ButtonShapesExample },
    ],
  },
  dialog: {
    id: 'dialog',
    importFile: 'snippets/import-dialog.ts',
    api: [
      {
        name: 'NuiDialog',
        selector: 'dialog[nuiDialog]',
        exportAs: 'nuiDialog',
        members: [
          { name: 'open', kind: 'model', type: 'boolean', default: 'false' },
          { name: 'modal', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'dismissible', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'size', kind: 'input', type: SIZE, default: "'md'" },
          ...customization('enter', 'motion', 'spring', 'corners', 'radius', 'density'),
          { name: 'closed', kind: 'output', type: 'string' },
          { name: 'close', kind: 'method', type: '(returnValue?: string) => void' },
        ],
      },
      { name: 'NuiDialogTitle', selector: '[nuiDialogTitle]', members: [] },
      { name: 'NuiDialogDescription', selector: '[nuiDialogDescription]', members: [] },
      { name: 'NuiDialogActions', selector: '[nuiDialogActions]', members: [] },
      {
        name: 'NuiDialogClose',
        selector: '[nuiDialogClose]',
        members: [{ name: 'nuiDialogClose', kind: 'input', type: 'string', default: "''" }],
      },
    ],
    examples: [
      { id: 'confirm', component: DialogConfirmExample },
      { id: 'form', component: DialogFormExample },
      { id: 'dismissible', component: DialogDismissibleExample },
      { id: 'entrances', component: DialogEntrancesExample },
    ],
  },
  empty: {
    id: 'empty',
    importFile: 'snippets/import-empty.ts',
    api: [
      { name: 'NuiEmpty', selector: '[nuiEmpty]', members: [] },
      {
        name: 'NuiEmptyMedia',
        selector: '[nuiEmptyMedia]',
        members: [
          { name: 'illustration', kind: 'input', type: "'search' | 'inbox' | 'files' | 'error'" },
        ],
      },
      { name: 'NuiEmptyTitle', selector: '[nuiEmptyTitle]', members: [] },
      { name: 'NuiEmptyDescription', selector: '[nuiEmptyDescription]', members: [] },
      { name: 'NuiEmptyActions', selector: '[nuiEmptyActions]', members: [] },
    ],
    examples: [
      { id: 'search', component: EmptySearchExample },
      { id: 'pictures', component: EmptyPicturesExample },
    ],
  },
  menu: {
    id: 'menu',
    importFile: 'snippets/import-menu.ts',
    api: [
      {
        name: 'NuiMenuTrigger',
        selector: '[nuiMenuTrigger]',
        exportAs: 'nuiMenuTrigger',
        members: [{ name: 'nuiMenuTrigger', kind: 'input', type: 'Menu' }],
      },
      {
        name: 'NuiMenu',
        selector: '[nuiMenu]',
        exportAs: 'ngMenu',
        members: [
          { name: 'wrap', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'typeaheadDelay', kind: 'input', type: 'number', default: '500' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          ...customization('enter', 'motion', 'spring', 'corners', 'radius', 'density'),
          { name: 'itemSelected', kind: 'output', type: 'V' },
        ],
      },
      {
        name: 'NuiMenuItem',
        selector: '[nuiMenuItem]',
        members: [
          { name: 'value', kind: 'input', type: 'V' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'submenu', kind: 'input', type: 'Menu' },
          {
            name: 'role',
            kind: 'input',
            type: "'menuitem' | 'menuitemcheckbox' | 'menuitemradio'",
            default: "'menuitem'",
          },
          { name: 'checked', kind: 'input', type: 'boolean | undefined' },
          { name: 'tone', kind: 'input', type: "'neutral' | 'danger'", default: "'neutral'" },
          { name: 'searchTerm', kind: 'input', type: 'string' },
          { name: 'selected', kind: 'output', type: 'V' },
        ],
      },
      { name: 'NuiMenuSeparator', selector: '[nuiMenuSeparator]', members: [] },
      { name: 'NuiMenuShortcut', selector: '[nuiMenuShortcut]', members: [] },
    ],
    examples: [
      { id: 'actions', component: MenuActionsExample },
      { id: 'submenu', component: MenuSubmenuExample },
      { id: 'checkable', component: MenuCheckableExample },
      { id: 'entrances', component: MenuEntrancesExample },
    ],
  },
  'number-field': {
    id: 'number-field',
    importFile: 'snippets/import-number-field.ts',
    api: [
      { name: 'NuiNumberField', selector: '[nuiNumberField]', members: [] },
      {
        name: 'NuiNumberInput',
        selector: 'input[nuiNumberInput]',
        members: [
          { name: 'value', kind: 'model', type: 'number | null', default: 'null' },
          { name: 'min', kind: 'input', type: 'number' },
          { name: 'max', kind: 'input', type: 'number' },
          { name: 'step', kind: 'input', type: 'number', default: '1' },
          { name: 'format', kind: 'input', type: 'Intl.NumberFormatOptions', default: '{}' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'stepBy', kind: 'method', type: '(count: number) => void' },
        ],
      },
      {
        name: 'NuiNumberStep',
        selector: 'button[nuiNumberStep]',
        members: [
          { name: 'nuiNumberStep', kind: 'input', type: 'number' },
          { name: 'label', kind: 'input', type: 'string' },
        ],
      },
    ],
    examples: [
      { id: 'guests', component: NumberFieldGuestsExample },
      { id: 'formats', component: NumberFieldFormatsExample },
    ],
  },
  otp: {
    id: 'otp',
    importFile: 'snippets/import-otp.ts',
    api: [
      {
        name: 'NuiOtp',
        selector: '[nuiOtp]',
        members: [
          { name: 'length', kind: 'input', type: 'number', default: '6' },
          {
            name: 'pattern',
            kind: 'input',
            type: "'digits' | 'alphanumeric'",
            default: "'digits'",
          },
          { name: 'groups', kind: 'input', type: 'number[]', default: '[]' },
          { name: 'masked', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'completed', kind: 'output', type: 'string' },
        ],
      },
      {
        name: 'NuiOtpInput',
        selector: 'input[nuiOtpInput]',
        members: [{ name: 'webOtp', kind: 'input', type: 'boolean', default: 'false' }],
      },
    ],
    examples: [
      { id: 'verify', component: OtpVerifyExample },
      { id: 'letters', component: OtpLettersExample },
    ],
  },
  rating: {
    id: 'rating',
    importFile: 'snippets/import-rating.ts',
    api: [
      {
        name: 'NuiRating',
        selector: '[nuiRating]',
        members: [
          { name: 'value', kind: 'model', type: 'number | null', default: 'null' },
          { name: 'max', kind: 'input', type: 'number', default: '5' },
          { name: 'readonly', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'clearable', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'name', kind: 'input', type: 'string' },
          { name: 'starLabel', kind: 'input', type: '(value: number) => string' },
          { name: 'readonlyLabel', kind: 'input', type: '(value: number, max: number) => string' },
        ],
      },
    ],
    examples: [
      { id: 'pick', component: RatingPickExample },
      { id: 'average', component: RatingAverageExample },
    ],
  },
  skeleton: {
    id: 'skeleton',
    importFile: 'snippets/import-skeleton.ts',
    api: [
      {
        name: 'NuiSkeleton',
        selector: '[nuiSkeleton]',
        members: [
          { name: 'shape', kind: 'input', type: "'text' | 'circle' | 'block'", default: "'text'" },
        ],
      },
    ],
    examples: [{ id: 'card', component: SkeletonCardExample }],
  },
  toast: {
    id: 'toast',
    importFile: 'snippets/import-toast.ts',
    api: [
      {
        name: 'NuiToaster',
        selector: 'inject(NuiToaster)',
        members: [
          { name: 'toasts', kind: 'method', type: 'Signal<readonly NuiToast[]>' },
          {
            name: 'show',
            kind: 'method',
            type: '(options: NuiToastOptions | string) => NuiToastRef',
          },
          { name: 'success', kind: 'method', type: '(title, options?) => NuiToastRef' },
          { name: 'warning', kind: 'method', type: '(title, options?) => NuiToastRef' },
          { name: 'danger', kind: 'method', type: '(title, options?) => NuiToastRef' },
          { name: 'promise', kind: 'method', type: '(promise, messages) => Promise' },
          { name: 'dismiss', kind: 'method', type: '(id?: string) => void' },
        ],
      },
      {
        name: 'NuiToasterRegion',
        selector: 'nui-toaster',
        members: [
          {
            name: 'position',
            kind: 'input',
            type: "'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'",
            default: "'bottom-end'",
          },
          { name: 'expanded', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'label', kind: 'input', type: 'string', default: "'Notifications (Alt+T)'" },
          { name: 'closeLabel', kind: 'input', type: 'string', default: "'Dismiss'" },
          { name: 'hotkey', kind: 'input', type: 'string', default: "'KeyT'" },
        ],
      },
    ],
    examples: [
      { id: 'tones', component: ToastTonesExample },
      { id: 'actions', component: ToastActionsExample },
    ],
  },
};
