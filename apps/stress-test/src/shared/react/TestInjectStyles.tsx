import * as React from 'react';
import { styleInjector } from '../css/injectStyles';
import { performanceMeasure } from '../utils/performanceMeasure';
import { ReactSelectorTree } from './ReactSelectorTree';
import type { TestProps } from './types';

declare global {
  interface Window {
    __adoptedStylesheets__: CSSStyleSheet[];
  }
}

export const TestInjectStyles: React.FC<TestProps> = ({ tree, selectors, componentRenderer, testOptions }) => {
  // eslint-disable-next-line no-restricted-properties
  React.useLayoutEffect(() => {
    const { disableTest, targetId, constructableStylesheets } = testOptions;
    if (disableTest !== 'true') {
      setTimeout(() => {
        const target = document.getElementById(targetId as string) || undefined;

        const useConstructableStylesheets = constructableStylesheets === 'true';
        styleInjector(selectors, { target, constructableStylesheets: useConstructableStylesheets });
        if (useConstructableStylesheets && target?.shadowRoot) {
          target.shadowRoot.adoptedStyleSheets = [...window.__adoptedStylesheets__];
        }
        performanceMeasure();
      }, 2000);
    }
  }, []);

  return <ReactSelectorTree tree={tree} componentRenderer={componentRenderer} />;
};
