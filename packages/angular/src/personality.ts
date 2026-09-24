import { computed, Directive, input } from '@angular/core';
import { springTransition, type NuiSpring } from './spring';
import type { NuiCorners, NuiDensity, NuiEnter, NuiMotion, NuiPress, NuiRadius } from './types';

/**
 * The customization inputs every component shares. Each one reflects to the
 * `data-nui-*` attribute of the same preset in @needless-ui/css, so it applies to
 * one component, while the attribute on any ancestor applies to a whole subtree.
 * Inputs left unset inherit from those ancestors.
 *
 * Components expose the inputs that apply to them as host directive inputs. Use
 * it the same way to give your own components the same knobs.
 */
@Directive({
  host: {
    '[attr.data-nui-motion]': 'motion()',
    '[attr.data-nui-press]': 'press()',
    '[attr.data-nui-enter]': 'enter()',
    '[attr.data-nui-corners]': 'corners()',
    '[attr.data-nui-radius]': 'radius()',
    '[attr.data-nui-density]': 'density()',
    '[style.--nui-motion]': 'springMotion()',
  },
})
export class NuiPersonality {
  /** The spring it moves with. */
  readonly motion = input<NuiMotion>();
  /** Any spring, compiled at runtime. Overrides `motion`. */
  readonly spring = input<NuiSpring>();
  /** What it does while held down. */
  readonly press = input<NuiPress>();
  /** How it arrives. */
  readonly enter = input<NuiEnter>();
  /** The shape of its corners. */
  readonly corners = input<NuiCorners>();
  /** How big its corners are. */
  readonly radius = input<NuiRadius>();
  /** How much room it takes. */
  readonly density = input<NuiDensity>();

  protected readonly springMotion = computed(() => {
    const spring = this.spring();
    return spring ? springTransition(spring) : null;
  });
}
