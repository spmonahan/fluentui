import * as React from 'react';
import { SpinButtonProps } from '../index';
import { ContextSpinButton } from '../components/SpinButton/ContextSpinButton';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

import { CustomContext, Customizer } from '../contexts/CustomProviders';

const customizers: Customizer = {
  parser: formattedValue => parseFloat(formattedValue.replace('$', '')),
  formatter: value => `$${value.toFixed(2)}`,
};

export const ContextCustom = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };
  return (
    <>
      <Label htmlFor={id}>Controlled Custom ContextSpinButton</Label>
      <CustomContext.Provider value={customizers}>
        <ContextSpinButton
          incrementControl="+"
          decrementControl="-"
          value={spinButtonValue}
          min={5}
          max={15}
          onChange={onSpinButtonChange}
          id={id}
        />
      </CustomContext.Provider>
      <p>This is a basic controlled Custom ContextSpinButton example.</p>
    </>
  );
};
