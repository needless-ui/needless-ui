import { Component } from '@angular/core';
import { NuiMarkdown } from '@needless-ui/angular/markdown';
import { SAMPLE } from './sample';

@Component({
  selector: 'markdown-document-example',
  imports: [NuiMarkdown],
  template: `<nui-markdown [text]="text" />`,
  styleUrl: './document.css',
})
export class MarkdownDocumentExample {
  protected readonly text = SAMPLE;
}
