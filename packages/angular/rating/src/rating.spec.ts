import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { userEvent } from 'vitest/browser';
import { NuiRating } from './rating';

@Component({
  imports: [NuiRating, FormsModule],
  template: `
    <div nuiRating aria-label="Rate it" clearable [(ngModel)]="stars"></div>
    <span nuiRating readonly [value]="4.3"></span>
  `,
})
class Host {
  readonly stars = signal<number | null>(3);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const [group, display] = Array.from(root.querySelectorAll<HTMLElement>('.nui-rating'));
  const radios = () => Array.from(group.querySelectorAll<HTMLInputElement>('input'));
  return { fixture, host: fixture.componentInstance, group, display, radios };
}

describe('NuiRating', () => {
  it('is a radio group of labelled stars, checked from the form value', async () => {
    const { group, radios } = await setup();
    expect(group.getAttribute('role')).toBe('radiogroup');
    expect(radios()).toHaveLength(5);
    expect(radios()[0].getAttribute('aria-label')).toBe('1 star');
    expect(radios()[4].getAttribute('aria-label')).toBe('5 stars');
    expect(radios()[2].checked).toBe(true);
    expect(new Set(radios().map((radio) => radio.name)).size).toBe(1);
  });

  it('changes with clicks and arrow keys, and clears when the chosen star is clicked again', async () => {
    const { fixture, host, radios } = await setup();
    await userEvent.click(radios()[4]);
    await fixture.whenStable();
    expect(host.stars()).toBe(5);

    await userEvent.keyboard('{ArrowLeft}');
    await fixture.whenStable();
    expect(host.stars()).toBe(4);

    await userEvent.click(radios()[3]);
    await fixture.whenStable();
    expect(host.stars()).toBeNull();
    expect(radios().some((radio) => radio.checked)).toBe(false);
  });

  it('shows a fraction when read-only', async () => {
    const { display } = await setup();
    expect(display.getAttribute('role')).toBe('img');
    expect(display.getAttribute('aria-label')).toBe('Rated 4.3 out of 5');
    expect(display.style.getPropertyValue('--_value')).toBe('4.3');
    expect(display.querySelector('input')).toBeNull();
  });
});
