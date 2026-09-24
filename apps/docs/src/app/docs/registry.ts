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
import { ComboboxCountryExample } from '../examples/combobox/country';
import { ComboboxPeopleExample } from '../examples/combobox/people';
import { ComboboxTagsExample } from '../examples/combobox/tags';
import { CommandPaletteExample } from '../examples/command/palette';
import { CommandPeopleExample } from '../examples/command/people';
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
import { PopoverFiltersExample } from '../examples/popover/filters';
import { PopoverProfileExample } from '../examples/popover/profile';
import { PopoverSidesExample } from '../examples/popover/sides';
import { RatingAverageExample } from '../examples/rating/average';
import { RatingPickExample } from '../examples/rating/pick';
import { SelectCountriesExample } from '../examples/select/countries';
import { SelectFoldersExample } from '../examples/select/folders';
import { SelectToppingsExample } from '../examples/select/toppings';
import { SelectZonesExample } from '../examples/select/zones';
import { SkeletonCardExample } from '../examples/skeleton/card';
import { ToastActionsExample } from '../examples/toast/actions';
import { ToastTonesExample } from '../examples/toast/tones';
import type { ComponentId } from './ids';

export interface ApiMember {
  name: string;
  kind: 'input' | 'model' | 'output' | 'method' | 'property';
  type: string;
  default?: string;
  /** Set on the shared customization inputs, which take their description from one place. */
  customization?: Customization;
}

export interface ApiEntry {
  name: string;
  /** Absent for an interface, whose members are its properties. */
  selector?: string;
  exportAs?: string;
  members: ApiMember[];
  /** Inputs that only hold texts to show or announce, listed together under the table. */
  texts?: string[];
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
const SIDE = "'top' | 'bottom' | 'start' | 'end'";
const ALIGN = "'start' | 'center' | 'end'";
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

/** Where a popover or hovercard goes, relative to its trigger. */
const placement = (): ApiMember[] => [
  { name: 'side', kind: 'input', type: SIDE, default: "'bottom'" },
  { name: 'align', kind: 'input', type: ALIGN, default: "'start'" },
  { name: 'offset', kind: 'input', type: 'number', default: '8' },
  { name: 'arrow', kind: 'input', type: 'boolean', default: 'false' },
];

/** The option shape shared by the select, the combobox and the command palette. */
const NUI_OPTION: ApiEntry = {
  name: 'NuiOption',
  members: [
    { name: 'value', kind: 'property', type: 'V' },
    { name: 'label', kind: 'property', type: 'string' },
    { name: 'description', kind: 'property', type: 'string' },
    { name: 'group', kind: 'property', type: 'string' },
    { name: 'keywords', kind: 'property', type: 'string[]' },
    { name: 'disabled', kind: 'property', type: 'boolean' },
    { name: 'children', kind: 'property', type: 'NuiOption<V>[]' },
  ],
};

/** Custom rows, for every list of options. */
const OPTION_TEMPLATES: ApiEntry[] = [
  { name: 'NuiOptionTemplate', selector: 'ng-template[nuiOptionTemplate]', members: [] },
  {
    name: 'NuiOptionText',
    selector: '[nuiOptionText]',
    members: [{ name: 'nuiOptionText', kind: 'input', type: 'NuiOptionRow<V>' }],
  },
];

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
  combobox: {
    id: 'combobox',
    importFile: 'snippets/import-combobox.ts',
    api: [
      {
        name: 'NuiCombobox',
        selector: 'nui-combobox',
        members: [
          { name: 'options', kind: 'input', type: 'NuiOption<V>[]' },
          { name: 'value', kind: 'model', type: 'V | null', default: 'null' },
          { name: 'values', kind: 'model', type: 'readonly V[]', default: '[]' },
          { name: 'multiple', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'create', kind: 'input', type: '(text: string) => V' },
          { name: 'filtering', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'loading', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'clearable', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'placeholder', kind: 'input', type: 'string', default: "''" },
          { name: 'label', kind: 'input', type: 'string' },
          { name: 'inputId', kind: 'input', type: 'string' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          {
            name: 'compareWith',
            kind: 'input',
            type: '(a: V, b: V) => boolean',
            default: 'Object.is',
          },
          { name: 'displayWith', kind: 'input', type: '(value: V) => string', default: 'String' },
          { name: 'virtual', kind: 'input', type: "boolean | 'auto'", default: "'auto'" },
          { name: 'queryChange', kind: 'output', type: 'string' },
          { name: 'openChange', kind: 'output', type: 'boolean' },
          { name: 'show', kind: 'method', type: '() => void' },
          { name: 'hide', kind: 'method', type: '() => void' },
          { name: 'clear', kind: 'method', type: '() => void' },
          { name: 'focus', kind: 'method', type: '(options?: FocusOptions) => void' },
        ],
        texts: [
          'emptyLabel',
          'loadingLabel',
          'clearLabel',
          'toggleLabel',
          'chipsLabel',
          'removeLabel',
          'createLabel',
        ],
      },
      ...OPTION_TEMPLATES,
    ],
    examples: [
      { id: 'country', component: ComboboxCountryExample },
      { id: 'tags', component: ComboboxTagsExample },
      { id: 'people', component: ComboboxPeopleExample },
    ],
  },
  command: {
    id: 'command',
    importFile: 'snippets/import-command.ts',
    api: [
      {
        name: 'NuiCommandPalette',
        selector: 'nui-command-palette',
        members: [
          { name: 'commands', kind: 'input', type: 'NuiCommand[]' },
          { name: 'open', kind: 'model', type: 'boolean', default: 'false' },
          { name: 'hotkey', kind: 'input', type: 'string | null', default: "'mod+k'" },
          { name: 'bindShortcuts', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'loop', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'filtering', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'loading', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'hints', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'virtual', kind: 'input', type: "boolean | 'auto'", default: "'auto'" },
          { name: 'label', kind: 'input', type: 'string', default: "'Command palette'" },
          {
            name: 'placeholder',
            kind: 'input',
            type: 'string',
            default: "'Type a command or search…'",
          },
          { name: 'run', kind: 'output', type: 'NuiCommand' },
          { name: 'queryChange', kind: 'output', type: 'string' },
          { name: 'show', kind: 'method', type: '() => void' },
          { name: 'hide', kind: 'method', type: '() => void' },
          { name: 'toggle', kind: 'method', type: '() => void' },
          { name: 'back', kind: 'method', type: '() => void' },
        ],
        texts: [
          'emptyLabel',
          'loadingLabel',
          'backLabel',
          'closeLabel',
          'moveLabel',
          'chooseLabel',
        ],
      },
      {
        name: 'NuiCommand',
        members: [
          { name: 'label', kind: 'property', type: 'string' },
          { name: 'description', kind: 'property', type: 'string' },
          { name: 'group', kind: 'property', type: 'string' },
          { name: 'keywords', kind: 'property', type: 'string[]' },
          { name: 'shortcut', kind: 'property', type: 'string' },
          { name: 'disabled', kind: 'property', type: 'boolean' },
          { name: 'children', kind: 'property', type: 'NuiCommand[]' },
          { name: 'run', kind: 'property', type: '() => void' },
          { name: 'id', kind: 'property', type: 'string' },
        ],
      },
    ],
    examples: [
      { id: 'palette', component: CommandPaletteExample },
      { id: 'people', component: CommandPeopleExample },
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
  popover: {
    id: 'popover',
    importFile: 'snippets/import-popover.ts',
    api: [
      {
        name: 'NuiPopover',
        selector: '[nuiPopover]',
        exportAs: 'nuiPopover',
        members: [
          ...placement(),
          ...customization('enter', 'motion', 'spring', 'corners', 'radius', 'density'),
          { name: 'openChange', kind: 'output', type: 'boolean' },
          { name: 'show', kind: 'method', type: '(anchor: HTMLElement) => void' },
          { name: 'hide', kind: 'method', type: '() => void' },
        ],
      },
      {
        name: 'NuiPopoverTrigger',
        selector: 'button[nuiPopoverTrigger]',
        members: [{ name: 'nuiPopoverTrigger', kind: 'input', type: 'NuiPopover' }],
      },
      {
        name: 'NuiHovercard',
        selector: '[nuiHovercard]',
        exportAs: 'nuiHovercard',
        members: [
          ...placement(),
          { name: 'openDelay', kind: 'input', type: 'number', default: '500' },
          { name: 'closeDelay', kind: 'input', type: 'number', default: '300' },
          ...customization('enter', 'motion', 'spring', 'corners', 'radius', 'density'),
          { name: 'openChange', kind: 'output', type: 'boolean' },
          { name: 'show', kind: 'method', type: '(anchor: HTMLElement) => void' },
          { name: 'hide', kind: 'method', type: '() => void' },
        ],
      },
      {
        name: 'NuiHovercardTrigger',
        selector: '[nuiHovercardTrigger]',
        members: [{ name: 'nuiHovercardTrigger', kind: 'input', type: 'NuiHovercard' }],
      },
    ],
    examples: [
      { id: 'filters', component: PopoverFiltersExample },
      { id: 'profile', component: PopoverProfileExample },
      { id: 'sides', component: PopoverSidesExample },
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
  select: {
    id: 'select',
    importFile: 'snippets/import-select.ts',
    api: [
      {
        name: 'NuiSelect',
        selector: 'nui-select',
        members: [
          { name: 'options', kind: 'input', type: 'NuiOption<V>[]' },
          { name: 'value', kind: 'model', type: 'V | null', default: 'null' },
          { name: 'values', kind: 'model', type: 'readonly V[]', default: '[]' },
          { name: 'multiple', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'selectAll', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'placeholder', kind: 'input', type: 'string', default: "'Select…'" },
          { name: 'label', kind: 'input', type: 'string' },
          { name: 'triggerId', kind: 'input', type: 'string' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          {
            name: 'compareWith',
            kind: 'input',
            type: '(a: V, b: V) => boolean',
            default: 'Object.is',
          },
          { name: 'virtual', kind: 'input', type: "boolean | 'auto'", default: "'auto'" },
          { name: 'openChange', kind: 'output', type: 'boolean' },
          { name: 'show', kind: 'method', type: '() => void' },
          { name: 'hide', kind: 'method', type: '() => void' },
          { name: 'focus', kind: 'method', type: '(options?: FocusOptions) => void' },
        ],
        texts: ['selectAllLabel', 'clearAllLabel', 'emptyLabel'],
      },
      NUI_OPTION,
      ...OPTION_TEMPLATES,
    ],
    examples: [
      { id: 'countries', component: SelectCountriesExample },
      { id: 'toppings', component: SelectToppingsExample },
      { id: 'folders', component: SelectFoldersExample },
      { id: 'zones', component: SelectZonesExample },
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
