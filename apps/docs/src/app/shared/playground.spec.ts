import { provideLocationMocks } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { springTransition } from '@needless-ui/angular';
import { I18n } from '../i18n/i18n';
import { Playground } from './playground';

describe('Playground', () => {
  async function setup() {
    TestBed.configureTestingModule({ providers: [provideLocationMocks(), provideRouter([])] });
    await TestBed.inject(I18n).load('en');
    const fixture = TestBed.createComponent(Playground);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;
    const slide = async (knob: string, value: number) => {
      const slider = el.querySelector<HTMLInputElement>(`#playground-${knob}`)!;
      slider.value = String(value);
      slider.dispatchEvent(new Event('input'));
      await fixture.whenStable();
    };
    const motion = () =>
      Array.from(el.querySelectorAll<HTMLInputElement>('input[name="playground-motion"]')).find(
        (radio) => radio.checked,
      )?.value;
    return {
      fixture,
      el,
      stage: el.querySelector<HTMLElement>('.playground-stage')!,
      caption: el.querySelector('figcaption')!,
      slide,
      motion,
    };
  }

  it('puts the chosen presets on the stage', async () => {
    const { fixture, el, stage } = await setup();
    expect(stage.dataset['nuiMotion']).toBe('bouncy');

    const press = el.querySelector('select')!;
    press.value = 'tilt';
    press.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    expect(stage.dataset['nuiPress']).toBe('tilt');
  });

  it('turns tuned physics into a custom spring on the stage', async () => {
    const { stage, slide, motion } = await setup();
    await slide('damping', 20);

    expect(motion()).toBe('custom');
    expect(stage.dataset['nuiMotion']).toBeUndefined();
    expect(stage.style.getPropertyValue('--nui-motion')).toBe(
      springTransition({ stiffness: 300, damping: 20, mass: 1 }),
    );
  });

  it('keeps the last spring that settles while the sliders make one that never does', async () => {
    const { stage, caption, slide } = await setup();
    await slide('stiffness', 50);
    await slide('damping', 2);
    expect(caption.textContent).toContain('Settles in');

    await slide('mass', 2);
    expect(caption.textContent).toContain('doesn’t settle within 10 seconds');
    expect(stage.style.getPropertyValue('--nui-motion')).toBe(
      springTransition({ stiffness: 50, damping: 2, mass: 1 }),
    );
  });

  it('goes back to the library defaults', async () => {
    const { fixture, el, stage } = await setup();
    const reset = Array.from(el.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Back to defaults'),
    )!;
    reset.click();
    await fixture.whenStable();
    expect({ ...stage.dataset }).toEqual({
      nuiMotion: 'snappy',
      nuiPress: 'sink',
      nuiEnter: 'zoom',
      nuiCorners: 'round',
      nuiRadius: 'medium',
      nuiDensity: 'regular',
    });
  });
});
