import { provideLocationMocks } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { I18n } from '../i18n/i18n';
import { Emergency } from './emergency';

describe('Emergency', () => {
  async function setup() {
    TestBed.configureTestingModule({ providers: [provideLocationMocks(), provideRouter([])] });
    await TestBed.inject(I18n).load('en');
    const fixture = TestBed.createComponent(Emergency);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;
    return {
      fixture,
      cover: el.querySelector<HTMLButtonElement>('.emergency-cover')!,
      red: el.querySelector<HTMLButtonElement>('.emergency-button')!,
      status: el.querySelector('.emergency-status')!,
    };
  }

  it('keeps the button under its cover until the cover is lifted', async () => {
    const { fixture, cover, red, status } = await setup();
    expect(red.disabled).toBe(true);

    cover.click();
    await fixture.whenStable();
    expect(red.disabled).toBe(false);
    expect(cover.inert).toBe(true);
    expect(status.textContent).toBe('The cover is up. Please reconsider.');
  });

  it('leaves gravity off for readers who ask for reduced motion', async () => {
    const { fixture, cover, red, status } = await setup();
    const matchMedia = vi
      .spyOn(window, 'matchMedia')
      .mockReturnValue({ matches: true } as MediaQueryList);

    cover.click();
    await fixture.whenStable();
    red.click();
    await fixture.whenStable();
    expect(status.textContent).toBe(
      'Your system asks for reduced motion, so gravity stays off. Lucky.',
    );
    expect(document.documentElement.classList.contains('gravity')).toBe(false);
    matchMedia.mockRestore();
  });
});
