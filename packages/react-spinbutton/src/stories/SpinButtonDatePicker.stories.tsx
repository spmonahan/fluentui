import * as React from 'react';
import { SpinButton, SpinButtonProps, SpinButtonFormatter, SpinButtonParser } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const DatePicker = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(1);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };

  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const formatter: SpinButtonFormatter = value => {
    if (value < 1 || value > 12) {
      return spinButtonValue;
    }

    const month = months[value - 1];
    return month.substr(0, 1).toUpperCase() + month.substr(1);
  };

  const parser: SpinButtonParser = formattedValue => {
    const lower = formattedValue.toLowerCase();
    let index = months.indexOf(lower);
    if (index < 0) {
      index = parseFloat(lower);
      if (Number.isNaN(index) || index < 1 || index > 12) {
        return NaN;
      } else {
        return index;
      }
    } else {
      return index + 1;
    }
  };

  return (
    <>
      <Label htmlFor={id}>Months</Label>
      <SpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        min={1}
        max={12}
        onChange={onSpinButtonChange}
        formatter={formatter}
        parser={parser}
        id={id}
      />
    </>
  );
};
