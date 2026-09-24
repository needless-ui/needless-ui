import type { Type } from '@angular/core';
import { ButtonLinksExample } from '../examples/button/links';
import { ButtonSizesExample } from '../examples/button/sizes';
import { ButtonTonesExample } from '../examples/button/tones';
import { ButtonVariantsExample } from '../examples/button/variants';
import { DialogConfirmExample } from '../examples/dialog/confirm';
import { DialogDismissibleExample } from '../examples/dialog/dismissible';
import { DialogFormExample } from '../examples/dialog/form';
import { MenuActionsExample } from '../examples/menu/actions';
import { MenuCheckableExample } from '../examples/menu/checkable';
import { MenuSubmenuExample } from '../examples/menu/submenu';
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
    ],
  },
};
