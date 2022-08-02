import { mergeStyleSets } from '@fluentui/react';
import * as React from 'react';
import { usePerformanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressComponent } from './StressComponent';

const styles = mergeStyleSets({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
});

export type StressContainerProps = {
  numChildren?: number;
};

export const StressContainer: React.FC<StressContainerProps> = ({ numChildren = 10 }) => {
  usePerformanceMeasure('stress-container', 'start');

  const kids = new Array(numChildren).fill('1');
  return (
    <div className={styles.container}>
      {kids.map((_, index) => {
        return <StressComponent />;
      })}
    </div>
  );
};
