import { Component, signal } from '@angular/core';
import { NuiEditor, type NuiEditorTool } from '@needless-ui/angular/editor';

@Component({
  selector: 'editor-lists-example',
  imports: [NuiEditor],
  templateUrl: './lists.html',
  styleUrl: './editor.css',
})
export class EditorListsExample {
  protected readonly markdown = signal(
    ['- Lisbon', '  - Book the flights', '  - Find a place to stay', '- Packing'].join('\n'),
  );
  protected readonly tools: NuiEditorTool[] = [
    'bold',
    'italic',
    'link',
    '|',
    'bullet',
    'ordered',
    'outdent',
    'indent',
    '|',
    'undo',
    'redo',
  ];
}
