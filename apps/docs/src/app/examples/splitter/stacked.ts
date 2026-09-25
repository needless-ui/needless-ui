import { Component, computed, signal } from '@angular/core';
import { NuiSplitter, NuiSplitterHandle, NuiSplitterPane } from '@needless-ui/angular/splitter';

@Component({
  selector: 'splitter-stacked-example',
  imports: [NuiSplitter, NuiSplitterHandle, NuiSplitterPane],
  templateUrl: './stacked.html',
  styleUrl: './stacked.css',
})
export class SplitterStackedExample {
  protected readonly sizes = signal<readonly number[]>([65, 35]);
  protected readonly rounded = computed(() => this.sizes().map((size) => Math.round(size)));
}
