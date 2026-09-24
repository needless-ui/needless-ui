import { Component, computed, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiPopover, NuiPopoverTrigger } from '@needless-ui/angular/popover';

@Component({
  selector: 'popover-filters-example',
  imports: [NuiButton, NuiPopover, NuiPopoverTrigger],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class PopoverFiltersExample {
  protected readonly states = [
    { id: 'open', label: 'Open' },
    { id: 'review', label: 'In review' },
    { id: 'closed', label: 'Closed' },
  ];
  protected readonly shown = signal<ReadonlySet<string>>(new Set(['open', 'review']));
  protected readonly summary = computed(
    () =>
      this.states
        .filter((state) => this.shown().has(state.id))
        .map((state) => state.label.toLowerCase())
        .join(', ') || 'no',
  );

  protected toggle(id: string): void {
    this.shown.update((shown) => {
      const next = new Set(shown);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }
}
