import { makeStyles, shorthands } from '@fluentui/react-components';
import * as React from 'react';
import { usePerformanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressComponent } from './StressComponent';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('10px'),
  },
});

export type StressContainerProps = {
  numChildren?: number;
};

export const StressContainer: React.FC<StressContainerProps> = ({ numChildren = 10 }) => {
  usePerformanceMeasure('stress-container', 'start');

  const styles = useStyles();

  const kids = new Array(numChildren).fill('1');
  return (
    <div className={styles.container}>
      {kids.map((_, index) => {
        return <StressComponent />;
      })}
    </div>
  );
};
