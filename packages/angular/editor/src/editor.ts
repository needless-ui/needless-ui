import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  input,
  model,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { nuiFollow } from '@needless-ui/angular';
import {
  nuiEditorFromHtml,
  nuiEditorFromMarkdown,
  nuiEditorFromText,
  nuiEditorSafeUrl,
  nuiEditorToHtml,
  nuiEditorToMarkdown,
} from './convert';
import {
  blockText,
  caret,
  clampPoint,
  collapsed,
  deleteRange,
  hasMark,
  indent,
  insertBlocks,
  insertRule,
  insertText,
  isBlockType,
  isEmpty,
  joinBackward,
  joinForward,
  linkRange,
  mapMarks,
  marksAt,
  nuiEditorBlock,
  type NuiEditorBlockType,
  type NuiEditorChange,
  type NuiEditorDoc,
  nuiEditorEmpty,
  type NuiEditorMark,
  type NuiEditorMarks,
  type NuiEditorPoint,
  type NuiEditorSelection,
  ordered,
  point,
  replaceText,
  setBlockType,
  setLink,
  sliceDoc,
  splitBlock,
  toggleMark,
} from './model';
import { NuiEditorView } from './view';

/** A toolbar button, or `|` between groups of them. */
export type NuiEditorTool =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'code'
  | 'link'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bullet'
  | 'ordered'
  | 'quote'
  | 'codeblock'
  | 'rule'
  | 'clear'
  | 'undo'
  | 'redo'
  | '|';

/** Every text the editor says. */
export interface NuiEditorLabels {
  toolbar: string;
  bold: string;
  italic: string;
  underline: string;
  strike: string;
  code: string;
  link: string;
  h1: string;
  h2: string;
  h3: string;
  bullet: string;
  ordered: string;
  quote: string;
  codeblock: string;
  rule: string;
  clear: string;
  undo: string;
  redo: string;
  linkAddress: string;
  linkApply: string;
  linkRemove: string;
}

export const NUI_EDITOR_LABELS: NuiEditorLabels = {
  toolbar: 'Formatting',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  code: 'Code',
  link: 'Link',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  bullet: 'Bulleted list',
  ordered: 'Numbered list',
  quote: 'Quote',
  codeblock: 'Code block',
  rule: 'Divider',
  clear: 'Clear formatting',
  undo: 'Undo',
  redo: 'Redo',
  linkAddress: 'Address',
  linkApply: 'Apply',
  linkRemove: 'Remove link',
};

export const NUI_EDITOR_TOOLS: readonly NuiEditorTool[] = [
  'h2',
  'h3',
  '|',
  'bold',
  'italic',
  'underline',
  'strike',
  'code',
  'link',
  '|',
  'bullet',
  'ordered',
  'quote',
  'codeblock',
  '|',
  'undo',
  'redo',
];

/** Shortcuts, as `aria-keyshortcuts` writes them; `Mod` is Meta on Apple devices and Control elsewhere. */
const SHORTCUTS: Partial<Record<NuiEditorTool, string>> = {
  bold: 'Mod+B',
  italic: 'Mod+I',
  underline: 'Mod+U',
  strike: 'Mod+Shift+X',
  code: 'Mod+E',
  link: 'Mod+K',
  h1: 'Mod+Alt+1',
  h2: 'Mod+Alt+2',
  h3: 'Mod+Alt+3',
  ordered: 'Mod+Shift+7',
  bullet: 'Mod+Shift+8',
  quote: 'Mod+Shift+9',
  codeblock: 'Mod+Alt+C',
  undo: 'Mod+Z',
  redo: 'Mod+Shift+Z',
};

const MARKS: readonly NuiEditorMark[] = ['bold', 'italic', 'underline', 'strike', 'code'];

interface State {
  doc: NuiEditorDoc;
  selection: NuiEditorSelection;
}

let nextId = 0;

/**
 * A rich text editor: paragraphs, headings, lists, quotes, code, rules, links
 * and inline formats, with a toolbar, keyboard shortcuts, Markdown shortcuts as
 * you type (`**bold**`, `# `, `- `), clean paste from anywhere, and undo. The
 * value is HTML (or Markdown, with `format="markdown"`) that holds only what the
 * editor makes.
 *
 * ```html
 * <nui-editor label="Comment" placeholder="Write a comment…" [(value)]="html" />
 * ```
 *
 * The editor keeps its own document and draws it, so what's typed, pasted or
 * dropped never reaches the page as it came. Works with Signal Forms
 * (`[formField]`), reactive forms and `ngModel`.
 */
@Component({
  selector: 'nui-editor',
  imports: [Toolbar, ToolbarWidget],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiEditor), multi: true },
  ],
  host: {
    class: 'nui-editor',
    '[attr.data-disabled]': 'isDisabled() || null',
    '[attr.data-readonly]': 'readonly() || null',
  },
  template: `
    @if (!readonly()) {
      <div
        #toolbar
        ngToolbar
        class="nui-editor-toolbar"
        role="toolbar"
        [attr.aria-label]="words().toolbar"
        [attr.aria-controls]="contentId"
        [disabled]="isDisabled()"
      >
        @for (tool of toolList(); track $index) {
          @if (tool === '|') {
            <span class="nui-editor-separator" aria-hidden="true"></span>
          } @else {
            <button
              #button
              ngToolbarWidget
              type="button"
              class="nui-editor-tool"
              [attr.data-tool]="tool"
              [attr.aria-label]="words()[tool]"
              [attr.title]="hint(tool)"
              [attr.aria-keyshortcuts]="keys(tool)"
              [attr.aria-pressed]="pressable(tool) ? active(tool) : null"
              [attr.aria-disabled]="unavailable(tool) || null"
              [attr.aria-haspopup]="tool === 'link' ? 'dialog' : null"
              (mousedown)="$event.preventDefault()"
              (click)="run(tool, button)"
            >
              @if (tool === 'h1' || tool === 'h2' || tool === 'h3') {
                <span aria-hidden="true">H{{ tool[1] }}</span>
              }
            </button>
          }
        }
      </div>
    }
    <div
      #content
      class="nui-editor-content"
      role="textbox"
      aria-multiline="true"
      spellcheck="true"
      [id]="contentId"
      [attr.contenteditable]="editable() ? 'true' : 'false'"
      [attr.tabindex]="editable() ? null : readonly() ? 0 : null"
      [attr.aria-label]="label() || null"
      [attr.aria-labelledby]="labelledBy() || null"
      [attr.aria-describedby]="describedBy() || null"
      [attr.aria-placeholder]="placeholder() || null"
      [attr.aria-readonly]="readonly() || null"
      [attr.aria-disabled]="isDisabled() || null"
      [attr.aria-invalid]="invalid() || null"
      [attr.data-empty]="empty() || null"
      [attr.data-placeholder]="placeholder() || null"
      (beforeinput)="onBeforeInput($event)"
      (input)="onInput($event)"
      (keydown)="onKeydown($event)"
      (paste)="onPaste($event)"
      (copy)="onCopy($event, false)"
      (cut)="onCopy($event, true)"
      (compositionstart)="composing = true"
      (compositionend)="onCompositionEnd()"
      (blur)="onTouched()"
    ></div>
    <!-- The link form renders on first use, so a page of editors ships none. -->
    @if (linkReady()) {
      <div
        #linkBox
        class="nui-popover nui-editor-link"
        popover="auto"
        role="dialog"
        [attr.aria-label]="words().link"
        (toggle)="onLinkToggle($event)"
      >
        <form class="nui-editor-link-form" (submit)="applyLink($event)">
          <label class="nui-editor-link-label" [for]="contentId + '-url'">{{
            words().linkAddress
          }}</label>
          <input
            #url
            class="nui-editor-link-input"
            type="text"
            inputmode="url"
            autocomplete="url"
            spellcheck="false"
            [id]="contentId + '-url'"
            placeholder="https://"
          />
          <div class="nui-editor-link-actions">
            @if (editingLink()) {
              <button type="button" class="nui-editor-link-remove" (click)="removeLink()">
                {{ words().linkRemove }}
              </button>
            }
            <button type="submit" class="nui-editor-link-apply">{{ words().linkApply }}</button>
          </div>
        </form>
      </div>
    }
  `,
})
export class NuiEditor implements ControlValueAccessor {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  protected readonly contentId = `nui-editor-${nextId++}`;

  /** The content, as HTML (or Markdown). Bind with `[(value)]`. */
  readonly value = model('');
  /** How the value is written: `html`, or `markdown` (which has no underline). */
  readonly format = input<'html' | 'markdown'>('html');
  /** The toolbar's buttons, in order; `|` separates groups. */
  readonly tools = input<readonly NuiEditorTool[]>(NUI_EDITOR_TOOLS);
  /** Names the editor, when no label element does. */
  readonly label = input('');
  /** Ids of the elements that name it. */
  readonly labelledBy = input('');
  /** Ids of the elements that describe it, such as a hint. */
  readonly describedBy = input('');
  readonly placeholder = input('');
  /** Shows the content, formatted, without editing it. */
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Marks the content invalid, for assistive technology and styles. */
  readonly invalid = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiEditorLabels>>({});

  private readonly toolbar = viewChild<ElementRef<HTMLElement>>('toolbar');
  private readonly content = viewChild.required<ElementRef<HTMLElement>>('content');
  private readonly linkBox = viewChild<ElementRef<HTMLElement>>('linkBox');
  private readonly url = viewChild<ElementRef<HTMLInputElement>>('url');

  protected readonly words = computed(() => ({ ...NUI_EDITOR_LABELS, ...this.labels() }));
  protected readonly toolList = computed(() => this.tools());
  private readonly formDisabled = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly editable = computed(() => !this.readonly() && !this.isDisabled());

  /** The document. */
  readonly doc = signal<NuiEditorDoc>(nuiEditorEmpty());
  /** Where the caret or selection is in the document. */
  readonly selection = signal<NuiEditorSelection>(caret(point(0, 0)));
  /** Formats the next typed text takes, set by a format turned on with nothing selected. */
  private readonly stored = signal<NuiEditorMarks | null>(null);
  protected readonly empty = computed(() => isEmpty(this.doc()));
  protected readonly editingLink = signal(false);
  protected readonly linkReady = signal(false);

  private view: NuiEditorView | null = null;
  private undoStack: State[] = [];
  private redoStack: State[] = [];
  private readonly history = signal(0);
  private lastEdit = { kind: '', time: 0 };
  protected composing = false;
  /** The value last sent out, so it isn't read back in. */
  private sent: string | null = null;
  private linkTarget: { from: NuiEditorPoint; to: NuiEditorPoint } | null = null;
  private stopFollow: (() => void) | null = null;
  private readonly mac = this.browser && /Mac|iPhone|iPad/.test(navigator.platform);
  private onChange: (value: string) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  constructor() {
    // Draw the document, on the server too, so the page shows it before it runs.
    effect(() => {
      const doc = this.doc();
      // An input method owns the DOM until it's done.
      if (!this.composing) untracked(() => this.ensureView().render(doc));
    });
    effect(() => {
      const value = this.value();
      this.format();
      untracked(() => {
        if (value !== this.sent) this.read(value);
      });
    });
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const onSelection = () => this.syncSelection();
      this.document.addEventListener('selectionchange', onSelection);
      destroyRef.onDestroy(() => {
        this.document.removeEventListener('selectionchange', onSelection);
        this.stopFollow?.();
      });
    });
  }

  private ensureView(): NuiEditorView {
    this.view ??= new NuiEditorView(this.content().nativeElement, this.document);
    return this.view;
  }

  /** Reads a value from outside: the document is replaced, and the history starts over. */
  private read(value: string): void {
    this.sent = value;
    let doc: NuiEditorDoc;
    if (!value.trim()) doc = nuiEditorEmpty();
    else if (this.format() === 'markdown') doc = nuiEditorFromMarkdown(value);
    else doc = nuiEditorFromHtml(value, this.document);
    this.undoStack = [];
    this.redoStack = [];
    this.history.update((n) => n + 1);
    this.doc.set(doc);
    this.selection.set(caret(clampPoint(doc, untracked(this.selection).focus)));
  }

  private write(doc: NuiEditorDoc): string {
    if (isEmpty(doc)) return '';
    return this.format() === 'markdown' ? nuiEditorToMarkdown(doc) : nuiEditorToHtml(doc);
  }

  /** Applies an edit: the document, the selection, the history, and the value sent out. */
  private commit(change: NuiEditorChange, kind = 'edit', render = true): void {
    const before = { doc: this.doc(), selection: this.selection() };
    const now = Date.now();
    // Typing in one go is one step to undo.
    const merge =
      kind === 'type' && this.lastEdit.kind === 'type' && now - this.lastEdit.time < 1000;
    if (!merge) {
      this.undoStack.push(before);
      if (this.undoStack.length > 200) this.undoStack.shift();
    }
    this.redoStack = [];
    this.lastEdit = { kind, time: now };
    this.history.update((n) => n + 1);
    this.set(change, render);
  }

  private set(change: NuiEditorChange, render = true): void {
    this.doc.set(change.doc);
    this.selection.set(change.selection);
    if (render && this.browser) {
      this.ensureView().render(change.doc);
      if (this.document.activeElement === this.content().nativeElement) {
        this.view!.writeSelection(change.selection);
      }
    }
    const value = this.write(change.doc);
    if (value !== this.sent) {
      this.sent = value;
      this.value.set(value);
      this.onChange(value);
    }
  }

  /** Follows the DOM selection while it's in the editor. */
  private syncSelection(): void {
    if (!this.view || this.composing) return;
    const selection = this.view.readSelection();
    if (!selection) return;
    const current = this.selection();
    if (
      current.anchor.block === selection.anchor.block &&
      current.anchor.offset === selection.anchor.offset &&
      current.focus.block === selection.focus.block &&
      current.focus.offset === selection.focus.offset
    )
      return;
    this.selection.set(selection);
    this.stored.set(null);
    this.lastEdit = { kind: '', time: 0 };
  }

  private current(): NuiEditorSelection {
    return (this.view && this.view.readSelection()) ?? this.selection();
  }

  /** The formats typed text takes at the selection. */
  private typingMarks(selection: NuiEditorSelection): NuiEditorMarks {
    const [from] = ordered(selection);
    return this.stored() ?? marksAt(this.doc()[from.block], from.offset);
  }

  // Toolbar state.

  protected pressable(tool: NuiEditorTool): boolean {
    return !['link', 'rule', 'clear', 'undo', 'redo', '|'].includes(tool);
  }

  protected active(tool: NuiEditorTool): boolean {
    const doc = this.doc();
    const selection = this.selection();
    if ((MARKS as readonly string[]).includes(tool)) {
      const mark = tool as NuiEditorMark;
      if (collapsed(selection)) return !!this.typingMarks(selection)[mark];
      const [from, to] = ordered(selection);
      return hasMark(doc, from, to, mark);
    }
    switch (tool) {
      case 'h1':
      case 'h2':
      case 'h3':
        return isBlockType(doc, selection, 'heading', Number(tool[1]));
      case 'bullet':
      case 'ordered':
      case 'quote':
        return isBlockType(doc, selection, tool);
      case 'codeblock':
        return isBlockType(doc, selection, 'code');
      default:
        return false;
    }
  }

  protected unavailable(tool: NuiEditorTool): boolean {
    this.history();
    if (tool === 'undo') return !this.undoStack.length;
    if (tool === 'redo') return !this.redoStack.length;
    return false;
  }

  protected keys(tool: NuiEditorTool): string | null {
    const shortcut = SHORTCUTS[tool];
    return shortcut ? shortcut.replace('Mod', this.mac ? 'Meta' : 'Control') : null;
  }

  protected hint(tool: NuiEditorTool): string {
    const shortcut = SHORTCUTS[tool];
    if (!shortcut) return this.words()[tool as Exclude<NuiEditorTool, '|'>];
    const keys = this.mac
      ? shortcut.replace('Mod+', '⌘').replace('Shift+', '⇧').replace('Alt+', '⌥')
      : shortcut.replace('Mod', 'Ctrl');
    return `${this.words()[tool as Exclude<NuiEditorTool, '|'>]} (${keys})`;
  }

  // Commands.

  /** Runs a toolbar command, as its button does. */
  run(tool: NuiEditorTool, button?: HTMLElement): void {
    if (!this.editable() || this.unavailable(tool)) return;
    const selection = this.current();
    const doc = this.doc();
    switch (tool) {
      case 'bold':
      case 'italic':
      case 'underline':
      case 'strike':
      case 'code':
        this.toggle(tool, selection);
        break;
      case 'link':
        this.openLink(button ?? null, selection);
        return;
      case 'h1':
      case 'h2':
      case 'h3': {
        const level = Number(tool[1]) as 1 | 2 | 3;
        const on = isBlockType(doc, selection, 'heading', level);
        this.commit({
          doc: setBlockType(doc, selection, on ? 'paragraph' : 'heading', { level }),
          selection,
        });
        break;
      }
      case 'bullet':
      case 'ordered':
      case 'quote':
      case 'codeblock': {
        const type: NuiEditorBlockType = tool === 'codeblock' ? 'code' : tool;
        const on = isBlockType(doc, selection, type);
        this.commit({ doc: setBlockType(doc, selection, on ? 'paragraph' : type), selection });
        break;
      }
      case 'rule':
        this.commit(insertRule(doc, ordered(selection)[1]));
        break;
      case 'clear': {
        const [from, to] = ordered(selection);
        this.commit({ doc: mapMarks(doc, from, to, () => ({})), selection });
        this.stored.set({});
        break;
      }
      case 'undo':
        this.undo();
        break;
      case 'redo':
        this.redo();
        break;
    }
    this.focus();
  }

  private toggle(mark: NuiEditorMark, selection: NuiEditorSelection): void {
    if (collapsed(selection)) {
      const marks = { ...this.typingMarks(selection) };
      if (marks[mark]) delete marks[mark];
      else marks[mark] = true;
      this.stored.set(marks);
      // What's typed next, in the new format, is its own step to undo.
      this.lastEdit = { kind: '', time: 0 };
      return;
    }
    this.commit({ doc: toggleMark(this.doc(), selection, mark), selection });
  }

  undo(): void {
    const state = this.undoStack.pop();
    if (!state) return;
    this.redoStack.push({ doc: this.doc(), selection: this.selection() });
    this.lastEdit = { kind: '', time: 0 };
    this.history.update((n) => n + 1);
    this.set(state);
  }

  redo(): void {
    const state = this.redoStack.pop();
    if (!state) return;
    this.undoStack.push({ doc: this.doc(), selection: this.selection() });
    this.lastEdit = { kind: '', time: 0 };
    this.history.update((n) => n + 1);
    this.set(state);
  }

  /** Moves focus into the editor, where the selection was. */
  focus(): void {
    const content = this.content().nativeElement;
    content.focus({ preventScroll: true });
    this.view?.writeSelection(this.selection());
  }

  // Input.

  /** The range the browser means to change, as the event says. */
  private targetRange(event: InputEvent): NuiEditorSelection | null {
    const range = event.getTargetRanges?.()[0];
    if (!range || !this.view) return null;
    const anchor = this.view.pointFromDom(range.startContainer, range.startOffset);
    const focus = this.view.pointFromDom(range.endContainer, range.endOffset);
    return anchor && focus ? { anchor, focus } : null;
  }

  protected onBeforeInput(event: InputEvent): void {
    if (!this.editable()) {
      event.preventDefault();
      return;
    }
    // Input methods write into the DOM themselves; the text is read back after.
    if (event.isComposing || event.inputType === 'insertCompositionText') return;
    const selection = this.current();
    const doc = this.doc();
    const type = event.inputType;
    const [from, to] = ordered(selection);
    const handle = (change: NuiEditorChange | null, kind = 'edit') => {
      event.preventDefault();
      if (change) this.commit(change, kind);
    };
    switch (type) {
      case 'insertText':
      case 'insertReplacementText':
      case 'insertFromYank': {
        const text = event.data ?? event.dataTransfer?.getData('text/plain') ?? '';
        const range = type === 'insertText' ? selection : (this.targetRange(event) ?? selection);
        const change = replaceText(doc, range, text, this.typingMarks(range));
        handle(change, type === 'insertText' && text.length === 1 ? 'type' : 'edit');
        this.stored.set(null);
        if (type === 'insertText' && text.length === 1) this.inputRules(text);
        return;
      }
      case 'insertParagraph': {
        const block = doc[from.block];
        if (
          block.type === 'paragraph' &&
          /^(-{3,}|\*{3,}|_{3,})$/.test(blockText(block)) &&
          collapsed(selection)
        ) {
          // "---" and Enter: a rule.
          const cleared = deleteRange(
            doc,
            point(from.block, 0),
            point(from.block, blockText(block).length),
          );
          handle(insertRule(cleared.doc, point(from.block, 0)));
          return;
        }
        handle(splitBlock(doc, selection));
        return;
      }
      case 'insertLineBreak':
        handle(replaceText(doc, selection, '\n', this.typingMarks(selection)));
        return;
      case 'deleteContentBackward':
      case 'deleteContentForward': {
        const backward = type === 'deleteContentBackward';
        if (collapsed(selection)) {
          const block = doc[from.block];
          const length = blockText(block).length;
          if (backward && from.offset === 0) return handle(joinBackward(doc, from));
          if (!backward && from.offset >= length) return handle(joinForward(doc, from));
          const range = this.targetRange(event) ?? this.grapheme(from, backward);
          const [a, b] = ordered(range);
          return handle(deleteRange(doc, a, b), 'delete');
        }
        return handle(deleteRange(doc, from, to));
      }
      case 'deleteWordBackward':
      case 'deleteWordForward':
      case 'deleteSoftLineBackward':
      case 'deleteSoftLineForward':
      case 'deleteHardLineBackward':
      case 'deleteHardLineForward':
      case 'deleteByCut':
      case 'deleteByDrag':
      case 'deleteContent': {
        const range = collapsed(selection) ? (this.targetRange(event) ?? selection) : selection;
        const [a, b] = ordered(range);
        if (a.block === b.block && a.offset === b.offset) {
          if (type.endsWith('Backward') && a.offset === 0) return handle(joinBackward(doc, a));
          if (type.endsWith('Forward')) return handle(joinForward(doc, a));
          return handle(null);
        }
        return handle(deleteRange(doc, a, b));
      }
      case 'insertFromDrop': {
        const target = this.targetRange(event) ?? selection;
        const blocks = this.clipboardBlocks(event.dataTransfer, target);
        return handle(insertBlocks(doc, target, blocks));
      }
      case 'insertFromPaste':
      case 'insertFromPasteAsQuotation': {
        const blocks = this.clipboardBlocks(event.dataTransfer, selection);
        return handle(insertBlocks(doc, selection, blocks));
      }
      case 'historyUndo':
        handle(null);
        this.undo();
        return;
      case 'historyRedo':
        handle(null);
        this.redo();
        return;
      case 'formatBold':
      case 'formatItalic':
      case 'formatUnderline':
      case 'formatStrikeThrough': {
        handle(null);
        const mark = (
          {
            formatBold: 'bold',
            formatItalic: 'italic',
            formatUnderline: 'underline',
            formatStrikeThrough: 'strike',
          } as const
        )[type];
        this.toggle(mark, selection);
        return;
      }
      case 'formatIndent':
      case 'formatOutdent':
        return handle({ doc: indent(doc, selection, type === 'formatIndent' ? 1 : -1), selection });
      case 'insertOrderedList':
      case 'insertUnorderedList': {
        const list = type === 'insertOrderedList' ? 'ordered' : 'bullet';
        const on = isBlockType(doc, selection, list);
        return handle({ doc: setBlockType(doc, selection, on ? 'paragraph' : list), selection });
      }
      case 'insertHorizontalRule':
        return handle(insertRule(doc, to));
      default:
        // Anything else the editor has no format for (alignment, colors, fonts)
        // is refused; what it hasn't heard of is read back from the DOM after.
        if (type.startsWith('format') || type === 'insertLink') handle(null);
    }
  }

  /** One character (as people see it: an emoji is one) before or after a point. */
  private grapheme(at: NuiEditorPoint, backward: boolean): NuiEditorSelection {
    const text = blockText(this.doc()[at.block]);
    let edge = backward ? Math.max(0, at.offset - 1) : Math.min(text.length, at.offset + 1);
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      const segments = [...new Intl.Segmenter().segment(text)];
      for (const { index, segment } of segments) {
        if (backward && index < at.offset && index + segment.length >= at.offset) edge = index;
        if (!backward && index === at.offset) edge = index + segment.length;
      }
    }
    return { anchor: at, focus: point(at.block, edge) };
  }

  /** Text typed that another way wouldn't: Markdown's marks, turned into formats. */
  private inputRules(typed: string): void {
    const selection = this.selection();
    if (!collapsed(selection)) return;
    const at = selection.focus;
    const doc = this.doc();
    const block = doc[at.block];
    const before = blockText(block).slice(0, at.offset);
    // Block shortcuts, at the start of a paragraph: "# ", "- ", "1. ", "> ", "```".
    if (block.type === 'paragraph') {
      let type: NuiEditorBlockType | null = null;
      let level: 1 | 2 | 3 | undefined;
      if (typed === ' ') {
        const marker = before.slice(0, -1);
        if (/^#{1,3}$/.test(marker)) {
          type = 'heading';
          level = marker.length as 1 | 2 | 3;
        } else if (/^[-*+]$/.test(marker)) type = 'bullet';
        else if (/^\d{1,9}[.)]$/.test(marker)) type = 'ordered';
        else if (marker === '>') type = 'quote';
      } else if (typed === '`' && before === '```') type = 'code';
      if (type) {
        const cleared = deleteRange(doc, point(at.block, 0), at);
        const next = setBlockType(cleared.doc, cleared.selection, type, { level });
        this.commit({ doc: next, selection: cleared.selection });
        return;
      }
    }
    if (block.type === 'code' || !'*_`~'.includes(typed)) return;
    // Inline shortcuts, as the closing mark is typed.
    const rules: [RegExp, NuiEditorMark][] = [
      [/(?<!\*)\*\*([^*\s](?:[^*]*[^*\s])?)\*\*$/, 'bold'],
      [/(?<![_\w])__([^_\s](?:[^_]*[^_\s])?)__$/, 'bold'],
      [/(?<!\*)\*([^*\s](?:[^*]*[^*\s])?)\*$/, 'italic'],
      [/(?<![_\w])_([^_\s](?:[^_]*[^_\s])?)_$/, 'italic'],
      [/`([^`]+)`$/, 'code'],
      [/~~([^~\s](?:[^~]*[^~\s])?)~~$/, 'strike'],
    ];
    for (const [pattern, mark] of rules) {
      const match = pattern.exec(before);
      if (!match) continue;
      const inner = match[1];
      const delimiter = (match[0].length - inner.length) / 2;
      const end = at.offset;
      const start = end - inner.length - delimiter * 2;
      // Drop the closing mark, then the opening one, and format what's between.
      let next = deleteRange(doc, point(at.block, end - delimiter), point(at.block, end)).doc;
      next = deleteRange(next, point(at.block, start), point(at.block, start + delimiter)).doc;
      const from = point(at.block, start);
      const to = point(at.block, start + inner.length);
      const formatted = mapMarks(next, from, to, (marks) => ({ ...marks, [mark]: true }));
      this.commit({ doc: formatted, selection: caret(to) });
      // What's typed next doesn't carry the format on.
      const marks = { ...marksAt(formatted[at.block], to.offset) };
      delete marks[mark];
      this.stored.set(marks);
      return;
    }
  }

  protected onInput(event: Event): void {
    if ((event as InputEvent).isComposing || this.composing) {
      this.readBack(false);
      return;
    }
    this.readBack(true);
  }

  protected onCompositionEnd(): void {
    this.composing = false;
    // While composing, the document took the text without being drawn again. If
    // the last of it is already read, draw it now, or the view would go on
    // measuring the block as it was before the word (Android keyboards compose
    // every word).
    if (!this.readBack(true)) this.redraw();
  }

  /** Draws the document again, keeping the caret where it is. */
  private redraw(): void {
    if (!this.view) return;
    const selection = this.view.readSelection() ?? this.selection();
    this.view.render(this.doc());
    this.selection.set(selection);
    if (this.document.activeElement === this.content().nativeElement) {
      this.view.writeSelection(selection);
    }
  }

  /**
   * Reads what the browser typed into a block (input methods, anything unhandled)
   * back into the document. Whether there was anything to read.
   */
  private readBack(render: boolean): boolean {
    if (!this.view) return false;
    const selection = this.view.readSelection();
    if (!selection) return false;
    const index = selection.focus.block;
    const doc = this.doc();
    const block = doc[index];
    if (!block) return false;
    const old = blockText(block);
    const now = this.view.textOf(index);
    if (old === now) return false;
    let start = 0;
    while (start < old.length && start < now.length && old[start] === now[start]) start++;
    let endOld = old.length;
    let endNew = now.length;
    while (endOld > start && endNew > start && old[endOld - 1] === now[endNew - 1]) {
      endOld--;
      endNew--;
    }
    const marks = this.stored() ?? marksAt(block, start);
    let change = deleteRange(doc, point(index, start), point(index, endOld));
    const inserted = now.slice(start, endNew);
    if (inserted) change = insertText(change.doc, point(index, start), inserted, marks);
    this.commit({ doc: change.doc, selection }, 'type', render);
    return true;
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.editable()) return;
    const mod = this.mac ? event.metaKey : event.ctrlKey;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    const selection = this.current();
    const doc = this.doc();
    const list = (type: NuiEditorBlockType) => type === 'bullet' || type === 'ordered';
    if (event.key === 'Tab' && !mod && !event.altKey) {
      // Tab indents list items; elsewhere it leaves the editor, as it should.
      const [from, to] = ordered(selection);
      if (doc.slice(from.block, to.block + 1).some((block) => list(block.type))) {
        event.preventDefault();
        this.commit({ doc: indent(doc, selection, event.shiftKey ? -1 : 1), selection });
      }
      return;
    }
    if (!mod) return;
    let tool: NuiEditorTool | null = null;
    if (!event.shiftKey && !event.altKey) {
      tool =
        (
          {
            b: 'bold',
            i: 'italic',
            u: 'underline',
            e: 'code',
            k: 'link',
            z: 'undo',
            y: 'redo',
          } as const
        )[key as 'b'] ?? null;
    } else if (event.shiftKey && !event.altKey) {
      tool =
        (
          {
            x: 'strike',
            z: 'redo',
            '7': 'ordered',
            '&': 'ordered',
            '8': 'bullet',
            '*': 'bullet',
            '9': 'quote',
            '(': 'quote',
          } as const
        )[(event.code.startsWith('Digit') ? event.code.slice(5) : key) as 'x'] ?? null;
    } else if (event.altKey && !event.shiftKey) {
      const digit = event.code.startsWith('Digit') ? event.code.slice(5) : '';
      if (digit === '1' || digit === '2' || digit === '3') tool = `h${digit}` as NuiEditorTool;
      if (digit === '0') {
        event.preventDefault();
        this.commit({ doc: setBlockType(doc, selection, 'paragraph'), selection });
        return;
      }
      if (event.code === 'KeyC') tool = 'codeblock';
    }
    if (!tool) return;
    event.preventDefault();
    const button = this.toolbar()?.nativeElement.querySelector<HTMLElement>(
      `[data-tool="${tool}"]`,
    );
    this.run(tool, button ?? undefined);
  }

  /** Blocks from the clipboard or a drop: our own HTML, other HTML, Markdown, or text. */
  private clipboardBlocks(data: DataTransfer | null, at: NuiEditorSelection): NuiEditorDoc {
    if (!data) return [];
    const text = data.getData('text/plain');
    const [from] = ordered(at);
    if (this.doc()[from.block]?.type === 'code') {
      return [nuiEditorBlock('paragraph', [{ text, marks: {} }])];
    }
    const html = data.getData('text/html');
    if (html) return nuiEditorFromHtml(html, this.document);
    if (
      /^(#{1,6} |[-*+] |\d{1,9}[.)] |> |```)|\*\*[^*\n]+\*\*|\[[^\]\n]+\]\([^)\s]+\)/m.test(text)
    ) {
      return nuiEditorFromMarkdown(text);
    }
    return nuiEditorFromText(text);
  }

  protected onPaste(event: ClipboardEvent): void {
    if (!this.editable()) return;
    event.preventDefault();
    const selection = this.current();
    const blocks = this.clipboardBlocks(event.clipboardData, selection);
    this.commit(insertBlocks(this.doc(), selection, blocks));
  }

  protected onCopy(event: ClipboardEvent, cut: boolean): void {
    const selection = this.current();
    if (collapsed(selection) || !event.clipboardData) return;
    event.preventDefault();
    const [from, to] = ordered(selection);
    const slice = sliceDoc(this.doc(), from, to);
    event.clipboardData.setData('text/html', nuiEditorToHtml(slice));
    event.clipboardData.setData('text/plain', slice.map(blockText).join('\n'));
    if (cut && this.editable()) this.commit(deleteRange(this.doc(), from, to));
  }

  // Links.

  private openLink(button: HTMLElement | null, selection: NuiEditorSelection): void {
    const box = this.linkBox()?.nativeElement;
    const input = this.url()?.nativeElement;
    if (!box || !input) {
      // Render the form, then open it.
      if (this.linkReady()) return;
      this.linkReady.set(true);
      afterNextRender(() => this.openLink(button, selection), { injector: this.injector });
      return;
    }
    const doc = this.doc();
    const [from, to] = ordered(selection);
    const around = collapsed(selection) ? linkRange(doc, from) : null;
    this.linkTarget = around ? { from: around.from, to: around.to } : { from, to };
    const href =
      around?.href ??
      (hasMark(doc, from, to, 'link')
        ? (doc[from.block].runs.find((run) => run.marks.link)?.marks.link ?? '')
        : '');
    this.editingLink.set(!!href);
    input.value = href;
    box.showPopover();
    this.stopFollow?.();
    const anchor = button ?? this.content().nativeElement;
    this.stopFollow = nuiFollow(anchor, box, { side: 'bottom', align: 'start', offset: 6 });
    input.focus();
    input.select();
  }

  protected applyLink(event: Event): void {
    event.preventDefault();
    const input = this.url()?.nativeElement;
    const target = this.linkTarget;
    if (!input || !target) return;
    const raw = input.value.trim();
    const href = raw
      ? nuiEditorSafeUrl(/^[a-z][\w+.-]*:|^[/#?]/i.test(raw) ? raw : `https://${raw}`)
      : null;
    if (raw && !href) {
      input.setCustomValidity('Unsafe address');
      input.reportValidity();
      input.setCustomValidity('');
      return;
    }
    let doc = this.doc();
    let selection: NuiEditorSelection = { anchor: target.from, focus: target.to };
    if (href && collapsed(selection)) {
      // Nothing selected: the address goes in as its own link.
      const inserted = insertText(doc, target.from, raw, {
        ...this.typingMarks(selection),
        link: href,
      });
      doc = inserted.doc;
      selection = inserted.selection;
    } else {
      doc = setLink(doc, selection, href);
      selection = caret(target.to);
    }
    this.linkTarget = null;
    this.linkBox()?.nativeElement.hidePopover();
    this.commit({ doc, selection });
    this.focus();
  }

  protected removeLink(): void {
    const target = this.linkTarget;
    this.linkTarget = null;
    this.linkBox()?.nativeElement.hidePopover();
    if (target) {
      this.commit({
        doc: setLink(this.doc(), { anchor: target.from, focus: target.to }, null),
        selection: caret(target.to),
      });
    }
    this.focus();
  }

  protected onLinkToggle(event: ToggleEvent): void {
    if (event.newState === 'closed') {
      this.stopFollow?.();
      this.stopFollow = null;
      // Escape, or a click away: back to the text, where it was.
      if (this.linkTarget) {
        this.linkTarget = null;
        this.focus();
      }
    }
  }

  // Forms.

  writeValue(value: unknown): void {
    const text = value == null ? '' : String(value);
    this.read(text);
    this.value.set(text);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }
}
