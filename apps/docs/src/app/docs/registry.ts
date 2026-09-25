import type { Type } from '@angular/core';
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
  /** Each example is its own chunk: a page loads only its own (see `examplesResolver`). */
  load: () => Promise<Type<unknown>>;
  /**
   * Renders in the browser once scrolled near, in a placeholder this tall (px), for
   * examples too heavy for the page's first round trip.
   */
  defer?: number;
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
      {
        id: 'people',
        load: () => import('../examples/avatar/people').then((m) => m.AvatarPeopleExample),
      },
      {
        id: 'group',
        load: () => import('../examples/avatar/group').then((m) => m.AvatarGroupExample),
      },
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
      {
        id: 'trail',
        load: () => import('../examples/breadcrumbs/trail').then((m) => m.BreadcrumbsTrailExample),
      },
      {
        id: 'long',
        load: () => import('../examples/breadcrumbs/long').then((m) => m.BreadcrumbsLongExample),
      },
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
      {
        id: 'variants',
        load: () => import('../examples/button/variants').then((m) => m.ButtonVariantsExample),
      },
      {
        id: 'tones',
        load: () => import('../examples/button/tones').then((m) => m.ButtonTonesExample),
      },
      {
        id: 'sizes',
        load: () => import('../examples/button/sizes').then((m) => m.ButtonSizesExample),
      },
      {
        id: 'links',
        load: () => import('../examples/button/links').then((m) => m.ButtonLinksExample),
      },
      {
        id: 'presses',
        load: () => import('../examples/button/presses').then((m) => m.ButtonPressesExample),
      },
      {
        id: 'shapes',
        load: () => import('../examples/button/shapes').then((m) => m.ButtonShapesExample),
      },
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
      {
        id: 'country',
        load: () => import('../examples/combobox/country').then((m) => m.ComboboxCountryExample),
      },
      {
        id: 'tags',
        load: () => import('../examples/combobox/tags').then((m) => m.ComboboxTagsExample),
      },
      {
        id: 'people',
        load: () => import('../examples/combobox/people').then((m) => m.ComboboxPeopleExample),
      },
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
      {
        id: 'palette',
        load: () => import('../examples/command/palette').then((m) => m.CommandPaletteExample),
      },
      {
        id: 'people',
        load: () => import('../examples/command/people').then((m) => m.CommandPeopleExample),
      },
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
      {
        id: 'confirm',
        load: () => import('../examples/dialog/confirm').then((m) => m.DialogConfirmExample),
      },
      {
        id: 'form',
        load: () => import('../examples/dialog/form').then((m) => m.DialogFormExample),
      },
      {
        id: 'dismissible',
        load: () =>
          import('../examples/dialog/dismissible').then((m) => m.DialogDismissibleExample),
      },
      {
        id: 'entrances',
        load: () => import('../examples/dialog/entrances').then((m) => m.DialogEntrancesExample),
      },
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
      {
        id: 'search',
        load: () => import('../examples/empty/search').then((m) => m.EmptySearchExample),
      },
      {
        id: 'pictures',
        load: () => import('../examples/empty/pictures').then((m) => m.EmptyPicturesExample),
      },
    ],
  },
  grid: {
    id: 'grid',
    importFile: 'snippets/import-grid.ts',
    api: [
      {
        name: 'NuiGrid',
        selector: 'nui-grid',
        members: [
          { name: 'rows', kind: 'model', type: 'readonly T[]' },
          { name: 'columns', kind: 'input', type: 'NuiGridColumn<T>[]' },
          { name: 'rowId', kind: 'input', type: '(row: T) => unknown', default: 'row.id ?? row' },
          { name: 'label', kind: 'input', type: 'string' },
          {
            name: 'selection',
            kind: 'input',
            type: "'none' | 'single' | 'multiple'",
            default: "'none'",
          },
          { name: 'selected', kind: 'model', type: 'unknown[]', default: '[]' },
          { name: 'sort', kind: 'model', type: 'NuiGridSort[]', default: '[]' },
          { name: 'filters', kind: 'model', type: 'Record<string, NuiGridFilter>', default: '{}' },
          { name: 'search', kind: 'model', type: 'string', default: "''" },
          { name: 'pageSize', kind: 'model', type: 'number', default: '0' },
          { name: 'page', kind: 'model', type: 'number', default: '0' },
          { name: 'pageSizes', kind: 'input', type: 'number[]', default: '[10, 25, 50, 100]' },
          { name: 'virtual', kind: 'input', type: "boolean | 'auto'", default: "'auto'" },
          { name: 'height', kind: 'input', type: 'string' },
          { name: 'columnState', kind: 'model', type: 'NuiGridColumnState[]', default: '[]' },
          { name: 'mode', kind: 'input', type: "'client' | 'server'", default: "'client'" },
          { name: 'total', kind: 'input', type: 'number' },
          { name: 'loading', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiGridLabels>' },
          ...customization('corners', 'radius', 'density'),
          { name: 'rowActivate', kind: 'output', type: 'T' },
          { name: 'cellEdit', kind: 'output', type: 'NuiGridEdit<T>' },
          { name: 'queryChange', kind: 'output', type: 'NuiGridQuery' },
          { name: 'exportCsv', kind: 'method', type: '(options?) => string' },
          { name: 'focusCell', kind: 'method', type: '(row: number, col: number) => void' },
          { name: 'clearFilters', kind: 'method', type: '() => void' },
        ],
      },
      {
        name: 'NuiGridColumn',
        members: [
          { name: 'id', kind: 'property', type: 'string' },
          { name: 'header', kind: 'property', type: 'string' },
          { name: 'value', kind: 'property', type: 'keyof T | ((row: T) => V)' },
          {
            name: 'type',
            kind: 'property',
            type: "'text' | 'number' | 'date' | 'boolean' | 'enum'",
            default: "'text'",
          },
          { name: 'format', kind: 'property', type: 'Intl options | ((value, row) => string)' },
          { name: 'options', kind: 'property', type: 'NuiOption<V>[]' },
          { name: 'width, minWidth, maxWidth', kind: 'property', type: 'number' },
          { name: 'flex', kind: 'property', type: 'number' },
          { name: 'align', kind: 'property', type: "'start' | 'center' | 'end'" },
          { name: 'pinned, hidden', kind: 'property', type: "'start' | 'end', boolean" },
          {
            name: 'sortable, filterable, resizable, reorderable, hideable',
            kind: 'property',
            type: 'boolean',
            default: 'true',
          },
          { name: 'compare', kind: 'property', type: '(a: V, b: V) => number' },
          {
            name: 'editable, validate',
            kind: 'property',
            type: 'boolean | ((row) => boolean), (value, row) => string | null',
          },
          { name: 'set', kind: 'property', type: '(row: T, value: V) => T' },
        ],
      },
      {
        name: 'NuiGridCell',
        selector: 'ng-template[nuiGridCell]',
        members: [{ name: 'nuiGridCell', kind: 'input', type: 'string' }],
      },
      {
        name: 'NuiGridHeader',
        selector: 'ng-template[nuiGridHeader]',
        members: [{ name: 'nuiGridHeader', kind: 'input', type: 'string' }],
      },
      { name: 'NuiGridEmpty', selector: 'ng-template[nuiGridEmpty]', members: [] },
    ],
    examples: [
      {
        id: 'orders',
        load: () => import('../examples/grid/orders').then((m) => m.GridOrdersExample),
        defer: 440,
      },
      {
        id: 'selection',
        load: () => import('../examples/grid/selection').then((m) => m.GridSelectionExample),
        defer: 330,
      },
      {
        id: 'editing',
        load: () => import('../examples/grid/editing').then((m) => m.GridEditingExample),
        defer: 250,
      },
      {
        id: 'big',
        load: () => import('../examples/grid/big').then((m) => m.GridBigExample),
        defer: 440,
      },
      {
        id: 'server',
        load: () => import('../examples/grid/server').then((m) => m.GridServerExample),
        defer: 500,
      },
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
      {
        id: 'actions',
        load: () => import('../examples/menu/actions').then((m) => m.MenuActionsExample),
      },
      {
        id: 'submenu',
        load: () => import('../examples/menu/submenu').then((m) => m.MenuSubmenuExample),
      },
      {
        id: 'checkable',
        load: () => import('../examples/menu/checkable').then((m) => m.MenuCheckableExample),
      },
      {
        id: 'entrances',
        load: () => import('../examples/menu/entrances').then((m) => m.MenuEntrancesExample),
      },
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
      {
        id: 'guests',
        load: () =>
          import('../examples/number-field/guests').then((m) => m.NumberFieldGuestsExample),
      },
      {
        id: 'formats',
        load: () =>
          import('../examples/number-field/formats').then((m) => m.NumberFieldFormatsExample),
      },
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
      {
        id: 'verify',
        load: () => import('../examples/otp/verify').then((m) => m.OtpVerifyExample),
      },
      {
        id: 'letters',
        load: () => import('../examples/otp/letters').then((m) => m.OtpLettersExample),
      },
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
      {
        id: 'filters',
        load: () => import('../examples/popover/filters').then((m) => m.PopoverFiltersExample),
      },
      {
        id: 'profile',
        load: () => import('../examples/popover/profile').then((m) => m.PopoverProfileExample),
      },
      {
        id: 'sides',
        load: () => import('../examples/popover/sides').then((m) => m.PopoverSidesExample),
      },
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
      {
        id: 'pick',
        load: () => import('../examples/rating/pick').then((m) => m.RatingPickExample),
      },
      {
        id: 'average',
        load: () => import('../examples/rating/average').then((m) => m.RatingAverageExample),
      },
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
      {
        id: 'countries',
        load: () => import('../examples/select/countries').then((m) => m.SelectCountriesExample),
      },
      {
        id: 'toppings',
        load: () => import('../examples/select/toppings').then((m) => m.SelectToppingsExample),
      },
      {
        id: 'folders',
        load: () => import('../examples/select/folders').then((m) => m.SelectFoldersExample),
      },
      {
        id: 'zones',
        load: () => import('../examples/select/zones').then((m) => m.SelectZonesExample),
      },
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
    examples: [
      {
        id: 'card',
        load: () => import('../examples/skeleton/card').then((m) => m.SkeletonCardExample),
      },
    ],
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
      {
        id: 'tones',
        load: () => import('../examples/toast/tones').then((m) => m.ToastTonesExample),
      },
      {
        id: 'actions',
        load: () => import('../examples/toast/actions').then((m) => m.ToastActionsExample),
      },
    ],
  },
};
