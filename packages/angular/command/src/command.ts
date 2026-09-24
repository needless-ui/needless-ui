import { _IdGenerator } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChild,
  DestroyRef,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  model,
  output,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { nuiIsApple, nuiMatchesShortcut, nuiShortcutKeys } from '@needless-ui/angular';
import { NuiDialog } from '@needless-ui/angular/dialog';
import {
  type NuiOption,
  NuiOptionEngine,
  NuiOptionList,
  type NuiOptionRow,
  NuiOptionTemplate,
  NuiOptionText,
} from '@needless-ui/angular/select';

/** Something the palette can run, or a page of more commands. */
export interface NuiCommand {
  /** For your own use, such as telling commands apart in `(run)`. */
  id?: string;
  label: string;
  /** Secondary text under the label. */
  description?: string;
  /** Commands with the same group are listed under that heading, in order. */
  group?: string;
  /** More words the search matches, such as synonyms. */
  keywords?: readonly string[];
  /** Keys shown with the command, such as `mod+shift+p` (`mod` is ⌘ or Ctrl). */
  shortcut?: string;
  disabled?: boolean;
  /** Commands one level down: choosing this one opens them as a page. */
  children?: readonly NuiCommand[];
  /** Runs when the command is chosen, once the palette has closed. */
  run?: () => void;
}

const toOption = (command: NuiCommand): NuiOption<NuiCommand> => ({
  value: command,
  label: command.label,
  description: command.description,
  group: command.group,
  keywords: command.keywords,
  disabled: command.disabled,
  children: command.children?.map(toOption),
});

/** Whether typing there makes text, so a shortcut without Ctrl, Alt or ⌘ is just a letter. */
const isEditable = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable || /^(?:INPUT|TEXTAREA|SELECT)$/.test(target.tagName));

/**
 * A command palette: a search field over every command in the app, in a modal
 * dialog that ⌘K (Ctrl+K elsewhere) opens from anywhere.
 *
 * ```html
 * <nui-command-palette [commands]="commands" (run)="log($event)" />
 * ```
 *
 * Search is fuzzy, reaches into pages (a command with `children`), and marks the
 * letters it matched. Commands show their shortcuts; with `bindShortcuts` the
 * palette also runs them when their keys are pressed anywhere on the page.
 */
@Component({
  selector: 'nui-command-palette',
  imports: [NuiDialog, NuiOptionList, NuiOptionTemplate, NuiOptionText],
  template: `
    <dialog
      nuiDialog
      class="nui-command"
      [(open)]="open"
      [attr.aria-label]="label()"
      (closed)="onClosed()"
    >
      @if (open()) {
        <div class="nui-command-field">
          @if (pages().length) {
            <button
              type="button"
              class="nui-command-back"
              [attr.aria-label]="backLabel()"
              (mousedown)="$event.preventDefault()"
              (click)="back()"
            ></button>
            <span class="nui-command-page">{{ page()!.label }}</span>
          }
          <input
            #input
            class="nui-command-input"
            type="text"
            role="combobox"
            autofocus
            autocomplete="off"
            spellcheck="false"
            aria-autocomplete="list"
            aria-expanded="true"
            [attr.aria-label]="page()?.label ?? label()"
            [attr.aria-controls]="listId"
            [attr.aria-activedescendant]="activeId()"
            [placeholder]="placeholder()"
            [value]="query()"
            (input)="onInput($event)"
            (keydown)="onKeydown($event)"
          />
        </div>
        <nui-option-list
          [engine]="engine"
          [listId]="listId"
          [label]="page()?.label ?? label()"
          [virtual]="virtual()"
          [template]="template()"
          (choose)="choose($event)"
        />
        @if (loading()) {
          <div class="nui-select-loading" role="status">{{ loadingLabel() }}</div>
        } @else if (!engine.size()) {
          <div class="nui-select-empty" role="status">{{ emptyLabel() }}</div>
        }
        @if (hints()) {
          <div class="nui-command-hints" aria-hidden="true">
            <span><kbd>↑</kbd><kbd>↓</kbd> {{ moveLabel() }}</span>
            <span><kbd>↵</kbd> {{ chooseLabel() }}</span>
            <span><kbd>Esc</kbd> {{ pages().length ? backLabel() : closeLabel() }}</span>
          </div>
        }
      }
    </dialog>

    <ng-template nuiOptionTemplate let-option let-row="row">
      <span [nuiOptionText]="row"></span>
      @if (option.value.shortcut; as shortcut) {
        <span class="nui-command-shortcut">
          @for (key of keys(shortcut); track $index) {
            <kbd>{{ key }}</kbd>
          }
        </span>
      }
      @if (option.value.children?.length) {
        <span class="nui-command-more" aria-hidden="true"></span>
      }
    </ng-template>
  `,
})
export class NuiCommandPalette {
  readonly commands = input.required<readonly NuiCommand[]>();
  /** Whether the palette is open. Bind with `[(open)]`. */
  readonly open = model(false);
  /** Accessible name of the dialog and its search field. */
  readonly label = input('Command palette');
  readonly placeholder = input('Type a command or search…');
  /** Opens and closes the palette from anywhere on the page. `null` turns it off. */
  readonly hotkey = input<string | null>('mod+k');
  /** Runs commands when their `shortcut` is pressed, palette open or not. */
  readonly bindShortcuts = input(false, { transform: booleanAttribute });
  /** Whether ↓ on the last command goes around to the first, and ↑ back. */
  readonly loop = input(true, { transform: booleanAttribute });
  /** Filters as you type. Turn off when the commands come from a server search. */
  readonly filtering = input(true, { transform: booleanAttribute });
  readonly loading = input(false, { transform: booleanAttribute });
  /** Renders only the rows in view: always, never, or above 200 rows. */
  readonly virtual = input<boolean | 'auto'>('auto');
  /** Shows the keys to use at the bottom. */
  readonly hints = input(true, { transform: booleanAttribute });
  /** Emits each command that runs. */
  readonly run = output<NuiCommand>();
  /** Emits the text as it's typed, for searching on a server. */
  readonly queryChange = output<string>();

  readonly emptyLabel = input('No results');
  readonly loadingLabel = input('Loading…');
  readonly backLabel = input('Back');
  readonly closeLabel = input('Close');
  readonly moveLabel = input('Move');
  readonly chooseLabel = input('Choose');

  /** The pages opened so far, from the top. */
  protected readonly pages = signal<readonly NuiCommand[]>([]);
  protected readonly page = computed(() => this.pages().at(-1));
  protected readonly query = signal('');
  protected readonly listId = inject(_IdGenerator).getId('nui-command-list-');
  protected readonly engine = new NuiOptionEngine<NuiCommand>({
    options: () => (this.page()?.children ?? this.commands()).map(toOption),
    filtering: () => this.filtering(),
  });

  private readonly custom = contentChild(NuiOptionTemplate<NuiCommand>);
  private readonly own = viewChild.required(NuiOptionTemplate<NuiCommand>);
  /** A template of your own for the rows, or the one with shortcuts. */
  protected readonly template = computed(() => this.custom() ?? this.own());

  private readonly dialog = viewChild.required(NuiDialog);
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');
  private readonly apple = isPlatformBrowser(inject(PLATFORM_ID)) && nuiIsApple();

  protected readonly activeId = computed(() => {
    const active = this.engine.active();
    return active >= 0 ? `${this.listId}-${active}` : null;
  });

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    const document = inject(DOCUMENT);
    const onKeydown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing) return;
      const hotkey = this.hotkey();
      if (hotkey && nuiMatchesShortcut(event, hotkey, this.apple)) {
        event.preventDefault();
        this.toggle();
        return;
      }
      if (!this.bindShortcuts()) return;
      if (isEditable(event.target) && !event.ctrlKey && !event.metaKey && !event.altKey) return;
      const command = this.find(
        this.commands(),
        (c) => !!c.shortcut && nuiMatchesShortcut(event, c.shortcut, this.apple),
      );
      if (!command || command.disabled || command.children?.length) return;
      event.preventDefault();
      this.execute(command);
    };
    document.addEventListener('keydown', onKeydown);
    inject(DestroyRef).onDestroy(() => document.removeEventListener('keydown', onKeydown));
  }

  show(): void {
    this.open.set(true);
  }

  hide(): void {
    this.open.set(false);
  }

  toggle(): void {
    this.open.update((open) => !open);
  }

  /** Back to the page before, or to the top. */
  back(): void {
    this.pages.update((pages) => pages.slice(0, -1));
    this.setQuery('');
    // The back button goes away at the top: focus stays in the search field.
    this.input()?.nativeElement.focus();
  }

  /** The key names of a shortcut, as this platform prints them. */
  protected keys(shortcut: string): string[] {
    return nuiShortcutKeys(shortcut, this.apple);
  }

  protected onInput(event: Event): void {
    this.setQuery((event.target as HTMLInputElement).value);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.isComposing) return;
    const engine = this.engine;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        engine.move(event.key === 'ArrowDown' ? 1 : -1, this.loop());
        break;
      case 'PageDown':
      case 'PageUp':
        engine.move(event.key === 'PageDown' ? 10 : -10);
        break;
      case 'Enter': {
        const row = engine.activeRow();
        if (row) this.choose(row);
        break;
      }
      case 'Escape':
        // On a page, Escape goes back; at the top the dialog closes itself.
        if (!this.pages().length) return;
        this.back();
        break;
      case 'Backspace':
        if ((event.target as HTMLInputElement).value || !this.pages().length) return;
        this.back();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  protected choose(row: NuiOptionRow<NuiCommand>): void {
    const command = row.option?.value;
    if (!command || command.disabled) return;
    if (command.children?.length) {
      // A page found by searching brings the pages above it along.
      const inside = this.page()?.children ?? this.commands();
      const parents = this.parents(inside, command) ?? [];
      this.pages.update((pages) => [...pages, ...parents, command]);
      this.setQuery('');
      return;
    }
    this.execute(command);
  }

  protected onClosed(): void {
    this.pages.set([]);
    this.setQuery('');
  }

  private execute(command: NuiCommand): void {
    // Closed first, so focus is back where it was before the command moves it.
    this.dialog().close();
    command.run?.();
    this.run.emit(command);
  }

  private setQuery(query: string): void {
    if (this.query() === query) return;
    this.query.set(query);
    this.engine.query.set(query);
    this.queryChange.emit(query);
  }

  private find(
    commands: readonly NuiCommand[],
    matches: (command: NuiCommand) => boolean,
  ): NuiCommand | undefined {
    for (const command of commands) {
      if (matches(command)) return command;
      const inside = command.children && this.find(command.children, matches);
      if (inside) return inside;
    }
    return undefined;
  }

  /** The commands between a list and one of its descendants, or null when it isn't there. */
  private parents(commands: readonly NuiCommand[], target: NuiCommand): NuiCommand[] | null {
    for (const command of commands) {
      if (command === target) return [];
      const below = command.children && this.parents(command.children, target);
      if (below) return [command, ...below];
    }
    return null;
  }
}
