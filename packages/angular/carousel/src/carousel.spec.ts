import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, signal, ViewEncapsulation } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { userEvent } from 'vitest/browser';
import { NuiCarousel, NuiCarouselSlide } from './carousel';

@Component({
  imports: [NuiCarousel, NuiCarouselSlide],
  // The layout the stylesheet gives it: a row that scrolls, a slide per view.
  encapsulation: ViewEncapsulation.None,
  styles: `
    .nui-carousel-track {
      display: flex;
      overflow-x: auto;
    }
    .nui-carousel-slide {
      flex: 0 0 calc(100% / var(--_per-view, 1));
    }
  `,
  template: `
    <div [attr.dir]="dir()" style="inline-size: 300px">
      <nui-carousel
        label="Trips"
        [perView]="perView()"
        [loop]="loop()"
        [autoplay]="autoplay()"
        gap="0px"
        [(index)]="index"
      >
        @for (name of names; track name) {
          <div [nuiCarouselSlide]="name" style="block-size: 100px">{{ name }}</div>
        }
      </nui-carousel>
    </div>
  `,
})
class Host {
  readonly names = ['Como', 'Garda', 'Iseo', 'Orta'];
  readonly index = signal(0);
  readonly perView = signal<number | 'auto'>(1);
  readonly loop = signal(false);
  readonly autoplay = signal(0);
  readonly dir = signal<'ltr' | 'rtl'>('ltr');
}

const realMatchMedia = window.matchMedia;

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
  const q = <T extends Element>(selector: string) => root.querySelector<T>(selector)!;
  const settle = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 60));
    await fixture.whenStable();
  };
  return {
    fixture,
    host: fixture.componentInstance,
    root,
    track: q<HTMLElement>('.nui-carousel-track'),
    previous: q<HTMLButtonElement>('[data-direction="previous"]'),
    next: q<HTMLButtonElement>('[data-direction="next"]'),
    dots: () => [...root.querySelectorAll<HTMLButtonElement>('.nui-carousel-dot')],
    slides: () => [...root.querySelectorAll<HTMLElement>('.nui-carousel-slide')],
    announcements,
    settle,
  };
}

describe('NuiCarousel', () => {
  // Reduced motion: scrolls are instant, and rotation waits for the button.
  beforeEach(() => {
    window.matchMedia = ((query: string) => ({
      ...realMatchMedia.call(window, query),
      matches: query.includes('prefers-reduced-motion'),
    })) as typeof window.matchMedia;
  });
  afterEach(() => {
    window.matchMedia = realMatchMedia;
  });

  it('is a named region of named slides', async () => {
    const { root, slides, track } = await setup();
    const carousel = root.querySelector('nui-carousel')!;
    expect(carousel.getAttribute('role')).toBe('region');
    expect(carousel.getAttribute('aria-roledescription')).toBe('carousel');
    expect(carousel.getAttribute('aria-label')).toBe('Trips');
    expect(slides()[0].getAttribute('role')).toBe('group');
    expect(slides()[0].getAttribute('aria-roledescription')).toBe('slide');
    expect(slides()[1].getAttribute('aria-label')).toBe('Garda, 2 of 4');
    expect(slides()[0].hasAttribute('data-current')).toBe(true);
    expect(track.getAttribute('tabindex')).toBe('0');
  });

  it('moves with the buttons and the dots, and says where it is', async () => {
    const { host, previous, next, dots, track, announcements, settle } = await setup();
    expect(previous.disabled).toBe(true);
    await userEvent.click(next);
    await settle();
    expect(host.index()).toBe(1);
    expect(Math.round(track.scrollLeft)).toBe(300);
    expect(announcements).toEqual(['2 of 4']);
    await userEvent.click(dots()[3]);
    await settle();
    expect(host.index()).toBe(3);
    expect(next.disabled).toBe(true);
    expect(dots()[3].getAttribute('aria-current')).toBe('true');
  });

  it('comes round with loop, and shows several slides at once', async () => {
    const { host, next, dots, settle } = await setup((h) => {
      h.loop.set(true);
      h.perView.set(2);
    });
    expect(dots().length).toBe(3);
    host.index.set(2);
    await settle();
    await userEvent.click(next);
    await settle();
    expect(host.index()).toBe(0);
  });

  it('follows a swipe, and announces where it lands', async () => {
    const { host, track, announcements } = await setup();
    track.scrollLeft = 600;
    await new Promise((resolve) => setTimeout(resolve, 400));
    expect(host.index()).toBe(2);
    expect(announcements.at(-1)).toBe('3 of 4');
  });

  it('runs right to left', async () => {
    const { host, next, track, settle } = await setup((h) => h.dir.set('rtl'));
    await userEvent.click(next);
    await settle();
    expect(host.index()).toBe(1);
    expect(Math.round(track.scrollLeft)).toBe(-300);
  });

  it('turns by itself until focus comes in, and starts again from its control', async () => {
    const { host, root, fixture } = await setup((h) => h.autoplay.set(80));
    const play = root.querySelector<HTMLButtonElement>('.nui-carousel-play')!;
    // Reduced motion: it starts stopped.
    expect(play.getAttribute('aria-label')).toBe('Start slide rotation');
    await userEvent.click(play);
    await fixture.whenStable();
    expect(play.getAttribute('aria-label')).toBe('Stop slide rotation');
    // Focus on the control itself doesn't stop it; the pointer over it pauses it.
    (document.activeElement as HTMLElement)?.blur();
    await userEvent.unhover(root.querySelector('nui-carousel')!);
    await new Promise((resolve) => setTimeout(resolve, 300));
    expect(host.index()).toBeGreaterThan(0);
    root.querySelector<HTMLElement>('.nui-carousel-track')!.focus();
    await fixture.whenStable();
    expect(play.getAttribute('aria-label')).toBe('Start slide rotation');
  });
});
