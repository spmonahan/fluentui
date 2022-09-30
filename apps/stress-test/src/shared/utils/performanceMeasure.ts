import { requestPostAnimationFrame } from './requestPostAnimationFrame';

export type PerformanceMeasureFn = (measureName?: string, startMark?: string) => void;

export const performanceMeasure: PerformanceMeasureFn = (measureName = 'stress', startMark = 'start') => {
  performance.mark(startMark);
  console.log('yo', performance.now());

  requestPostAnimationFrame(() => {
    console.log('end', performance.now());
    performance.measure(measureName, startMark);
  });
};
