import { nuiPlace, type NuiPlaceRequest } from './place';

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
