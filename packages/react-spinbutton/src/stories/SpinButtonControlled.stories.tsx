import * as React from 'react';
import { SpinButton, SpinButtonProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Controlled = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => setSpinButtonValue(data.value);
  return (
    <>
      <Label htmlFor={id}>Controlled SpinButton</Label>
      <SpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        min={0}
        max={100}
        onChange={onSpinButtonChange}
        id={id}
      />
    </>
  );
};
