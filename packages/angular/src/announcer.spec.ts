import { TestBed } from '@angular/core/testing';
import { nuiAnnouncer } from './announcer';

describe('nuiAnnouncer', () => {
  it('says things without showing them, with no other styles on the page', async () => {
    const announcer = TestBed.runInInjectionContext(() => nuiAnnouncer());
    await announcer.announce('Saved');
    const element = document.querySelector<HTMLElement>('.cdk-live-announcer-element')!;
    expect(element.textContent).toBe('Saved');
    expect(element.getAttribute('aria-live')).toBe('polite');
    expect(getComputedStyle(element).position).toBe('absolute');
    const box = element.getBoundingClientRect();
    expect(box.width * box.height).toBeLessThanOrEqual(1);
  });
});
