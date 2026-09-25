import { Component, signal } from '@angular/core';
import { NuiEditor, type NuiEditorTool } from '@needless-ui/angular/editor';

@Component({
  selector: 'editor-comment-example',
  imports: [NuiEditor],
  templateUrl: './comment.html',
  styleUrl: './editor.css',
})
export class EditorCommentExample {
  protected readonly html = signal('');
  protected readonly tools: NuiEditorTool[] = [
    'bold',
    'italic',
    'strike',
    'code',
    'link',
    '|',
    'bullet',
    'ordered',
    'quote',
  ];
}
