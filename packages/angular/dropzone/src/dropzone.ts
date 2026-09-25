import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  signal,
  untracked,
} from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { type NuiUpload, NuiUploadQueue, type NuiUploader, nuiDroppedFiles } from './queue';

/** Every text the dropzone shows or announces. */
export interface NuiDropzoneLabels {
  /** The zone's text, unless you put your own inside it. */
  drop: string;
  folder: string;
  /** Names the list of files. */
  files: string;
  remove: (file: string) => string;
  cancel: (file: string) => string;
  retry: (file: string) => string;
  progress: (file: string) => string;
  uploaded: string;
  failed: string;
  canceled: string;
  added: (count: number) => string;
  tooBig: (file: string, max: string) => string;
  tooSmall: (file: string, min: string) => string;
  notAccepted: (file: string) => string;
  tooMany: (max: number) => string;
  bytes: (size: number) => string;
}

const UNITS = ['B', 'KB', 'MB', 'GB'];

function bytes(size: number): string {
  let unit = 0;
  while (size >= 1000 && unit < UNITS.length - 1) {
    size /= 1000;
    unit++;
  }
  return `${size.toLocaleString('en', { maximumFractionDigits: unit && size < 10 ? 1 : 0 })} ${UNITS[unit]}`;
}

export const NUI_DROPZONE_LABELS: NuiDropzoneLabels = {
  drop: 'Drop files here, or choose them',
  folder: 'Choose a folder',
  files: 'Files',
  remove: (file) => `Remove ${file}`,
  cancel: (file) => `Cancel ${file}`,
  retry: (file) => `Upload ${file} again`,
  progress: (file) => `Uploading ${file}`,
  uploaded: 'Uploaded',
  failed: 'Upload failed',
  canceled: 'Canceled',
  added: (count) => (count === 1 ? '1 file added' : `${count} files added`),
  tooBig: (file, max) => `${file} is larger than ${max}.`,
  tooSmall: (file, min) => `${file} is smaller than ${min}.`,
  notAccepted: (file) => `${file} isn’t a file type you can add.`,
  tooMany: (max) => `You can add up to ${max} files.`,
  bytes,
};

/** Whether a file matches an `accept` list, such as `image/*,.pdf`. */
export function nuiAccepts(file: File, accept: string): boolean {
  const patterns = accept
    .split(',')
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
  if (!patterns.length) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return patterns.some((p) =>
    p.startsWith('.')
      ? name.endsWith(p)
      : p.endsWith('/*')
        ? type.startsWith(p.slice(0, -1))
        : type === p,
  );
}

let nextId = 0;

/**
 * A place to drop files, or to click (or press Enter) to choose them, with the list
 * of what's been added below it. With `upload`, each file is sent as it comes, a
 * few at a time, with progress, cancel and retry.
 *
 * ```html
 * <nui-dropzone accept="image/*" maxSize="5000000" [upload]="send" (uploaded)="saved($event)">
 *   Drop photos here, or choose them
 * </nui-dropzone>
 * ```
 *
 * Folders can be dropped too, or chosen with `directory`. As a form control, its
 * value is the files it holds.
 */
@Component({
  selector: 'nui-dropzone',
  host: {
    class: 'nui-dropzone',
    '[attr.data-dragging]': 'dragging() || null',
    '[attr.data-disabled]': 'off() || null',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NuiDropzone), multi: true },
  ],
  template: `
    <div
      class="nui-dropzone-area"
      (dragenter)="onDrag($event)"
      (dragover)="onDrag($event)"
      (dragleave)="onDragLeave($event)"
      (drop)="onDrop($event)"
    >
      <button
        type="button"
        class="nui-dropzone-button"
        [disabled]="off()"
        [attr.aria-describedby]="hint() ? id + '-hint' : null"
        (click)="picker.click()"
        (paste)="onPaste($event)"
      >
        <span class="nui-dropzone-icon" aria-hidden="true"></span>
        <span class="nui-dropzone-label"
          ><ng-content>{{ words().drop }}</ng-content></span
        >
        @if (hint()) {
          <span class="nui-dropzone-hint" [id]="id + '-hint'">{{ hint() }}</span>
        }
      </button>
      @if (directory()) {
        <button
          type="button"
          class="nui-dropzone-folder"
          [disabled]="off()"
          (click)="folder.click()"
        >
          {{ words().folder }}
        </button>
      }
      <input
        #picker
        type="file"
        hidden
        [multiple]="multiple()"
        [accept]="accept()"
        (change)="take(picker.files ?? []); picker.value = ''"
      />
      <input
        #folder
        type="file"
        hidden
        webkitdirectory
        (change)="take(folder.files ?? []); folder.value = ''"
      />
    </div>
    @if (problems().length) {
      <ul class="nui-dropzone-problems">
        @for (problem of problems(); track $index) {
          <li>{{ problem }}</li>
        }
      </ul>
    }
    @if (items().length) {
      <ul class="nui-dropzone-files" [attr.aria-label]="words().files">
        @for (item of items(); track item.id) {
          <li class="nui-dropzone-file" [attr.data-status]="item.status">
            @if (item.preview) {
              <img class="nui-dropzone-preview" [src]="item.preview" alt="" />
            } @else {
              <span
                class="nui-dropzone-preview"
                [attr.data-kind]="kind(item)"
                aria-hidden="true"
              ></span>
            }
            <span class="nui-dropzone-name" [attr.title]="item.path">{{ item.path }}</span>
            <span class="nui-dropzone-meta">
              @switch (item.status) {
                @case ('uploading') {
                  {{ percent(item) }}%
                }
                @case ('done') {
                  {{ words().uploaded }}
                }
                @case ('error') {
                  {{ item.error || words().failed }}
                }
                @case ('canceled') {
                  {{ words().canceled }}
                }
                @default {
                  {{ words().bytes(item.file.size) }}
                }
              }
            </span>
            @if (item.status === 'uploading' || item.status === 'queued') {
              <span
                class="nui-dropzone-progress"
                role="progressbar"
                [attr.aria-label]="words().progress(item.path)"
                aria-valuemin="0"
                aria-valuemax="100"
                [attr.aria-valuenow]="percent(item)"
                [style.--_progress]="item.progress"
              ></span>
            }
            <span class="nui-dropzone-actions">
              @if (item.status === 'error' || item.status === 'canceled') {
                <button
                  type="button"
                  class="nui-dropzone-action"
                  data-action="retry"
                  [attr.aria-label]="words().retry(item.path)"
                  [attr.title]="words().retry(item.path)"
                  (click)="queue.retry(item.id)"
                ></button>
              }
              @if (item.status === 'uploading' || item.status === 'queued') {
                <button
                  type="button"
                  class="nui-dropzone-action"
                  data-action="cancel"
                  [attr.aria-label]="words().cancel(item.path)"
                  [attr.title]="words().cancel(item.path)"
                  (click)="queue.cancel(item.id)"
                ></button>
              } @else {
                <button
                  type="button"
                  class="nui-dropzone-action"
                  data-action="remove"
                  [attr.aria-label]="words().remove(item.path)"
                  [attr.title]="words().remove(item.path)"
                  (click)="remove(item)"
                ></button>
              }
            </span>
          </li>
        }
      </ul>
    }
  `,
})
export class NuiDropzone<R = unknown> implements ControlValueAccessor {
  private readonly announcer = inject(LiveAnnouncer);
  protected readonly id = `nui-dropzone-${nextId++}`;

  /** The kinds of file to take, as for `<input type="file">`: `image/*,.pdf`. */
  readonly accept = input('');
  readonly multiple = input(true, { transform: booleanAttribute });
  /** Offers a button to choose a folder, besides the files dropped. */
  readonly directory = input(false, { transform: booleanAttribute });
  readonly maxFiles = input(Infinity, { transform: numberAttribute });
  /** The largest file to take, in bytes. */
  readonly maxSize = input(Infinity, { transform: numberAttribute });
  /** The smallest file to take, in bytes. */
  readonly minSize = input(0, { transform: numberAttribute });
  /** Checks each file; a message rejects it. */
  readonly validate = input<(file: File) => string | null | undefined>(() => null);
  /** Sends a file; without it, files are only held. */
  readonly upload = input<NuiUploader<R> | null>(null);
  /** Uploads running at once. */
  readonly concurrency = input(3, { transform: numberAttribute });
  /** A line under the zone's text, such as the kinds and sizes it takes. */
  readonly hint = input('');
  readonly disabled = input(false, { transform: booleanAttribute });
  /** Texts to replace, for translation. */
  readonly labels = input<Partial<NuiDropzoneLabels>>({});
  /** The files held, in order: the ones that passed the checks and weren't removed. */
  readonly files = model<readonly File[]>([]);

  /** A file finished uploading, with what `upload` returned. */
  readonly uploaded = output<NuiUpload<R>>();
  /** Files that didn't pass the checks, with why. */
  readonly rejected = output<{ file: File; reason: string }[]>();

  /** The queue behind it, to cancel, retry or read progress from code. */
  readonly queue = new NuiUploadQueue<R>();
  protected readonly items = this.queue.items;
  protected readonly words = computed(() => ({ ...NUI_DROPZONE_LABELS, ...this.labels() }));
  protected readonly dragging = signal(false);
  protected readonly problems = signal<string[]>([]);
  private readonly formDisabled = signal(false);
  protected readonly off = computed(() => this.disabled() || this.formDisabled());
  private onChange: (files: File[]) => void = () => {};
  private onTouched: () => void = () => {};
  private reported = new Set<string>();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.queue.clear());
    effect(() => {
      const upload = this.upload();
      const concurrency = this.concurrency();
      untracked(() => this.queue.configure({ upload, concurrency }));
    });
    // Say when uploads finish or fail, once each.
    effect(() => {
      for (const item of this.items()) {
        const key = `${item.id}:${item.status}`;
        if (this.reported.has(key)) continue;
        if (item.status === 'done') {
          this.reported.add(key);
          untracked(() => {
            this.uploaded.emit(item);
            this.announcer.announce(`${item.path}: ${this.words().uploaded}`, 'polite');
          });
        } else if (item.status === 'error') {
          this.reported.add(key);
          untracked(() =>
            this.announcer.announce(
              `${item.path}: ${item.error || this.words().failed}`,
              'assertive',
            ),
          );
        }
      }
    });
    // Files set from outside replace the list.
    effect(() => {
      const files = this.files();
      untracked(() => {
        const held = this.held();
        if (files.length === held.length && files.every((f, i) => f === held[i])) return;
        this.queue.clear();
        this.queue.add(files);
      });
    });
  }

  writeValue(files: readonly File[] | null): void {
    this.files.set(files ?? []);
  }

  registerOnChange(fn: (files: File[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.formDisabled.set(disabled);
  }

  /** Adds files as if they were dropped, checking each one. */
  take(files: Iterable<File | { file: File; path: string }> | ArrayLike<File>): void {
    if (this.off()) return;
    const words = this.words();
    const rejected: { file: File; reason: string }[] = [];
    const accepted: { file: File; path: string }[] = [];
    let room = this.maxFiles() - this.items().filter((i) => i.status !== 'canceled').length;
    const list = Array.from(files as Iterable<File | { file: File; path: string }>);
    for (const entry of this.multiple() ? list : list.slice(0, 1)) {
      const file = entry instanceof File ? entry : entry.file;
      const path = entry instanceof File ? file.webkitRelativePath || file.name : entry.path;
      const reason = !nuiAccepts(file, this.accept())
        ? words.notAccepted(file.name)
        : file.size > this.maxSize()
          ? words.tooBig(file.name, words.bytes(this.maxSize()))
          : file.size < this.minSize()
            ? words.tooSmall(file.name, words.bytes(this.minSize()))
            : (this.validate()(file) ?? (room <= 0 ? words.tooMany(this.maxFiles()) : null));
      if (reason) {
        rejected.push({ file, reason });
        continue;
      }
      room--;
      accepted.push({ file, path });
    }
    if (!this.multiple() && accepted.length) this.queue.clear();
    if (accepted.length) this.queue.add(accepted);
    this.problems.set([...new Set(rejected.map((r) => r.reason))]);
    if (rejected.length) this.rejected.emit(rejected);
    const said = [accepted.length ? words.added(accepted.length) : '', ...this.problems()].filter(
      Boolean,
    );
    if (said.length)
      this.announcer.announce(said.join(' '), rejected.length ? 'assertive' : 'polite');
    this.sync();
  }

  protected remove(item: NuiUpload<R>): void {
    this.queue.remove(item.id);
    this.sync();
  }

  protected percent(item: NuiUpload<R>): number {
    return Math.round(item.progress * 100);
  }

  protected kind(item: NuiUpload<R>): string {
    const type = item.file.type;
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('video/')) return 'video';
    if (type.startsWith('audio/')) return 'audio';
    if (type === 'application/pdf') return 'pdf';
    if (/zip|compressed|tar/.test(type)) return 'archive';
    if (type.startsWith('text/') || /json|xml|csv/.test(type)) return 'text';
    return 'file';
  }

  protected onDrag(event: DragEvent): void {
    if (this.off() || !event.dataTransfer?.types.includes('Files')) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    this.dragging.set(true);
  }

  protected onDragLeave(event: DragEvent): void {
    const area = event.currentTarget as HTMLElement;
    if (!area.contains(event.relatedTarget as Node | null)) this.dragging.set(false);
  }

  protected async onDrop(event: DragEvent): Promise<void> {
    this.dragging.set(false);
    if (this.off() || !event.dataTransfer?.files.length) return;
    event.preventDefault();
    this.take(await nuiDroppedFiles(event.dataTransfer));
  }

  protected onPaste(event: ClipboardEvent): void {
    const files = event.clipboardData?.files;
    if (files?.length) {
      event.preventDefault();
      this.take(files);
    }
  }

  /** The files in the list, apart from canceled ones. */
  private held(): File[] {
    return this.queue
      .items()
      .filter((i) => i.status !== 'canceled')
      .map((i) => i.file);
  }

  private sync(): void {
    const files = this.held();
    this.files.set(files);
    this.onChange(files);
    this.onTouched();
  }
}
