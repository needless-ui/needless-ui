import { NuiUploadQueue, type NuiUploadContext } from './queue';

const file = (name: string, size = 10, type = 'text/plain') =>
  new File(['x'.repeat(size)], name, { type });
const tick = () => new Promise((resolve) => setTimeout(resolve));

/** An upload the test finishes by hand. */
function manual() {
  const calls: {
    file: File;
    context: NuiUploadContext;
    resolve: (v: string) => void;
    reject: (e: Error) => void;
  }[] = [];
  const upload = (file: File, context: NuiUploadContext) =>
    new Promise<string>((resolve, reject) => calls.push({ file, context, resolve, reject }));
  return { upload, calls };
}

describe('NuiUploadQueue', () => {
  it('uploads a few at a time, with progress', async () => {
    const { upload, calls } = manual();
    const queue = new NuiUploadQueue({ upload, concurrency: 2 });
    queue.add([file('a.txt'), file('b.txt'), file('c.txt')]);
    expect(queue.items().map((i) => i.status)).toEqual(['uploading', 'uploading', 'queued']);
    expect(queue.busy()).toBe(true);
    calls[0].context.progress(0.5);
    expect(queue.items()[0].progress).toBe(0.5);
    calls[0].resolve('https://files.example/a');
    await tick();
    expect(queue.items()[0]).toMatchObject({
      status: 'done',
      progress: 1,
      result: 'https://files.example/a',
    });
    expect(queue.items()[2].status).toBe('uploading');
  });

  it('keeps failures, cancels, and retries', async () => {
    const { upload, calls } = manual();
    const queue = new NuiUploadQueue({ upload });
    const [a, b] = queue.add([file('a.txt'), file('b.txt')]);
    calls[0].reject(new Error('Too slow'));
    await tick();
    expect(queue.items()[0]).toMatchObject({ status: 'error', error: 'Too slow' });
    queue.cancel(b.id);
    expect(calls[1].context.signal.aborted).toBe(true);
    expect(queue.items()[1].status).toBe('canceled');
    queue.retry(a.id);
    expect(queue.items()[0].status).toBe('uploading');
    expect(calls.length).toBe(3);
  });

  it('only holds files without an upload function, and previews images', () => {
    const queue = new NuiUploadQueue();
    const [text, image] = queue.add([file('a.txt'), file('b.png', 10, 'image/png')]);
    expect(text.status).toBe('ready');
    expect(text.preview).toBeUndefined();
    expect(image.preview).toMatch(/^blob:/);
    queue.remove(image.id);
    expect(queue.items().length).toBe(1);
  });
});
