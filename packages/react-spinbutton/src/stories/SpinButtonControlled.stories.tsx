import * as React from 'react';
import { SpinButton, SpinButtonProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Controlled = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value, data.textValue);
    if (data.value !== undefined) {
      setSpinButtonValue(data.value);
    } else if (data.textValue !== undefined) {
      const newValue = parseFloat(data.textValue);
      if (!Number.isNaN(newValue)) {
        setSpinButtonValue(newValue);
      } else {
        console.error(`"${data.textValue}" is not a valid value.`);
      }
    } // else ... should not happen
  };

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
