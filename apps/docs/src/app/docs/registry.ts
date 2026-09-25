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
  calendar: {
    id: 'calendar',
    importFile: 'snippets/import-calendar.ts',
    api: [
      {
        name: 'NuiCalendar',
        selector: 'nui-calendar',
        members: [
          {
            name: 'selection',
            kind: 'input',
            type: "'single' | 'range' | 'multiple'",
            default: "'single'",
          },
          { name: 'value', kind: 'model', type: 'NuiDate | null', default: 'null' },
          { name: 'values', kind: 'model', type: 'NuiDate[]', default: '[]' },
          { name: 'range', kind: 'model', type: 'NuiDateRange | null', default: 'null' },
          { name: 'month', kind: 'model', type: 'NuiMonth | null', default: 'null' },
          { name: 'view', kind: 'model', type: "'day' | 'month' | 'year'", default: "'day'" },
          { name: 'min, max', kind: 'input', type: 'NuiDate | null' },
          { name: 'unavailable', kind: 'input', type: '(date: NuiDate) => boolean' },
          { name: 'months', kind: 'input', type: 'number', default: '1' },
          { name: 'weekNumbers', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'firstDay', kind: 'input', type: '1 … 7' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiCalendarLabels>' },
          ...customization('corners', 'radius', 'density'),
          { name: 'picked', kind: 'output', type: 'NuiDate | NuiDateRange' },
          { name: 'focusDate', kind: 'method', type: '(date?: NuiDate) => void' },
        ],
      },
      {
        name: 'NuiDateRange',
        members: [{ name: 'start, end', kind: 'property', type: 'NuiDate' }],
      },
    ],
    examples: [
      {
        id: 'delivery',
        load: () => import('../examples/calendar/delivery').then((m) => m.CalendarDeliveryExample),
        defer: 393,
      },
      {
        id: 'stay',
        load: () => import('../examples/calendar/stay').then((m) => m.CalendarStayExample),
        defer: 393,
      },
      {
        id: 'days-off',
        load: () => import('../examples/calendar/days-off').then((m) => m.CalendarDaysOffExample),
        defer: 393,
      },
    ],
  },
  chat: {
    id: 'chat',
    importFile: 'snippets/import-chat.ts',
    api: [
      {
        name: 'NuiChat',
        selector: 'nui-chat',
        members: [
          { name: 'session', kind: 'input', type: 'NuiChatSession' },
          { name: 'assistant', kind: 'input', type: 'string', default: "'Assistant'" },
          { name: 'headingLevel', kind: 'input', type: 'number', default: '3' },
          {
            name: 'announce',
            kind: 'input',
            type: "'reply' | 'notice' | 'off'",
            default: "'reply'",
          },
          { name: 'images', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'value', kind: 'model', type: 'string', default: "''" },
          { name: 'placeholder', kind: 'input', type: 'string' },
          { name: 'suggestions', kind: 'input', type: 'string[]', default: '[]' },
          { name: 'sendOn', kind: 'input', type: "'enter' | 'mod+enter'", default: "'enter'" },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'attach', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'accept', kind: 'input', type: 'string', default: "''" },
          { name: 'maxFiles', kind: 'input', type: 'number', default: '10' },
          { name: 'maxSize', kind: 'input', type: 'number', default: '20_000_000' },
          { name: 'labels', kind: 'input', type: 'NuiChatLabelsInput' },
          { name: 'rated', kind: 'output', type: '{ message, rating }' },
          { name: 'focus', kind: 'method', type: '() => void' },
          { name: 'scrollToEnd', kind: 'method', type: '(behavior?) => void' },
        ],
      },
      {
        name: 'NuiChatSession',
        members: [
          { name: 'respond', kind: 'property', type: '(request) => NuiChatReply' },
          { name: 'messages', kind: 'property', type: 'Signal<NuiChatMessage[]>' },
          { name: 'all', kind: 'property', type: 'Signal<NuiChatMessage[]>' },
          { name: 'busy', kind: 'property', type: 'Signal<boolean>' },
          { name: 'send', kind: 'method', type: '(text, files?) => Promise<void>' },
          { name: 'stop', kind: 'method', type: '() => void' },
          { name: 'retry', kind: 'method', type: '(message?) => Promise<void>' },
          { name: 'edit', kind: 'method', type: '(message, text) => Promise<void>' },
          { name: 'versions', kind: 'method', type: '(message) => NuiChatMessage[]' },
          { name: 'show', kind: 'method', type: '(message) => void' },
          { name: 'rate', kind: 'method', type: "(message, 'up' | 'down' | null) => void" },
          { name: 'remove, load, clear', kind: 'method', type: '(…) => void' },
        ],
      },
      {
        name: 'NuiChatMessage',
        members: [
          { name: 'id, parent', kind: 'property', type: 'string, string | null' },
          { name: 'role', kind: 'property', type: "'user' | 'assistant'" },
          { name: 'text', kind: 'property', type: 'string' },
          {
            name: 'status',
            kind: 'property',
            type: "'pending' | 'streaming' | 'done' | 'stopped' | 'error'",
          },
          { name: 'reasoning', kind: 'property', type: 'string' },
          { name: 'tools', kind: 'property', type: 'NuiChatTool[]' },
          { name: 'sources', kind: 'property', type: '{ url, title? }[]' },
          { name: 'attachments', kind: 'property', type: 'NuiChatAttachment[]' },
          { name: 'rating', kind: 'property', type: "'up' | 'down' | null" },
          { name: 'data', kind: 'property', type: 'unknown' },
        ],
      },
      {
        name: 'NuiChatToolTemplate',
        selector: 'ng-template[nuiChatTool]',
        members: [{ name: 'nuiChatTool', kind: 'input', type: 'string' }],
      },
      { name: 'NuiChatThread', selector: 'nui-chat-thread', members: [] },
      { name: 'NuiChatComposer', selector: 'nui-chat-composer', members: [] },
      {
        name: 'NuiServerEvent',
        members: [
          { name: 'event', kind: 'property', type: 'string', default: "'message'" },
          { name: 'data', kind: 'property', type: 'string' },
          { name: 'id', kind: 'property', type: 'string' },
        ],
      },
      { name: 'NuiChatError', members: [] },
    ],
    examples: [
      {
        id: 'assistant',
        load: () => import('../examples/chat/assistant').then((m) => m.ChatAssistantExample),
        defer: 576,
      },
      {
        id: 'tools',
        load: () => import('../examples/chat/tools').then((m) => m.ChatToolsExample),
        defer: 608,
      },
      {
        id: 'server',
        load: () => import('../examples/chat/server').then((m) => m.ChatServerExample),
        defer: 544,
      },
    ],
  },
  'date-picker': {
    id: 'date-picker',
    importFile: 'snippets/import-date-picker.ts',
    api: [
      {
        name: 'NuiDateField',
        selector: 'nui-date-field',
        members: [
          { name: 'value', kind: 'model', type: 'NuiDate | NuiDateTime | null', default: 'null' },
          {
            name: 'granularity',
            kind: 'input',
            type: "'day' | 'hour' | 'minute' | 'second'",
            default: "'day'",
          },
          { name: 'min, max', kind: 'input', type: 'string | null' },
          { name: 'placeholder', kind: 'input', type: 'string | null', default: 'now' },
          { name: 'hourCycle', kind: 'input', type: '12 | 24' },
          { name: 'minuteStep', kind: 'input', type: 'number', default: '1' },
          { name: 'disabled, readonly', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiDateFieldLabels>' },
          { name: 'invalid', kind: 'property', type: 'Signal<boolean>' },
          { name: 'focus', kind: 'method', type: '() => void' },
        ],
      },
      {
        name: 'NuiTimeField',
        selector: 'nui-time-field',
        members: [
          {
            name: 'granularity',
            kind: 'input',
            type: "'hour' | 'minute' | 'second'",
            default: "'minute'",
          },
        ],
      },
      {
        name: 'NuiDatePicker',
        selector: 'nui-date-picker',
        members: [
          { name: 'unavailable', kind: 'input', type: '(date: NuiDate) => boolean' },
          { name: 'firstDay, weekNumbers', kind: 'input', type: '1 … 7, boolean' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiDatePickerLabels>' },
          ...customization('corners', 'radius', 'density'),
          { name: 'show', kind: 'method', type: '() => void' },
        ],
      },
      {
        name: 'NuiDateRangePicker',
        selector: 'nui-date-range-picker',
        members: [
          { name: 'value', kind: 'model', type: 'NuiDateRange | null', default: 'null' },
          { name: 'presets', kind: 'input', type: 'NuiDateRangePreset[]', default: '[]' },
          { name: 'months', kind: 'input', type: 'number', default: '2' },
        ],
      },
      {
        name: 'NuiDateRangePreset',
        members: [
          { name: 'label', kind: 'property', type: 'string' },
          { name: 'range', kind: 'property', type: 'NuiDateRange | (() => NuiDateRange)' },
        ],
      },
    ],
    examples: [
      {
        id: 'fields',
        load: () => import('../examples/date-picker/fields').then((m) => m.DatePickerFieldsExample),
      },
      {
        id: 'pickers',
        load: () =>
          import('../examples/date-picker/pickers').then((m) => m.DatePickerPickersExample),
      },
      {
        id: 'range',
        load: () => import('../examples/date-picker/range').then((m) => m.DatePickerRangeExample),
      },
    ],
  },
  markdown: {
    id: 'markdown',
    importFile: 'snippets/import-markdown.ts',
    api: [
      {
        name: 'NuiMarkdown',
        selector: 'nui-markdown',
        members: [
          { name: 'text', kind: 'input', type: 'string', default: "''" },
          { name: 'streaming', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'headingLevel', kind: 'input', type: 'number', default: '3' },
          { name: 'images', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiMarkdownLabels>' },
          { name: 'codeTemplate', kind: 'input', type: 'TemplateRef | null', default: 'null' },
        ],
      },
      {
        name: 'NuiMarkdownCode',
        selector: 'ng-template[nuiMarkdownCode]',
        members: [],
      },
      {
        name: 'nuiParseMarkdown',
        members: [
          {
            name: 'nuiParseMarkdown',
            kind: 'method',
            type: '(text, { streaming? }) => NuiMarkdownBlock[]',
          },
          { name: 'nuiMarkdownToText', kind: 'method', type: '(text) => string' },
          { name: 'nuiSafeUrl', kind: 'method', type: '(url) => boolean' },
        ],
      },
    ],
    examples: [
      {
        id: 'document',
        load: () => import('../examples/markdown/document').then((m) => m.MarkdownDocumentExample),
        defer: 725,
      },
      {
        id: 'streaming',
        load: () =>
          import('../examples/markdown/streaming').then((m) => m.MarkdownStreamingExample),
        defer: 688,
      },
      {
        id: 'highlight',
        load: () =>
          import('../examples/markdown/highlight').then((m) => m.MarkdownHighlightExample),
        defer: 264,
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
  scheduler: {
    id: 'scheduler',
    importFile: 'snippets/import-scheduler.ts',
    api: [
      {
        name: 'NuiScheduler',
        selector: 'nui-scheduler',
        members: [
          { name: 'events', kind: 'input', type: 'NuiSchedulerEvent<T>[]', default: '[]' },
          {
            name: 'view',
            kind: 'model',
            type: "'month' | 'week' | 'day' | 'agenda'",
            default: "'week'",
          },
          { name: 'views', kind: 'input', type: 'NuiSchedulerView[]', default: 'all four' },
          { name: 'date', kind: 'model', type: 'NuiDate', default: 'today' },
          { name: 'slotMinutes', kind: 'input', type: 'number', default: '30' },
          { name: 'scrollHour', kind: 'input', type: 'number', default: '8' },
          { name: 'agendaDays', kind: 'input', type: 'number', default: '30' },
          { name: 'editable', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'selectable', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'firstDay', kind: 'input', type: '1 … 7' },
          { name: 'headingLevel', kind: 'input', type: 'number', default: '2' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiSchedulerLabels>' },
          ...customization('corners', 'radius', 'density'),
          { name: 'eventClick', kind: 'output', type: 'NuiSchedulerEvent<T>' },
          { name: 'eventChange', kind: 'output', type: '{ event, start, end }' },
          { name: 'slotSelect', kind: 'output', type: '{ start, end, allDay }' },
          { name: 'rangeChange', kind: 'output', type: '{ start, end }' },
        ],
      },
      {
        name: 'NuiSchedulerEvent',
        members: [
          { name: 'id, title', kind: 'property', type: 'string' },
          { name: 'start, end', kind: 'property', type: 'NuiDateTime | NuiDate' },
          { name: 'allDay', kind: 'property', type: 'boolean' },
          {
            name: 'tone',
            kind: 'property',
            type: "'accent' | 'neutral' | 'success' | 'warning' | 'danger'",
            default: "'accent'",
          },
          { name: 'editable', kind: 'property', type: 'boolean' },
          { name: 'data', kind: 'property', type: 'T' },
        ],
      },
      {
        name: 'NuiSchedulerEventTemplate',
        selector: 'ng-template[nuiSchedulerEvent]',
        members: [],
      },
    ],
    examples: [
      {
        id: 'planner',
        load: () => import('../examples/scheduler/planner').then((m) => m.SchedulerPlannerExample),
        defer: 673,
      },
      {
        id: 'month',
        load: () => import('../examples/scheduler/month').then((m) => m.SchedulerMonthExample),
        defer: 640,
      },
      {
        id: 'rooms',
        load: () => import('../examples/scheduler/rooms').then((m) => m.SchedulerRoomsExample),
        defer: 640,
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
  splitter: {
    id: 'splitter',
    importFile: 'snippets/import-splitter.ts',
    api: [
      {
        name: 'NuiSplitter',
        selector: '[nuiSplitter]',
        members: [
          {
            name: 'orientation',
            kind: 'input',
            type: "'horizontal' | 'vertical'",
            default: "'horizontal'",
          },
          { name: 'sizes', kind: 'model', type: 'number[]', default: 'shared evenly' },
          { name: 'storageKey', kind: 'input', type: 'string' },
          { name: 'step', kind: 'input', type: 'number', default: '5' },
          { name: 'move', kind: 'method', type: '(index: number, delta: number) => void' },
        ],
      },
      {
        name: 'NuiSplitterPane',
        selector: '[nuiSplitterPane]',
        members: [
          { name: 'defaultSize', kind: 'input', type: "string | number (e.g. '240px', '30%')" },
          { name: 'min', kind: 'input', type: 'string | number', default: '0' },
          { name: 'max', kind: 'input', type: 'string | number', default: "'100%'" },
          { name: 'collapsible', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'collapsedSize', kind: 'input', type: 'string | number', default: '0' },
          { name: 'label', kind: 'input', type: 'string' },
        ],
      },
      {
        name: 'NuiSplitterHandle',
        selector: '[nuiSplitterHandle]',
        members: [
          { name: 'label', kind: 'input', type: 'string', default: "the pane's label" },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'toggle', kind: 'method', type: '() => void' },
        ],
      },
    ],
    examples: [
      {
        id: 'editor',
        load: () => import('../examples/splitter/editor').then((m) => m.SplitterEditorExample),
      },
      {
        id: 'stacked',
        load: () => import('../examples/splitter/stacked').then((m) => m.SplitterStackedExample),
      },
    ],
  },
  tour: {
    id: 'tour',
    importFile: 'snippets/import-tour.ts',
    api: [
      {
        name: 'NuiTour',
        selector: 'nui-tour',
        members: [
          { name: 'steps', kind: 'input', type: 'NuiTourStep[]', default: '[]' },
          { name: 'open', kind: 'model', type: 'boolean', default: 'false' },
          { name: 'step', kind: 'model', type: 'number', default: '0' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiTourLabels>' },
          { name: 'finished', kind: 'output', type: 'void' },
          { name: 'dismissed', kind: 'output', type: 'number' },
          { name: 'start', kind: 'method', type: '(from?: number) => void' },
          { name: 'end', kind: 'method', type: '(finished: boolean) => void' },
        ],
      },
      {
        name: 'NuiTourStep',
        members: [
          {
            name: 'target',
            kind: 'property',
            type: 'string | Element | (() => Element | null)',
          },
          { name: 'title', kind: 'property', type: 'string' },
          { name: 'content', kind: 'property', type: 'string | TemplateRef' },
          { name: 'side', kind: 'property', type: SIDE, default: "'bottom'" },
          { name: 'align', kind: 'property', type: ALIGN, default: "'center'" },
          { name: 'padding', kind: 'property', type: 'number', default: '8' },
          { name: 'interactive', kind: 'property', type: 'boolean', default: 'false' },
          { name: 'beforeShow', kind: 'property', type: '() => void | Promise<void>' },
        ],
      },
    ],
    examples: [
      {
        id: 'basics',
        load: () => import('../examples/tour/basics').then((m) => m.TourBasicsExample),
      },
      {
        id: 'interactive',
        load: () => import('../examples/tour/interactive').then((m) => m.TourInteractiveExample),
      },
    ],
  },
  dropzone: {
    id: 'dropzone',
    importFile: 'snippets/import-dropzone.ts',
    api: [
      {
        name: 'NuiDropzone',
        selector: 'nui-dropzone',
        members: [
          { name: 'files', kind: 'model', type: 'File[]', default: '[]' },
          { name: 'accept', kind: 'input', type: 'string' },
          { name: 'multiple', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'directory', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'maxFiles', kind: 'input', type: 'number', default: 'Infinity' },
          { name: 'maxSize, minSize', kind: 'input', type: 'number (bytes)' },
          { name: 'validate', kind: 'input', type: '(file: File) => string | null' },
          { name: 'upload', kind: 'input', type: 'NuiUploader<R>' },
          { name: 'concurrency', kind: 'input', type: 'number', default: '3' },
          { name: 'hint', kind: 'input', type: 'string' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiDropzoneLabels>' },
          { name: 'uploaded', kind: 'output', type: 'NuiUpload<R>' },
          { name: 'rejected', kind: 'output', type: '{ file, reason }[]' },
          { name: 'queue', kind: 'property', type: 'NuiUploadQueue<R>' },
          { name: 'take', kind: 'method', type: '(files: Iterable<File>) => void' },
        ],
      },
      {
        name: 'NuiUploader',
        members: [
          {
            name: '(file, context)',
            kind: 'method',
            type: '(file: File, { signal, progress }) => Promise<R>',
          },
        ],
      },
    ],
    examples: [
      {
        id: 'upload',
        load: () => import('../examples/dropzone/upload').then((m) => m.DropzoneUploadExample),
      },
      {
        id: 'attach',
        load: () => import('../examples/dropzone/attach').then((m) => m.DropzoneAttachExample),
      },
    ],
  },
  mask: {
    id: 'mask',
    importFile: 'snippets/import-mask.ts',
    api: [
      {
        name: 'NuiMask',
        selector: 'input[nuiMask]',
        exportAs: 'nuiMask',
        members: [
          { name: 'nuiMask', kind: 'input', type: 'string | ((raw: string) => string)' },
          { name: 'tokens', kind: 'input', type: 'Record<string, NuiMaskToken>' },
          { name: 'unmask', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'value', kind: 'model', type: 'string', default: "''" },
          { name: 'raw', kind: 'property', type: 'Signal<string>' },
          { name: 'complete', kind: 'property', type: 'Signal<boolean>' },
        ],
      },
      {
        name: 'Helpers',
        members: [
          { name: 'nuiMaskFormat, nuiUnmask', kind: 'method', type: '(value, mask) => string' },
          { name: 'nuiCardMask', kind: 'method', type: '(raw: string) => string' },
          { name: 'nuiCardBrand', kind: 'method', type: '(number: string) => NuiCardBrand | null' },
          { name: 'nuiCardValid, nuiLuhn', kind: 'method', type: '(number: string) => boolean' },
          { name: 'nuiIbanMask', kind: 'method', type: '(raw: string) => string' },
          { name: 'nuiIbanValid', kind: 'method', type: '(iban: string) => boolean' },
        ],
      },
    ],
    examples: [
      {
        id: 'formats',
        load: () => import('../examples/mask/formats').then((m) => m.MaskFormatsExample),
      },
      {
        id: 'payment',
        load: () => import('../examples/mask/payment').then((m) => m.MaskPaymentExample),
      },
    ],
  },
  'phone-field': {
    id: 'phone-field',
    importFile: 'snippets/import-phone-field.ts',
    api: [
      {
        name: 'NuiPhoneField',
        selector: 'nui-phone-field',
        members: [
          { name: 'value', kind: 'model', type: 'string (E.164)', default: "''" },
          { name: 'country', kind: 'model', type: 'string', default: "the locale's region" },
          { name: 'countries', kind: 'input', type: 'string[]', default: 'all' },
          { name: 'locale', kind: 'input', type: 'string', default: 'LOCALE_ID' },
          { name: 'label', kind: 'input', type: 'string' },
          { name: 'inputId', kind: 'input', type: 'string' },
          { name: 'placeholder', kind: 'input', type: 'string' },
          { name: 'invalid', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiPhoneFieldLabels>' },
        ],
      },
      {
        name: 'Helpers',
        members: [
          {
            name: 'nuiParsePhone',
            kind: 'method',
            type: '(text, region?) => NuiPhoneNumber | null',
          },
          {
            name: 'nuiFormatPhone',
            kind: 'method',
            type: "(phone, style?: 'international' | 'e164') => string",
          },
          { name: 'nuiPhoneValid', kind: 'method', type: '(phone, region?) => boolean' },
        ],
      },
    ],
    examples: [
      {
        id: 'basic',
        load: () => import('../examples/phone-field/basic').then((m) => m.PhoneFieldBasicExample),
      },
      {
        id: 'countries',
        load: () =>
          import('../examples/phone-field/countries').then((m) => m.PhoneFieldCountriesExample),
      },
    ],
  },
  'color-picker': {
    id: 'color-picker',
    importFile: 'snippets/import-color-picker.ts',
    api: [
      {
        name: 'NuiColorPicker',
        selector: 'nui-color-picker',
        members: [
          { name: 'value', kind: 'model', type: 'string', default: "''" },
          {
            name: 'format',
            kind: 'model',
            type: "'hex' | 'rgb' | 'hsl' | 'oklch' | 'p3'",
            default: "'hex'",
          },
          {
            name: 'formats',
            kind: 'input',
            type: 'NuiColorFormat[]',
            default: 'hex, rgb, hsl, oklch',
          },
          { name: 'gamut', kind: 'input', type: "'srgb' | 'p3'", default: "'srgb'" },
          { name: 'alpha', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'swatches', kind: 'input', type: 'NuiColorSwatch[]', default: '[]' },
          { name: 'contrastWith', kind: 'input', type: 'string' },
          { name: 'eyeDropper', kind: 'input', type: 'boolean', default: 'true' },
          { name: 'disabled', kind: 'input', type: 'boolean', default: 'false' },
          { name: 'labels', kind: 'input', type: 'Partial<NuiColorPickerLabels>' },
          { name: 'color', kind: 'property', type: 'Signal<NuiColor>' },
        ],
      },
      {
        name: 'Helpers',
        members: [
          { name: 'nuiParseColor', kind: 'method', type: '(text: string) => NuiColor | null' },
          { name: 'nuiFormatColor', kind: 'method', type: '(color, format?) => string' },
          {
            name: 'nuiToGamut',
            kind: 'method',
            type: "(color, gamut?: 'srgb' | 'p3') => NuiColor",
          },
          { name: 'nuiContrast', kind: 'method', type: '(color, background) => number' },
        ],
      },
    ],
    examples: [
      {
        id: 'brand',
        load: () => import('../examples/color-picker/brand').then((m) => m.ColorPickerBrandExample),
      },
      {
        id: 'wide',
        load: () => import('../examples/color-picker/wide').then((m) => m.ColorPickerWideExample),
        defer: 402,
      },
      {
        id: 'popover',
        load: () =>
          import('../examples/color-picker/popover').then((m) => m.ColorPickerPopoverExample),
        defer: 133,
      },
    ],
  },
};
