import { nuiFollow, nuiPlace, type NuiPlaceRequest, nuiVisibleRect } from './place';

const viewport = { width: 1000, height: 800 };
const floating = { width: 200, height: 300 };
const place = (anchor: NuiPlaceRequest['anchor'], rest: Partial<NuiPlaceRequest> = {}) =>
  nuiPlace({ anchor, floating, viewport, offset: 4, margin: 8, ...rest });

describe('nuiPlace', () => {
  it('opens below, aligned to the start edge', () => {
    expect(place({ top: 100, left: 50, width: 120, height: 40 })).toEqual({
      top: 144,
      left: 50,
      side: 'bottom',
      maxHeight: 800 - 140 - 4 - 8,
      maxWidth: 984,
    });
  });

  it('flips above when there is more room there, and caps the height to the room it has', () => {
    const placement = place({ top: 700, left: 50, width: 120, height: 40 });
    expect(placement.side).toBe('top');
    expect(placement.top).toBe(700 - 4 - 300);
    expect(placement.maxHeight).toBe(700 - 4 - 8);
  });

  it('aligns center and end, mirrors start and end in right-to-left text', () => {
    const anchor = { top: 100, left: 400, width: 100, height: 40 };
    expect(place(anchor, { align: 'center' }).left).toBe(350);
    expect(place(anchor, { align: 'end' }).left).toBe(300);
    expect(place(anchor, { direction: 'rtl' }).left).toBe(300);
    expect(place(anchor, { direction: 'rtl', align: 'end' }).left).toBe(400);
  });

  it('slides along the edge to stay inside the viewport', () => {
    expect(place({ top: 100, left: 950, width: 40, height: 40 }).left).toBe(1000 - 8 - 200);
  });

  it('opens to the inline end, flipping to the start side when it must', () => {
    const anchor = { top: 100, left: 400, width: 100, height: 40 };
    expect(place(anchor, { side: 'end' })).toMatchObject({ side: 'right', left: 504, top: 100 });
    expect(place(anchor, { side: 'end', direction: 'rtl' })).toMatchObject({
      side: 'left',
      left: 196,
    });
    expect(place({ ...anchor, left: 850 }, { side: 'end' }).side).toBe('left');
  });

  it('goes below when it fits beside the anchor on neither side', () => {
    const phone = { width: 360, height: 740 };
    const anchor = { top: 100, left: 120, width: 120, height: 40 };
    expect(place(anchor, { side: 'end', viewport: phone })).toMatchObject({
      side: 'bottom',
      top: 144,
      left: 80,
    });
  });
});

describe('nuiVisibleRect', () => {
  // As measured on an iPhone (iOS 18.6): the keyboard moved the visual viewport 278 px
  // down the layout viewport, and the field's bottom is 264 px into what's visible.
  const offset = { top: 278, left: 0 };
  const field = { width: 408, height: 47 };

  it('takes the visual offset off client rects measured from the layout viewport', () => {
    // Chromium and Firefox: a fixed element at top 0 is at client top 0.
    const rect = { top: 495, left: 16, ...field };
    expect(nuiVisibleRect(rect, { top: 0, left: 0 }, offset)).toEqual({ ...rect, top: 217 });
  });

  it('keeps client rects measured from the visual viewport, as WebKit does', () => {
    // WebKit: a fixed element at top 0 is at client top -278, above what's visible.
    const rect = { top: 217, left: 16, ...field };
    expect(nuiVisibleRect(rect, { top: -278, left: 0 }, offset)).toEqual(rect);
  });
});

describe('nuiFollow', () => {
  it('places the floating element under its anchor, and leaves nothing behind when it stops', () => {
    const anchor = document.createElement('button');
    anchor.style.cssText = 'position: absolute; top: 120px; left: 40px; width: 160px; height: 32px';
    const floating = document.createElement('div');
    floating.popover = 'manual';
    floating.style.cssText = 'position: fixed; inset: auto; margin: 0; width: 120px; height: 60px';
    document.body.append(anchor, floating);
    floating.showPopover();
    const children = document.body.childElementCount;
    try {
      const stop = nuiFollow(anchor, floating);
      const box = anchor.getBoundingClientRect();
      expect(parseFloat(floating.style.top)).toBeCloseTo(box.bottom + 4, 0);
      expect(parseFloat(floating.style.left)).toBeCloseTo(box.left, 0);
      expect(floating.dataset['side']).toBe('bottom');
      stop();
      expect(document.body.childElementCount).toBe(children);
    } finally {
      floating.hidePopover();
      anchor.remove();
      floating.remove();
    }
  });
});
