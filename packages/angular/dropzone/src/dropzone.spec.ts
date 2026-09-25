import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NuiDropzone } from './dropzone';
import type { NuiUploadContext } from './queue';

@Component({
  imports: [NuiDropzone],
  template: `
    <nui-dropzone
      accept="image/*,.txt"
      maxSize="100"
      maxFiles="3"
      hint="Images or text, up to 100 bytes"
      [upload]="upload()"
      [(files)]="files"
      (rejected)="rejected = $event.length"
    />
  `,
})
class Host {
  readonly files = signal<readonly File[]>([]);
  readonly upload = signal<((file: File, context: NuiUploadContext) => Promise<string>) | null>(
    null,
  );
  rejected = 0;
}

const file = (name: string, size = 10, type = 'text/plain') =>
  new File(['x'.repeat(size)], name, { type });

async function setup(change?: (host: Host) => void) {
  const announcements: string[] = [];
  TestBed.configureTestingModule({
    providers: [
      { provide: LiveAnnouncer, useValue: { announce: (t: string) => void announcements.push(t) } },
    ],
  });
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const input = root.querySelector<HTMLInputElement>('input[type="file"]')!;
  const choose = async (...files: File[]) => {
    const data = new DataTransfer();
    files.forEach((f) => data.items.add(f));
    input.files = data.files;
    input.dispatchEvent(new Event('change'));
    await fixture.whenStable();
  };
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    choose,
    announcements,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiDropzone', () => {
  it('is a button that opens the file picker, described by its hint', async () => {
    const { root } = await setup();
    const button = root.querySelector('button')!;
    expect(button.textContent).toContain('Drop files here, or choose them');
    expect(
      root.querySelector(`#${button.getAttribute('aria-describedby')}`)?.textContent,
    ).toContain('up to 100 bytes');
    expect(root.querySelector('input[type="file"]')!.getAttribute('accept')).toBe('image/*,.txt');
  });

  it('takes the files that pass its checks, and says why the others didn’t', async () => {
    const { root, host, choose, announcements } = await setup();
    await choose(
      file('notes.txt'),
      file('big.txt', 500),
      file('run.exe', 10, 'application/x-msdownload'),
      file('photo.png', 20, 'image/png'),
    );
    expect(host.files().map((f) => f.name)).toEqual(['notes.txt', 'photo.png']);
    expect(host.rejected).toBe(2);
    const problems = [...root.querySelectorAll('.nui-dropzone-problems li')].map(
      (li) => li.textContent,
    );
    expect(problems).toEqual([
      'big.txt is larger than 100 B.',
      'run.exe isn’t a file type you can add.',
    ]);
    expect(announcements.at(-1)).toContain('2 files added');
    // The list: names, sizes, and a button to remove each.
    const items = [...root.querySelectorAll('.nui-dropzone-file')];
    expect(items[0].textContent).toContain('10 B');
    items[0].querySelector<HTMLButtonElement>('[data-action="remove"]')!.click();
    await new Promise((r) => setTimeout(r));
    expect(host.files().map((f) => f.name)).toEqual(['photo.png']);
    // Two more fit; the third doesn't.
    await choose(file('a.txt'), file('b.txt'), file('c.txt'));
    expect(host.files().length).toBe(3);
    expect(root.querySelector('.nui-dropzone-problems')!.textContent).toContain('up to 3 files');
  });

  it('takes dropped files, and shows it while they’re held over it', async () => {
    const { root, host, stable } = await setup();
    const area = root.querySelector<HTMLElement>('.nui-dropzone-area')!;
    const data = new DataTransfer();
    data.items.add(file('drop.txt'));
    area.dispatchEvent(
      new DragEvent('dragenter', { dataTransfer: data, bubbles: true, cancelable: true }),
    );
    await stable();
    expect(root.querySelector('nui-dropzone')!.hasAttribute('data-dragging')).toBe(true);
    area.dispatchEvent(
      new DragEvent('drop', { dataTransfer: data, bubbles: true, cancelable: true }),
    );
    await new Promise((r) => setTimeout(r, 20));
    await stable();
    expect(host.files().map((f) => f.name)).toEqual(['drop.txt']);
    expect(root.querySelector('nui-dropzone')!.hasAttribute('data-dragging')).toBe(false);
  });

  it('uploads with progress when given an upload function', async () => {
    let finish: (value: string) => void = () => {};
    let report: (fraction: number) => void = () => {};
    const { root, choose, stable, announcements } = await setup((h) =>
      h.upload.set((_file, context) => {
        report = context.progress;
        return new Promise((resolve) => (finish = resolve));
      }),
    );
    await choose(file('notes.txt'));
    report(0.4);
    await stable();
    const bar = root.querySelector('[role="progressbar"]')!;
    expect(bar.getAttribute('aria-valuenow')).toBe('40');
    expect(bar.getAttribute('aria-label')).toBe('Uploading notes.txt');
    expect(root.querySelector('[data-action="cancel"]')).not.toBeNull();
    finish('ok');
    await new Promise((r) => setTimeout(r));
    await stable();
    expect(root.querySelector('.nui-dropzone-file')!.getAttribute('data-status')).toBe('done');
    expect(announcements.at(-1)).toBe('notes.txt: Uploaded');
  });
});
