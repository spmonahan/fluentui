import * as React from 'react';
import { SpinButton, SpinButtonProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Controlled = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = React.useCallback(
    (_ev, data) => {
      console.log('onSpinButtonChange', data.value, data.displayValue);
      if (data.value !== undefined) {
        setSpinButtonValue(data.value);
      } else if (data.displayValue !== undefined) {
        const newValue = parseFloat(data.displayValue);
        if (!Number.isNaN(newValue)) {
          setSpinButtonValue(newValue);
        } else {
          console.error(`"${data.displayValue}" is not a valid value.`);
        }
      } // else ... should not happen
    },
    [setSpinButtonValue],
  );

  return (
    <>
      <Label htmlFor={id}>Controlled SpinButton</Label>
      <SpinButton
        incrementButton="+"
        decrementButton="-"
        value={spinButtonValue}
        min={5}
        max={15}
        onChange={onSpinButtonChange}
        id={id}
      />
      <p>This is a basic controlled SpinButton example.</p>
    </>
  );
};
