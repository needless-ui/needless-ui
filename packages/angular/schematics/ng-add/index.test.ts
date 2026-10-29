import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  SchematicTestRunner,
  type UnitTestTree,
} from '@angular-devkit/schematics/testing/index.js';

// The schematic runs as the CLI loads it: compiled, from the package's dist.
const collection = fileURLToPath(
  new URL('../../../../dist/needless-ui/angular/schematics/collection.json', import.meta.url),
);
if (!existsSync(collection)) throw new Error('Build the Angular package first: pnpm build');

const runner = new SchematicTestRunner('@needless-ui/angular', collection);

/** A workspace with the given apps, as `ng new` and `ng generate application` make them. */
async function workspace(...apps: { name: string; style?: string }[]): Promise<UnitTestTree> {
  let tree = await runner.runExternalSchematic('@schematics/angular', 'workspace', {
    name: 'workspace',
    version: '22.0.0',
    newProjectRoot: 'projects',
  });
  for (const { name, style = 'css' } of apps) {
    tree = await runner.runExternalSchematic(
      '@schematics/angular',
      'application',
      { name, style, skipTests: true, ssr: false },
      tree,
    );
  }
  return tree;
}

const ngAdd = (tree: UnitTestTree, options: { project?: string } = {}) =>
  runner.runSchematic('ng-add', options, tree);

describe('ng add @needless-ui/angular', () => {
  it('adds Angular Aria and the CDK for the app’s Angular major', async () => {
    const tree = await ngAdd(await workspace({ name: 'app' }));
    const { dependencies } = tree.readJson('package.json') as {
      dependencies: Record<string, string>;
    };
    const major = /\d+/.exec(dependencies['@angular/core'])?.[0];
    assert.equal(dependencies['@angular/aria'], `^${major}.0.0`);
    assert.equal(dependencies['@angular/cdk'], `^${major}.0.0`);
    assert.notEqual(dependencies['@angular/forms'], `^${major}.0.0`, 'keeps the app’s own range');
    assert.ok(runner.tasks.some((task) => task.name === 'node-package'));
  });

  it('imports the stylesheet at the top of styles.css, after the layer order', async () => {
    const tree = await ngAdd(await workspace({ name: 'app' }));
    const css = tree.readText('projects/app/src/styles.css');
    assert.match(
      css,
      /^\/\*.*\*\/\n@layer reset, nui, app;\n@import '@needless-ui\/css';\n\n\/\* You can add global styles/,
    );
  });

  it('puts Needless UI between Tailwind’s base styles and its utilities', async () => {
    const tree = await workspace({ name: 'app' });
    tree.overwrite('projects/app/src/styles.css', '@import "tailwindcss";\n');
    const css = (await ngAdd(tree)).readText('projects/app/src/styles.css');
    assert.match(
      css,
      /\n@layer theme, base, nui, components, utilities;\n@import '@needless-ui\/css';\n\n@import "tailwindcss";\n$/,
    );
  });

  it('keeps @charset first', async () => {
    const tree = await workspace({ name: 'app' });
    tree.overwrite('projects/app/src/styles.css', '@charset "utf-8";\nbody { margin: 0; }\n');
    const css = (await ngAdd(tree)).readText('projects/app/src/styles.css');
    assert.match(css, /^@charset "utf-8";\n\/\*.*\*\/\n@layer reset, nui, app;\n/);
    assert.match(css, /@import '@needless-ui\/css';\n\nbody \{ margin: 0; \}\n$/);
  });

  it('uses @use in Sass, after the app’s own @use rules', async () => {
    const tree = await workspace({ name: 'app', style: 'scss' });
    tree.overwrite(
      'projects/app/src/styles.scss',
      "@use 'sass:math';\n\nbody {\n  margin: 0;\n}\n",
    );
    const scss = (await ngAdd(tree)).readText('projects/app/src/styles.scss');
    assert.equal(scss, "@use 'sass:math';\n@use '@needless-ui/css';\n\nbody {\n  margin: 0;\n}\n");
  });

  it('changes nothing the second time', async () => {
    const files = (tree: UnitTestTree) =>
      Object.fromEntries(tree.files.map((file) => [file, tree.read(file)]));
    const once = await ngAdd(await workspace({ name: 'app' }));
    const before = files(once);
    assert.deepEqual(files(await ngAdd(once)), before);
  });

  it('asks which app to set up when there are several', async () => {
    const tree = await workspace({ name: 'shop' }, { name: 'admin' });
    await assert.rejects(ngAdd(tree), /pick one with --project/);
    const result = await ngAdd(tree, { project: 'admin' });
    assert.match(result.readText('projects/admin/src/styles.css'), /@import '@needless-ui\/css';/);
    assert.doesNotMatch(result.readText('projects/shop/src/styles.css'), /needless-ui/);
  });

  it('leaves other stylesheets alone and says what to do', async () => {
    const logs: string[] = [];
    const subscription = runner.logger.subscribe((entry) => logs.push(entry.message));
    const tree = await ngAdd(await workspace({ name: 'app', style: 'less' }));
    subscription.unsubscribe();
    assert.doesNotMatch(tree.readText('projects/app/src/styles.less'), /needless-ui/);
    assert.ok(logs.some((message) => message.includes('styles.less yourself')));
  });
});
