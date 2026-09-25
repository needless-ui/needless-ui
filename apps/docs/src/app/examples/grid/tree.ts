import { Component, signal } from '@angular/core';
import { NuiGrid, type NuiGridColumn } from '@needless-ui/angular/grid';

interface Entry {
  path: string;
  name: string;
  kind: 'Folder' | 'File';
  size: number;
  modified: string;
  children?: Entry[];
}

const file = (folder: string, name: string, size: number, modified: string): Entry => ({
  path: `${folder}/${name}`,
  name,
  kind: 'File',
  size,
  modified,
});

const folder = (parent: string, name: string, children: Entry[]): Entry => ({
  path: `${parent}/${name}`,
  name,
  kind: 'Folder',
  // A folder weighs what's in it.
  size: children.reduce((sum, child) => sum + child.size, 0),
  modified: children
    .map((child) => child.modified)
    .sort()
    .at(-1)!,
  children,
});

const TREE = [
  folder('', 'src', [
    folder('/src', 'app', [
      file('/src/app', 'app.ts', 2_310, '2026-09-21'),
      file('/src/app', 'app.html', 1_120, '2026-09-24'),
      folder('/src/app', 'pages', [
        file('/src/app/pages', 'home.ts', 4_860, '2026-09-18'),
        file('/src/app/pages', 'settings.ts', 3_020, '2026-09-25'),
      ]),
    ]),
    file('/src', 'main.ts', 410, '2026-08-30'),
    file('/src', 'styles.css', 12_480, '2026-09-12'),
  ]),
  folder('', 'public', [
    file('/public', 'favicon.svg', 1_640, '2026-07-02'),
    file('/public', 'robots.txt', 64, '2026-07-02'),
  ]),
  file('', 'package.json', 1_980, '2026-09-19'),
];

@Component({
  selector: 'grid-tree-example',
  imports: [NuiGrid],
  templateUrl: './tree.html',
})
export class GridTreeExample {
  protected readonly entries = signal(TREE);
  protected readonly expanded = signal<readonly unknown[]>(['/src']);
  protected readonly children = (entry: Entry) => entry.children;
  protected readonly rowId = (entry: Entry) => entry.path;
  protected readonly columns: NuiGridColumn<Entry>[] = [
    { id: 'name', header: 'Name', flex: 1, minWidth: 220 },
    { id: 'kind', header: 'Kind', width: 110 },
    {
      id: 'size',
      header: 'Size',
      type: 'number',
      width: 120,
      format: (bytes: number) =>
        `${(bytes / 1000).toLocaleString('en', { maximumFractionDigits: 1 })} kB`,
    },
    { id: 'modified', header: 'Modified', type: 'date', width: 140 },
  ];
}
