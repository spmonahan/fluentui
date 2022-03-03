import * as React from 'react';
import { SpinButton, SpinButtonProps, SpinButtonFormatter, SpinButtonParser } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const DeclarativeDatePicker = () => {
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
      return spinButtonValue.toString();
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

  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(1);
  const [spinButtonDisplayValue, setSpinButtonDisplayValue] = React.useState(formatter(1));

  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    if (data.value !== undefined) {
      console.log('onSpinButtonChange', data.value);
      setSpinButtonValue(data.value);
      setSpinButtonDisplayValue(formatter(data.value));
    } else if (data.textValue !== undefined) {
      const newValue = parser(data.textValue);
      setSpinButtonValue(newValue);
      setSpinButtonDisplayValue(formatter(newValue));
    }
  };

  return (
    <>
      <Label htmlFor={id}>Months</Label>
      <SpinButton
        incrementButton="+"
        decrementButton="-"
        value={spinButtonValue}
        displayValue={spinButtonDisplayValue}
        min={1}
        max={12}
        onChange={onSpinButtonChange}
        formatter={formatter}
        parser={parser}
        id={id}
      />
      <p>
        WAI-ARIA uses date pickers as an example use case for SpinButtons. This story demonstrates how to implement{' '}
        <code>parser</code> and <code>formatter</code> functions to display months as string in a SpinButton.
      </p>
      <p>
        Months can be typed in as strings ("March") or numbers (7). Increment and decrement functionality steps through
        the months in order.
      </p>
    </>
  );
};
