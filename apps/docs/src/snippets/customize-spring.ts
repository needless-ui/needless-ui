import { springTransition } from '@needless-ui/angular';

// In a template, any spring is an input:
// <button nuiButton [spring]="{ stiffness: 900, damping: 12 }">Save</button>

// Anywhere else, compile it yourself:
const wobbly = springTransition({ stiffness: 120, damping: 4, mass: 1.2 });
// '4152ms linear(0, 0.014 0.41%, …, 1)'

const card = document.querySelector<HTMLElement>('.card')!;
card.style.transition = `transform ${wobbly}`;
