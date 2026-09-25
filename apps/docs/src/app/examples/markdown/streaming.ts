import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NuiButton } from '@needless-ui/angular/button';
import { NuiMarkdown } from '@needless-ui/angular/markdown';
import { SAMPLE } from './sample';

@Component({
  selector: 'markdown-streaming-example',
  imports: [NuiButton, NuiMarkdown],
  templateUrl: './streaming.html',
  styleUrl: './streaming.css',
})
export class MarkdownStreamingExample {
  protected readonly text = signal('');
  protected readonly streaming = signal(false);
  private timer: ReturnType<typeof setInterval> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearInterval(this.timer));
  }

  /** Writes the sample a few characters at a time, as a model would. */
  protected play(): void {
    clearInterval(this.timer);
    this.text.set('');
    this.streaming.set(true);
    let at = 0;
    this.timer = setInterval(() => {
      at += 1 + Math.floor(Math.random() * 4);
      this.text.set(SAMPLE.slice(0, at));
      if (at >= SAMPLE.length) {
        clearInterval(this.timer);
        this.streaming.set(false);
      }
    }, 30);
  }
}
