/**
 * `ng add @needless-ui/angular`: adds Angular Aria and the CDK, which the
 * components build on, and imports the stylesheet at the top of the app's
 * global styles. Running it again changes nothing.
 */
import { chain, SchematicsException, type Rule } from '@angular-devkit/schematics';
import {
  addDependency,
  ExistingBehavior,
  readWorkspace,
  type ProjectDefinition,
  type WorkspaceDefinition,
} from '@schematics/angular/utility';

export interface Schema {
  /** The application to set up. Defaults to the only application in the workspace. */
  project?: string;
}

const GUIDE = 'https://www.needlessui.com/guides/getting-started#styles';

/** Tailwind CSS 4, which declares its own cascade layers. */
const TAILWIND = /@import\s+(?:url\(\s*)?['"]tailwindcss(?:\/[^'"]*)?['"]/;

export default function ngAdd(options: Schema): Rule {
  return async (tree) => {
    const project = pickProject(await readWorkspace(tree), options.project);
    // Angular Aria and the CDK are released with Angular, so they take the
    // app's Angular major; peers the app already has are left alone.
    const range = `^${angularMajor(tree.readText('package.json'))}.0.0`;
    return chain([
      ...['@angular/aria', '@angular/cdk', '@angular/forms'].map((name) =>
        addDependency(name, range, { existing: ExistingBehavior.Skip }),
      ),
      importStyles(project),
    ]);
  };
}

function pickProject(workspace: WorkspaceDefinition, name: string | undefined): ProjectDefinition {
  if (name) {
    const project = workspace.projects.get(name);
    if (!project) throw new SchematicsException(`There's no project named "${name}" here.`);
    return project;
  }
  const apps = [...workspace.projects.values()].filter(
    (project) => project.extensions['projectType'] === 'application',
  );
  if (apps.length === 1) return apps[0];
  throw new SchematicsException(
    apps.length
      ? 'This workspace has more than one application: pick one with --project.'
      : 'This workspace has no application to add Needless UI to.',
  );
}

function angularMajor(packageJson: string): string {
  const { dependencies } = JSON.parse(packageJson) as { dependencies?: Record<string, string> };
  return /\d+/.exec(dependencies?.['@angular/core'] ?? '')?.[0] ?? '22';
}

function importStyles(project: ProjectDefinition): Rule {
  return (tree, context) => {
    const file = globalStylesheet(project);
    if (!file || !tree.exists(file)) {
      context.logger.warn(`No global stylesheet found. Import @needless-ui/css yourself: ${GUIDE}`);
      return;
    }
    const source = tree.readText(file);
    if (source.includes('@needless-ui/css')) {
      context.logger.info(`${file} already imports @needless-ui/css.`);
      return;
    }
    if (file.endsWith('.css')) tree.overwrite(file, withCssImport(source));
    else if (file.endsWith('.scss')) tree.overwrite(file, withSassUse(source));
    else {
      context.logger.warn(`Import @needless-ui/css in ${file} yourself: ${GUIDE}`);
      return;
    }
    context.logger.info(`Imported @needless-ui/css in ${file}.`);
  };
}

/** The app's main stylesheet: `styles.css` or `styles.scss` as `ng new` makes it, or the first one. */
function globalStylesheet(project: ProjectDefinition): string | undefined {
  const styles = project.targets.get('build')?.options?.['styles'];
  if (!Array.isArray(styles)) return undefined;
  const files = styles.flatMap((entry) => {
    if (typeof entry === 'string') return [entry];
    if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
      const input = entry['input'];
      if (typeof input === 'string' && entry['inject'] !== false) return [input];
    }
    return [];
  });
  return files.find((file) => /(^|\/)styles\.s?css$/.test(file)) ?? files[0];
}

/**
 * Declares the layer order, then imports the stylesheet, which must come before
 * any other rule. With Tailwind, components go after its base styles (so its
 * reset doesn't undo them) and before its utilities (so utilities win).
 */
function withCssImport(source: string): string {
  const lines = TAILWIND.test(source)
    ? [
        '/* Needless UI goes after Tailwind’s base styles and before its utilities. */',
        '@layer theme, base, nui, components, utilities;',
      ]
    : [
        '/* Global resets go in @layer reset, so they never override Needless UI. */',
        '@layer reset, nui, app;',
      ];
  lines.push("@import '@needless-ui/css';");
  // @charset has to stay first.
  const charset = /^@charset\s+"[^"]*";\s*/.exec(source)?.[0] ?? '';
  const rest = source.slice(charset.length);
  return `${charset}${lines.join('\n')}\n${rest ? `\n${rest}` : ''}`;
}

/** Sass wants @use rules before any other rule, so it goes after the last one. */
function withSassUse(source: string): string {
  const line = "@use '@needless-ui/css';\n";
  const last = [...source.matchAll(/^@(?:use|forward)\b[^;]*;[^\S\n]*\n?/gm)].at(-1);
  if (!last) return source ? `${line}\n${source}` : line;
  const end = last.index + last[0].length;
  const head = source.slice(0, end);
  return `${head}${head.endsWith('\n') ? '' : '\n'}${line}${source.slice(end)}`;
}
