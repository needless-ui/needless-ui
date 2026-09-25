import { Component, signal } from '@angular/core';
import { NuiEditor } from '@needless-ui/angular/editor';

@Component({
  selector: 'editor-markdown-example',
  imports: [NuiEditor],
  templateUrl: './markdown.html',
  styleUrl: './editor.css',
})
export class EditorMarkdownExample {
  protected readonly markdown = signal(
    [
      '## What’s new',
      '',
      '- **Faster** builds, with a cache',
      '- A `--watch` flag',
      '  - that reruns only what changed',
      '',
      '> Try it with `pnpm dev`.',
    ].join('\n'),
  );
}
