import * as React from 'react';
import { SpinButton, SpinButtonProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { SpinButtonFormatter } from '../SpinButton';

export const Controlled = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };

  // const formatter: SpinButtonFormatter = value => {
  //   if (Number.isNaN(value)) {
  //     return 'NaN';
  //   }

  //   return value.toString();
  // };

  const onInput = e => {
    console.log('onInput', e.currentTarget.value);
    const value = e.currentTarget.value.replace(/[^\d]+/g, '');
    console.log('value', value);
    setSpinButtonValue(Number(value));
  };

  return (
    <>
      <Label htmlFor={id}>Controlled SpinButton</Label>
      <SpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        min={5}
        max={15}
        input={{
          onChange: onInput,
        }}
        // formatter={formatter}
        onChange={onSpinButtonChange}
        id={id}
      />
      <p>This is a basic controlled SpinButton example.</p>
    </>
  );
};
