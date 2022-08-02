import * as React from 'react';

export type PerformanceMeasureFn = (measureName: string, startMark: string) => void;

export const usePerformanceMeasure: PerformanceMeasureFn = (measureName, startMark) => {
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

export const performanceMeasure: PerformanceMeasureFn = (measureName, startMark) => {
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
};
