/*
 * @needless-ui/angular
 *
 * Components live in secondary entry points, so an app only ships what it imports:
 *
 *   import { NuiButton } from '@needless-ui/angular/button';
 *
 * The primary entry point holds what components share: types, the customization
 * inputs and the spring compiler.
 */
export { NuiPersonality } from './personality';
export { springTransition, type NuiSpring } from './spring';
export type {
  NuiCorners,
  NuiDensity,
  NuiEnter,
  NuiMotion,
  NuiPress,
  NuiRadius,
  NuiSize,
  NuiTone,
} from './types';
