import * as React from 'react';
import {
  makeStyles,
  tokens,
  shorthands,
  Button,
  Divider,
  Checkbox,
  Label,
  Spinner,
  useId,
} from '@fluentui/react-components';
import { SpinButton } from '@fluentui/react-components/unstable';

const useStyles = makeStyles({
  stressComponent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    maxWidth: '300px',
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding('10px'),
  },
});

export type StressComponentProps = {
  id?: string;
  checked: boolean;
};

export const StressComponent: React.FC<StressComponentProps> = ({ id = '', checked }) => {
  const styles = useStyles();
  const checkboxId = useId('checkbox');

  return (
    <div className={styles.stressComponent} id={id}>
      <Button>A button</Button>
      <Divider />
      <Label htmlFor={checkboxId}>Check me out</Label>
      <Checkbox id={checkboxId} checked={checked} />
      <Divider />
      <Spinner />
      <Divider />
      <SpinButton defaultValue={0} />
      <Divider />
    </div>
  );
};
