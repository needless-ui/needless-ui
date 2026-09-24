import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { springTransition, type NuiSpring } from '@needless-ui/angular';
import { NuiButton, type NuiButtonVariant } from './button';

@Component({
  imports: [NuiButton],
  template: `
    <button nuiButton [variant]="variant()" tone="danger" size="lg" [disabled]="disabled()">
      Delete
    </button>
    <a nuiButton href="#docs" [disabled]="disabled()">Docs</a>
    <button nuiButton>Defaults</button>
    <button
      nuiButton
      motion="jelly"
      press="squish"
      corners="squircle"
      radius="full"
      density="roomy"
      [spring]="spring()"
    >
      Custom
    </button>
  `,
})
class Host {
  readonly variant = signal<NuiButtonVariant>('soft');
  readonly disabled = signal(false);
  readonly spring = signal<NuiSpring | undefined>(undefined);
}

async function setup() {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const [button, defaults, custom] = Array.from(root.querySelectorAll('button'));
  const anchor = root.querySelector('a')!;
  return { fixture, host: fixture.componentInstance, button, defaults, custom, anchor };
}

function click(element: HTMLElement): MouseEvent {
  const event = new MouseEvent('click', { bubbles: true, cancelable: true });
  element.dispatchEvent(event);
  return event;
}

describe('NuiButton', () => {
  it('adds the component class and the default attributes', async () => {
    const { defaults } = await setup();
    expect(defaults.classList).toContain('nui-button');
    expect({ ...defaults.dataset }).toEqual({ variant: 'solid', tone: 'accent', size: 'md' });
  });

  it('reflects inputs to data attributes', async () => {
    const { fixture, host, button } = await setup();
    expect({ ...button.dataset }).toEqual({ variant: 'soft', tone: 'danger', size: 'lg' });

    host.variant.set('outline');
    await fixture.whenStable();
    expect(button.dataset['variant']).toBe('outline');
  });

  it('reflects customization inputs to the data-nui-* presets', async () => {
    const { custom } = await setup();
    expect({ ...custom.dataset }).toEqual({
      variant: 'solid',
      tone: 'accent',
      size: 'md',
      nuiMotion: 'jelly',
      nuiPress: 'squish',
      nuiCorners: 'squircle',
      nuiRadius: 'full',
      nuiDensity: 'roomy',
    });
  });

  it('compiles a custom spring into its own --nui-motion', async () => {
    const { fixture, host, custom } = await setup();
    expect(custom.style.getPropertyValue('--nui-motion')).toBe('');

    host.spring.set({ stiffness: 900, damping: 12 });
    await fixture.whenStable();
    expect(custom.style.getPropertyValue('--nui-motion')).toBe(
      springTransition({ stiffness: 900, damping: 12 }),
    );

    host.spring.set(undefined);
    await fixture.whenStable();
    expect(custom.style.getPropertyValue('--nui-motion')).toBe('');
  });

  it('disables native buttons with the disabled attribute', async () => {
    const { fixture, host, button } = await setup();
    expect(button.disabled).toBe(false);

    host.disabled.set(true);
    await fixture.whenStable();
    expect(button.disabled).toBe(true);
    expect(button.hasAttribute('aria-disabled')).toBe(false);

    host.disabled.set(false);
    await fixture.whenStable();
    expect(button.hasAttribute('disabled')).toBe(false);
  });

  it('marks disabled anchors aria-disabled and stops their clicks', async () => {
    const { fixture, host, anchor } = await setup();
    const laterListener = vi.fn();
    anchor.addEventListener('click', laterListener);

    host.disabled.set(true);
    await fixture.whenStable();
    const event = click(anchor);

    expect(anchor.getAttribute('aria-disabled')).toBe('true');
    expect(anchor.hasAttribute('disabled')).toBe(false);
    expect(event.defaultPrevented).toBe(true);
    expect(laterListener).not.toHaveBeenCalled();
  });

  it('leaves enabled anchors alone', async () => {
    const { anchor } = await setup();
    const event = click(anchor);

    expect(event.defaultPrevented).toBe(false);
    expect(anchor.hasAttribute('aria-disabled')).toBe(false);
  });
});
