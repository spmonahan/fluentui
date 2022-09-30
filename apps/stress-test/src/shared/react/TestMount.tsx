import * as React from 'react';
import { styleInjector } from '../css/injectStyles';
import { requestPostAnimationFrame } from '../utils/requestPostAnimationFrame';
import { ReactSelectorTree } from './ReactSelectorTree';
import type { TestProps } from './types';

// const onRender: React.ProfilerOnRenderCallback = (profilerId, mode, actualTime, baseTime, startTime, commitTime) => {
//   requestPostAnimationFrame(() => {
//     console.log({
//       profilerId,
//       mode,
//       actualTime,
//       baseTime,
//       startTime,
//       commitTime,
//     });
//     console.log('now', performance.now());
//     performance.mark('onRender');
//     // performance.measure('stress', 'start');
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     performance.measure('stress', {
//       start: startTime,
//       end: commitTime,
//     });
//   });
// };

export const TestMount: React.FC<TestProps> = ({ tree, selectors, componentRenderer, testOptions }) => {
  // eslint-disable-next-line no-restricted-properties
  React.useLayoutEffect(() => {
    requestPostAnimationFrame(() => {
      performance.measure('stress', 'start');
    });
  }, []);

  const ref = React.useRef(false);
  if (!ref.current) {
    ref.current = true;
    performance.mark('start');
    if (testOptions.withStyles === 'true') {
      styleInjector(selectors);
    }
  }

  return (
    // <React.Profiler id="mount" onRender={onRender}>
    <ReactSelectorTree tree={tree} componentRenderer={componentRenderer} />
    // </React.Profiler>
  );
};
