import * as React from 'react';
import { SpinButton } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { Button } from '@fluentui/react-button';

export const Uncontrolled = () => {
  const id = useId();
  const defaultValue = 10;
  const spinButtonRef = React.useRef<HTMLInputElement>(null);
  const [refValue, setRefValue] = React.useState(defaultValue);

  const onButtonClick = () => {
    console.log('Uncontrolled SpinButton value:', spinButtonRef.current?.value);
    setRefValue(parseFloat(spinButtonRef.current?.value));
  };

  return (
    <>
      <Label htmlFor={id}>Uncontrolled SpinButton</Label>
      <SpinButton
        ref={spinButtonRef}
        incrementControl="+"
        decrementControl="-"
        defaultValue={defaultValue}
        min={5}
        max={15}
        id={id}
      />
      <Button onClick={onButtonClick}>Click to get value from ref</Button>
      <p>Value from ref: {refValue}</p>
      <p>A basic uncontrolled usage example.</p>
    </>
  );
};
