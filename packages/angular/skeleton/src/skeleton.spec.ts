import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NuiSkeleton } from './skeleton';

@Component({
  imports: [NuiSkeleton],
  template: `<span nuiSkeleton></span><span nuiSkeleton shape="circle"></span>`,
})
class Host {}

describe('NuiSkeleton', () => {
  it('is hidden from assistive technology and reflects its shape', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const [line, circle] = Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('span'));
    expect(line.className).toBe('nui-skeleton');
    expect(line.getAttribute('aria-hidden')).toBe('true');
    expect(line.hasAttribute('data-shape')).toBe(false);
    expect(circle.dataset['shape']).toBe('circle');
  });
});
