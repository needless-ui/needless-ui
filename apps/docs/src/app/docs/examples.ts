import type { Type } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { isComponentId } from './ids';

/**
 * Loads a component page's examples before the page renders, on the server and in
 * the browser alike, so hydration finds them in place. Each page loads only its
 * own examples, and the registry comes with the first one.
 */
export const examplesResolver: ResolveFn<Record<string, Type<unknown>>> = async (route) => {
  const id = route.paramMap.get('id');
  if (!id || !isComponentId(id)) return {};
  const { COMPONENT_DOCS } = await import('./registry');
  const examples = COMPONENT_DOCS[id].examples;
  const types = await Promise.all(examples.map((example) => example.load()));
  return Object.fromEntries(examples.map((example, i) => [example.id, types[i]]));
};
