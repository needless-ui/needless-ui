import { computed, signal, untracked } from '@angular/core';

/** Where an upload stands. Without an `upload` function, files stay `ready`. */
export type NuiUploadStatus = 'ready' | 'queued' | 'uploading' | 'done' | 'error' | 'canceled';

/** A file in the queue. */
export interface NuiUpload<R = unknown> {
  readonly id: string;
  readonly file: File;
  /** Its name, with its folder when a folder was dropped: `photos/2026/beach.jpg`. */
  readonly path: string;
  readonly status: NuiUploadStatus;
  /** From 0 to 1, as the `upload` function reports it. */
  readonly progress: number;
  /** Why it failed: the message of the error the `upload` function threw. */
  readonly error?: string;
  /** What the `upload` function returned. */
  readonly result?: R;
  /** An object URL for images, to preview them. */
  readonly preview?: string;
}

/** What an `upload` function gets, besides the file. */
export interface NuiUploadContext {
  /** Aborts when the upload is canceled: pass it to `fetch`. */
  signal: AbortSignal;
  /** Reports progress, from 0 to 1. */
  progress: (fraction: number) => void;
}

export type NuiUploader<R = unknown> = (file: File, context: NuiUploadContext) => Promise<R>;

let counter = 0;

/**
 * Files on their way to a server: a queue that uploads a few at a time, reports
 * progress, and cancels and retries. Without an `upload` function, it only holds
 * the files.
 *
 * ```ts
 * const queue = new NuiUploadQueue({
 *   upload: (file, { signal, progress }) => send(file, signal, progress),
 *   concurrency: 3,
 * });
 * ```
 */
export class NuiUploadQueue<R = unknown> {
  readonly #items = signal<readonly NuiUpload<R>[]>([]);
  readonly #controllers = new Map<string, AbortController>();
  #upload: NuiUploader<R> | null;
  #concurrency: number;
  #previews: boolean;

  /** Every file, in the order they came. */
  readonly items = this.#items.asReadonly();
  /** Some file is uploading or waiting to. */
  readonly busy = computed(() =>
    this.#items().some((i) => i.status === 'uploading' || i.status === 'queued'),
  );
  /** Progress across the files being sent, from 0 to 1. */
  readonly progress = computed(() => {
    const sent = this.#items().filter((i) => i.status !== 'ready' && i.status !== 'canceled');
    const total = sent.reduce((sum, i) => sum + i.file.size, 0);
    if (!total) return sent.length && sent.every((i) => i.status === 'done') ? 1 : 0;
    const done = sent.reduce(
      (sum, i) => sum + i.file.size * (i.status === 'done' ? 1 : i.progress),
      0,
    );
    return done / total;
  });

  constructor(
    options: { upload?: NuiUploader<R> | null; concurrency?: number; previews?: boolean } = {},
  ) {
    this.#upload = options.upload ?? null;
    this.#concurrency = Math.max(1, options.concurrency ?? 3);
    this.#previews = options.previews ?? true;
  }

  /** @internal Changes the upload function or how many run at once. */
  configure(options: { upload?: NuiUploader<R> | null; concurrency?: number }): void {
    if (options.upload !== undefined) this.#upload = options.upload;
    if (options.concurrency !== undefined) this.#concurrency = Math.max(1, options.concurrency);
    this.#pump();
  }

  /** Adds files, with their folder paths when they came from a folder. */
  add(files: Iterable<File | { file: File; path: string }>): NuiUpload<R>[] {
    const added = [...files].map((entry): NuiUpload<R> => {
      const file = entry instanceof File ? entry : entry.file;
      const path = entry instanceof File ? file.webkitRelativePath || file.name : entry.path;
      return {
        id: `nui-upload-${counter++}`,
        file,
        path,
        status: this.#upload ? 'queued' : 'ready',
        progress: 0,
        ...(this.#previews &&
        file.type.startsWith('image/') &&
        typeof URL.createObjectURL === 'function'
          ? { preview: URL.createObjectURL(file) }
          : {}),
      };
    });
    this.#items.update((items) => [...items, ...added]);
    this.#pump();
    return added;
  }

  /** Stops an upload, keeping the file in the list as canceled. */
  cancel(id: string): void {
    this.#controllers.get(id)?.abort();
    this.#set(id, (item) =>
      item.status === 'uploading' || item.status === 'queued'
        ? { ...item, status: 'canceled' }
        : item,
    );
    this.#pump();
  }

  /** Sends a failed or canceled file again. */
  retry(id: string): void {
    this.#set(id, (item) =>
      item.status === 'error' || item.status === 'canceled'
        ? { ...item, status: this.#upload ? 'queued' : 'ready', progress: 0, error: undefined }
        : item,
    );
    this.#pump();
  }

  /** Takes a file out, stopping its upload. */
  remove(id: string): void {
    this.#controllers.get(id)?.abort();
    const item = untracked(this.#items).find((i) => i.id === id);
    if (item?.preview) URL.revokeObjectURL(item.preview);
    this.#items.update((items) => items.filter((i) => i.id !== id));
    this.#pump();
  }

  /** Takes every file out. */
  clear(): void {
    for (const item of untracked(this.#items)) {
      this.#controllers.get(item.id)?.abort();
      if (item.preview) URL.revokeObjectURL(item.preview);
    }
    this.#items.set([]);
  }

  #set(id: string, change: (item: NuiUpload<R>) => NuiUpload<R>): void {
    this.#items.update((items) => items.map((i) => (i.id === id ? change(i) : i)));
  }

  /** Starts queued uploads while there's room. */
  #pump(): void {
    const upload = this.#upload;
    if (!upload) return;
    const items = untracked(this.#items);
    let running = items.filter((i) => i.status === 'uploading').length;
    for (const item of items) {
      if (running >= this.#concurrency) break;
      if (item.status !== 'queued') continue;
      running++;
      void this.#send(item, upload);
    }
  }

  async #send(item: NuiUpload<R>, upload: NuiUploader<R>): Promise<void> {
    const controller = new AbortController();
    this.#controllers.set(item.id, controller);
    this.#set(item.id, (i) => ({ ...i, status: 'uploading', progress: 0 }));
    const progress = (fraction: number) => {
      if (controller.signal.aborted) return;
      const value = Math.min(1, Math.max(0, fraction));
      this.#set(item.id, (i) => (i.status === 'uploading' ? { ...i, progress: value } : i));
    };
    try {
      const result = await upload(item.file, { signal: controller.signal, progress });
      if (!controller.signal.aborted) {
        this.#set(item.id, (i) => ({ ...i, status: 'done', progress: 1, result }));
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        const message = error instanceof Error ? error.message : String(error);
        this.#set(item.id, (i) => ({ ...i, status: 'error', error: message }));
      }
    } finally {
      this.#controllers.delete(item.id);
      this.#pump();
    }
  }
}

/**
 * The files in what was dropped, with folders read through: every file inside,
 * with its path. Browsers without folder entries get the files as they are.
 */
export async function nuiDroppedFiles(
  transfer: DataTransfer,
): Promise<{ file: File; path: string }[]> {
  const entries = [...transfer.items]
    .filter((item) => item.kind === 'file')
    .map((item) => item.webkitGetAsEntry?.() ?? null);
  if (!entries.length || entries.some((entry) => entry === null)) {
    return [...transfer.files].map((file) => ({ file, path: file.name }));
  }
  const out: { file: File; path: string }[] = [];
  const walk = async (entry: FileSystemEntry): Promise<void> => {
    if (entry.isFile) {
      const file = await new Promise<File>((resolve, reject) =>
        (entry as FileSystemFileEntry).file(resolve, reject),
      );
      out.push({ file, path: entry.fullPath.replace(/^\//, '') });
    } else if (entry.isDirectory) {
      const reader = (entry as FileSystemDirectoryEntry).createReader();
      // A directory reader returns its entries in batches, until an empty one.
      for (;;) {
        const batch = await new Promise<FileSystemEntry[]>((resolve, reject) =>
          reader.readEntries(resolve, reject),
        );
        if (!batch.length) break;
        for (const child of batch) await walk(child);
      }
    }
  };
  try {
    for (const entry of entries) await walk(entry!);
  } catch {
    // An entry that can't be read (dragged from another app, or made by a script,
    // which WebKit can't read back): the files as they are, without folders.
    return [...transfer.files].map((file) => ({ file, path: file.name }));
  }
  return out;
}
