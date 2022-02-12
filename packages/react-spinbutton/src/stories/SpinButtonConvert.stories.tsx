import * as React from 'react';
import { SpinButton, SpinButtonProps, SpinButtonFormatter, SpinButtonParser } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Convert = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);
  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };

  const formatter: SpinButtonFormatter = value => {
    return `${value} cm`;
  };

  const parser: SpinButtonParser = formattedValue => {
    if (formattedValue === null) {
      return NaN;
    }
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

  return (
    <>
      <Label htmlFor={id}>Length (cm)</Label>
      <SpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        min={0}
        max={9999999}
        onChange={onSpinButtonChange}
        formatter={formatter}
        parser={parser}
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
