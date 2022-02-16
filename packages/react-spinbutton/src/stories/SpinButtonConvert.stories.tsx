import * as React from 'react';
import { SpinButton, SpinButtonProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

type FormatterFn = (value: number) => string;
type ParserFn = (formattedValue: string) => number;

const formatter: FormatterFn = value => {
  return `${value} cm`;
};

const parser: ParserFn = formattedValue => {
  const result = /([\d\.\d]+)(\s?)+(in|ft|"|km|cm|mi|m)?/i.exec(formattedValue);
  if (!result) {
    return NaN;
  }

  const [, length, , unit = 'cm'] = result;

  const lengthNum = parseFloat(length);
  console.log(lengthNum, unit);
  switch (unit.toLowerCase()) {
    case 'in':
    case '"':
      return lengthNum * 2.54;

    case 'ft':
      return lengthNum * 12 * 2.54;

    case 'km':
      return lengthNum * 1000 * 100;

    case 'mi':
      return lengthNum * 5280 * 12 * 2.54;

    case 'm':
      return lengthNum * 100;

    case 'cm':
      return lengthNum;

    default:
      return NaN;
  }
};

export const Convert = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const [spinButtonDisplayValue, setSpinButtonDisplayValue] = React.useState(formatter(spinButtonValue));
  const onSpinButtonChange: SpinButtonProps['onChange'] = React.useCallback(
    (_ev, data) => {
      console.log('onSpinButtonChange', data.value, data.displayValue);
      if (data.value !== undefined) {
        // Value was changed with hotkey or step button
        setSpinButtonValue(data.value);
        setSpinButtonDisplayValue(formatter(data.value));
      } else if (data.displayValue !== undefined) {
        // Value was changed by typing
        // Parse out the number and update the state
        const newValue = parser(data.displayValue);
        if (!Number.isNaN(newValue)) {
          setSpinButtonValue(newValue);
          setSpinButtonDisplayValue(formatter(newValue));
        }
      }
    },
    [setSpinButtonValue, setSpinButtonDisplayValue],
  );

  return (
    <>
      <Label htmlFor={id}>Length (cm)</Label>
      <SpinButton
        incrementButton="+"
        decrementButton="-"
        value={spinButtonValue}
        displayValue={spinButtonDisplayValue}
        min={0}
        max={9999999}
        onChange={onSpinButtonChange}
        id={id}
      />
      <p>
        This example demonstrates how the <code>parser</code> and <code>formatter</code> props can be used to implement
        unit conversion for manual input.
      </p>
      <p>
        The SpinButton will always display valid length values as centimeters but users can type in values with
        different units and the user-implemented <code>parser</code> function will convert the value to centimeters. Try
        typing "1mi" and then blur the input.
      </p>
    </>
  );
};
