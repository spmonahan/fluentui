import * as React from 'react';
import { SpinButton } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { SpinButtonFormatter, SpinButtonParser } from '../SpinButton';

export const UncontrolledFormatting = () => {
  const id = useId();
  const spinButtonRef = React.useRef<HTMLInputElement>(null);

  const parser: SpinButtonParser = formattedValue => {
    return parseFloat(formattedValue.replace(/\$/g, ''));
  };

  const formatter: SpinButtonFormatter = value => {
    return `$${value}`;
  };

  return (
    <>
      <Label htmlFor={id}>Uncontrolled SpinButton with Formatting</Label>
      <SpinButton
        ref={spinButtonRef}
        incrementControl="+"
        decrementControl="-"
        defaultValue={10}
        parser={parser}
        formatter={formatter}
        min={5}
        max={15}
        id={id}
      />
      <p>
        This story demonstrates how the <code>parser</code> and <code>formatter</code> props still work when SpinButton
        is uncontrolled.
      </p>
    </>
  );
};
