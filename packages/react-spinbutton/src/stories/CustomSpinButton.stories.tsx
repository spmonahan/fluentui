import * as React from 'react';
import { SpinButtonProps } from '../index';
import { CustomSpinButton } from '../components/SpinButton/CustomSpinButton';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Custom = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };
  return (
    <>
      <Label htmlFor={id}>Controlled CustomSpinButton</Label>
      <CustomSpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        min={5}
        max={15}
        onChange={onSpinButtonChange}
        id={id}
      />
      <p>This is a basic controlled CustomSpinButton example.</p>
    </>
  );
};
