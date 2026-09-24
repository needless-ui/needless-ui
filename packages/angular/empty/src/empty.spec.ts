import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  NuiEmpty,
  NuiEmptyActions,
  NuiEmptyDescription,
  NuiEmptyMedia,
  NuiEmptyTitle,
} from './empty';

@Component({
  imports: [NuiEmpty, NuiEmptyMedia, NuiEmptyTitle, NuiEmptyDescription, NuiEmptyActions],
  template: `
    <div nuiEmpty>
      <div nuiEmptyMedia illustration="inbox"></div>
      <h3 nuiEmptyTitle>Inbox zero</h3>
      <p nuiEmptyDescription>Nothing left to read.</p>
      <div nuiEmptyActions></div>
    </div>
  `,
})
class Host {}

describe('NuiEmpty', () => {
  it('sets its classes and hides the picture from assistive technology', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    const media = root.querySelector<HTMLElement>('.nui-empty-media')!;
    expect(root.querySelector('.nui-empty')).not.toBeNull();
    expect(media.dataset['illustration']).toBe('inbox');
    expect(media.getAttribute('aria-hidden')).toBe('true');
    expect(root.querySelector('h3')!.className).toBe('nui-empty-title');
    expect(root.querySelector('p')!.className).toBe('nui-empty-description');
    expect(root.querySelector('.nui-empty-actions')).not.toBeNull();
  });
});
