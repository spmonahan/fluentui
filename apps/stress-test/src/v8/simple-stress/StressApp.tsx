import * as React from 'react';
import { getTestParams } from '../../shared/testParams';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressContainer } from './StressContainer';

export const StressApp = () => {
  const [numChildren, setNumChildren] = React.useState(100);

  if (getTestParams().test === 'add-node') {
    React.useEffect(() => {
      performanceMeasure('stress', 'start');
      setNumChildren(200);
    }, []);
  } else if (getTestParams().test === 'remove-node') {
    React.useEffect(() => {
      performanceMeasure('stress', 'start');
      setNumChildren(1);
    }, []);
  }

  return <StressContainer numChildren={numChildren} />;
};
