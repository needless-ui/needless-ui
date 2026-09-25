import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiTour, type NuiTourStep } from '@needless-ui/angular/tour';

@Component({
  selector: 'tour-interactive-example',
  imports: [NuiButton, NuiTour],
  templateUrl: './interactive.html',
  styleUrl: './tour.css',
})
export class TourInteractiveExample {
  private readonly toggle = viewChild.required<ElementRef<HTMLElement>>('toggle');
  private readonly theme = viewChild<ElementRef<HTMLElement>>('theme');

  protected readonly touring = signal(false);
  protected readonly settings = signal(false);
  protected readonly dark = signal(false);

  protected readonly steps: NuiTourStep[] = [
    {
      target: () => this.toggle().nativeElement,
      title: 'Settings',
      content: 'Everything you can change lives behind this button.',
      side: 'end',
    },
    {
      // The panel opens before the step shows, so its switch is there to point at.
      beforeShow: () => {
        this.settings.set(true);
        return new Promise((resolve) => requestAnimationFrame(() => resolve()));
      },
      target: () => this.theme()?.nativeElement ?? null,
      title: 'Try it',
      content: 'Switch dark mode on: the step lets you use what it points at.',
      interactive: true,
    },
  ];
}
