import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiTour, type NuiTourStep } from '@needless-ui/angular/tour';

@Component({
  selector: 'tour-basics-example',
  imports: [NuiButton, NuiTour],
  templateUrl: './basics.html',
  styleUrl: './tour.css',
})
export class TourBasicsExample {
  private readonly create = viewChild.required<ElementRef<HTMLElement>>('create');
  private readonly search = viewChild.required<ElementRef<HTMLElement>>('search');
  private readonly share = viewChild.required<ElementRef<HTMLElement>>('share');

  protected readonly touring = signal(false);
  protected readonly outcome = signal('');

  protected readonly steps: NuiTourStep[] = [
    {
      title: 'Welcome to Notes',
      content: 'A quick look around: three stops, and you can leave at any time.',
    },
    {
      target: () => this.create().nativeElement,
      title: 'Start a note',
      content: 'Every note starts here. Notes save as you type.',
    },
    {
      target: () => this.search().nativeElement,
      title: 'Find anything',
      content: 'Search looks through titles and text alike.',
    },
    {
      target: () => this.share().nativeElement,
      title: 'Share it',
      content: 'Send a link, and choose who can edit.',
      side: 'bottom',
      align: 'end',
    },
  ];
}
