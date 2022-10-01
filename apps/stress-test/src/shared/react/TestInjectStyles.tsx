import * as React from 'react';
import { styleInjector } from '../css/injectStyles';
// import { performanceMeasure } from '../utils/performanceMeasure';
import { ReactSelectorTree } from './ReactSelectorTree';
import type { TestProps } from './types';

export const TestInjectStyles: React.FC<TestProps> = ({ tree, selectors, componentRenderer, testOptions }) => {
  // eslint-disable-next-line no-restricted-properties
  React.useEffect(() => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        styleInjector(selectors);
        performance.mark('start');
        requestAnimationFrame(() => {
          performance.measure('stress', 'start');
        });
        // performanceMeasure();
      });
    }, 2000);
  }, []);

  return <ReactSelectorTree tree={tree} componentRenderer={componentRenderer} />;
};
