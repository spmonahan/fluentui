import * as React from 'react';
import { SpinButton, SpinButtonFormatter, SpinButtonParser } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { Button } from '@fluentui/react-button';

export const UncontrolledFormatting = () => {
  const id = useId();
  const defaultValue = 10;
  const spinButtonRef = React.useRef<HTMLInputElement>(null);
  const [refValue, setRefValue] = React.useState(defaultValue);

  const onButtonClick = () => {
    console.log('Uncontrolled Formatting SpinButton value:', spinButtonRef.current?.value);
    setRefValue(parseFloat(spinButtonRef.current?.value));
  };

  const formatter: SpinButtonFormatter = value => {
    return `${value} cm`;
  };

  const parser: SpinButtonParser = formattedValue => {
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
      <Label htmlFor={id}>Uncontrolled SpinButton with Formatting</Label>
      <SpinButton
        ref={spinButtonRef}
        incrementControl="+"
        decrementControl="-"
        defaultValue={defaultValue}
        min={5}
        max={15}
        formatter={formatter}
        parser={parser}
        id={id}
      />
      <Button onClick={onButtonClick}>Click to get value from ref</Button>
      <p>Value from ref: {refValue}</p>
      <p>A basic uncontrolled usage example.</p>
    </>
  );
};
