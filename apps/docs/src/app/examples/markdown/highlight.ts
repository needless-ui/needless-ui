import { Component } from '@angular/core';
import { NuiMarkdown, NuiMarkdownCode } from '@needless-ui/angular/markdown';

interface Token {
  text: string;
  kind: 'keyword' | 'string' | 'comment' | 'number' | null;
}

/** A tiny tokenizer for the demo. In an app, use Shiki, Prism or highlight.js. */
const TOKENS =
  /(\/\/.*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'])*'?|"(?:\\.|[^"])*"?|`(?:\\.|[^`])*`?)|\b(\d+(?:\.\d+)?)\b|\b(const|let|var|function|return|import|from|export|class|new|if|else|for|of|await|async|readonly|type|interface)\b/g;

function highlight(code: string): Token[] {
  const tokens: Token[] = [];
  let at = 0;
  for (const match of code.matchAll(TOKENS)) {
    if (match.index > at) tokens.push({ text: code.slice(at, match.index), kind: null });
    const kind = match[1] ? 'comment' : match[2] ? 'string' : match[3] ? 'number' : 'keyword';
    tokens.push({ text: match[0], kind });
    at = match.index + match[0].length;
  }
  if (at < code.length) tokens.push({ text: code.slice(at), kind: null });
  return tokens;
}

@Component({
  selector: 'markdown-highlight-example',
  imports: [NuiMarkdown, NuiMarkdownCode],
  templateUrl: './highlight.html',
  styleUrl: './highlight.css',
})
export class MarkdownHighlightExample {
  protected readonly highlight = highlight;
  protected readonly text = `Count the words in a text:

\`\`\`ts
// Splits on anything that isn't a letter or a digit.
export function count(text: string): number {
  const words = text.split(/[^\\p{L}\\p{N}]+/u);
  return words.filter(Boolean).length; // 0 for ''
}
\`\`\``;
}
