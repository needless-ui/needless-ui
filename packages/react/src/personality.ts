import type { NuiCorners, NuiDensity, NuiRadius } from '@needless-ui/core';

/**
 * The customization props components share. Each one sets the `data-nui-*`
 * attribute of the same preset in @needless-ui/css, so it applies to one
 * component, while the attribute on any ancestor applies to a whole subtree.
 * Props left unset inherit from those ancestors.
 */
export interface NuiPersonalityProps {
  /** The shape of its corners. */
  corners?: NuiCorners;
  /** How big its corners are. */
  radius?: NuiRadius;
  /** How much room it takes. */
  density?: NuiDensity;
}

/** The `data-nui-*` attributes for a component's personality props. */
export function nuiPersonality(props: NuiPersonalityProps): {
  'data-nui-corners'?: NuiCorners;
  'data-nui-radius'?: NuiRadius;
  'data-nui-density'?: NuiDensity;
} {
  return {
    'data-nui-corners': props.corners,
    'data-nui-radius': props.radius,
    'data-nui-density': props.density,
  };
}
