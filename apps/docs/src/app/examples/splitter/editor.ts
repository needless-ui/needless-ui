import { Component, signal } from '@angular/core';
import { NuiSplitter, NuiSplitterHandle, NuiSplitterPane } from '@needless-ui/angular/splitter';

@Component({
  selector: 'splitter-editor-example',
  imports: [NuiSplitter, NuiSplitterHandle, NuiSplitterPane],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class SplitterEditorExample {
  protected readonly files = ['app.ts', 'app.html', 'app.css', 'main.ts'];
  protected readonly open = signal('app.ts');
}
