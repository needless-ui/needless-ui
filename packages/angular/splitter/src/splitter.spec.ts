import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { userEvent } from 'vitest/browser';
import { NuiSplitter, NuiSplitterHandle, NuiSplitterPane } from './splitter';

@Component({
  imports: [NuiSplitter, NuiSplitterPane, NuiSplitterHandle],
  styles: `
    .nui-splitter {
      display: flex;
      inline-size: 1000px;
      block-size: 200px;
    }
    .nui-splitter-pane {
      flex-basis: 0;
      min-inline-size: 0;
    }
    .nui-splitter-handle {
      flex: none;
      inline-size: 10px;
    }
  `,
  template: `
    <div nuiSplitter [(sizes)]="sizes" [attr.dir]="dir()" storageKey="test">
      <aside nuiSplitterPane min="100px" collapsible label="Files">Files</aside>
      <div nuiSplitterHandle></div>
      <main nuiSplitterPane min="20%">Editor</main>
      <div nuiSplitterHandle label="Resize preview"></div>
      <section nuiSplitterPane defaultSize="25%">Preview</section>
    </div>
  `,
})
class Host {
  readonly sizes = signal<readonly number[]>([]);
  readonly dir = signal<'ltr' | 'rtl'>('ltr');
}

async function setup(change?: (host: Host) => void) {
  localStorage.removeItem('nui-splitter:test');
  const fixture = TestBed.createComponent(Host);
  change?.(fixture.componentInstance);
  document.body.append(fixture.nativeElement);
  await fixture.whenStable();
  await new Promise((resolve) => requestAnimationFrame(resolve));
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const handles = [...root.querySelectorAll<HTMLElement>('[role="separator"]')];
  const panes = [...root.querySelectorAll<HTMLElement>('.nui-splitter-pane')];
  const widths = () => panes.map((p) => Math.round(p.getBoundingClientRect().width));
  return {
    fixture,
    host: fixture.componentInstance,
    handles,
    panes,
    widths,
    stable: () => fixture.whenStable(),
  };
}

describe('NuiSplitter', () => {
  it('shares the room out, and names its handles after the panes they resize', async () => {
    const { handles, panes, widths } = await setup();
    // 980 pixels between three panes: the preview asked for a quarter.
    expect(widths()).toEqual([368, 368, 245]);
    expect(handles[0].getAttribute('aria-orientation')).toBe('vertical');
    expect(handles[0].getAttribute('aria-controls')).toBe(panes[0].id);
    expect(handles[0].getAttribute('aria-label')).toBe('Files');
    expect(handles[1].getAttribute('aria-label')).toBe('Resize preview');
    expect(handles[0].getAttribute('aria-valuenow')).toBe('38');
    expect(handles[0].getAttribute('aria-valuemin')).toBe('10');
  });

  it('moves with the arrow keys, Home and End, and folds with Enter', async () => {
    const { host, handles, stable } = await setup();
    handles[0].focus();
    await userEvent.keyboard('{ArrowRight}');
    await stable();
    expect(host.sizes().map(Math.round)).toEqual([43, 33, 25]);
    await userEvent.keyboard('{Home}');
    await stable();
    expect(handles[0].getAttribute('aria-valuenow')).toBe('10');
    await userEvent.keyboard('{Enter}');
    await stable();
    expect(host.sizes()[0]).toBe(0);
    await userEvent.keyboard('{Enter}');
    await stable();
    expect(Math.round(host.sizes()[0])).toBe(10);
    // Sizes are kept for next time.
    expect(JSON.parse(localStorage.getItem('nui-splitter:test')!).length).toBe(3);
  });

  it('drags, folding a pane dragged below half its minimum', async () => {
    const { host, handles, widths, stable } = await setup();
    const box = handles[0].getBoundingClientRect();
    const at = (x: number) => ({
      clientX: x,
      clientY: box.y + 10,
      pointerId: 1,
      bubbles: true,
      button: 0,
    });
    handles[0].dispatchEvent(new PointerEvent('pointerdown', at(box.x + 5)));
    handles[0].dispatchEvent(new PointerEvent('pointermove', at(box.x + 105)));
    await stable();
    expect(widths()[0]).toBe(468);
    handles[0].dispatchEvent(new PointerEvent('pointermove', at(box.x - 330)));
    await stable();
    expect(widths()[0]).toBe(0);
    handles[0].dispatchEvent(new PointerEvent('pointerup', at(box.x - 330)));
    await stable();
    expect(host.sizes()[0]).toBe(0);
  });

  it('mirrors the arrow keys right to left', async () => {
    const { host, handles, stable } = await setup((h) => h.dir.set('rtl'));
    handles[0].focus();
    await userEvent.keyboard('{ArrowLeft}');
    await stable();
    expect(Math.round(host.sizes()[0])).toBe(43);
  });
});
