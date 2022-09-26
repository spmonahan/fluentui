import { performanceMeasure } from '../utils/performanceMeasure';
import { TestOptions } from '../utils/testOptions';
import { SelectorTreeNode } from '../tree/types';
import { DOMSelectorTreeComponentRenderer } from './types';
import { renderVanillaSelectorTree } from './VanillaSelectorTree';
import { styleInjector } from '../css/injectStyles';

export const testMount = (
  tree: SelectorTreeNode,
  selectors: string[],
  componentRenderer: DOMSelectorTreeComponentRenderer,
  testOptions: TestOptions,
): HTMLElement => {
  if (testOptions.withStyles === 'true') {
    styleInjector(selectors);
  }

  const vanillaTree = renderVanillaSelectorTree(tree, selectors, componentRenderer, testOptions);

  requestAnimationFrame(() => performanceMeasure());
  return vanillaTree;
};
