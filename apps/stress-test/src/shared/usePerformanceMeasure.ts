import * as React from 'react';

export type UsePerformanceMeasureFn = (measureName: string, startMark: string) => void;

export const usePerformanceMeasure: UsePerformanceMeasureFn = (measureName, startMark) => {
  React.useEffect(() => {
    performance.mark(startMark);

    // requestPostAnimationFrame polyfill
    requestAnimationFrame(() => {
      addEventListener(
        'message',
        () => {
          performance.measure(measureName, startMark);
        },
        { once: true },
      );
      postMessage('', '*');
    });
  });
};
