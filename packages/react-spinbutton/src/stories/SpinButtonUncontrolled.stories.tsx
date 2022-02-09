import * as React from 'react';
import { SpinButton } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { Button } from '@fluentui/react-button';

export const Uncontrolled = () => {
  const id = useId();
  const spinButtonRef = React.useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    console.log('Uncontrolled SpinButton value:', spinButtonRef.current?.value);
  };

  return (
    <>
      <Label htmlFor={id}>Uncontrolled SpinButton</Label>
      <SpinButton
        ref={spinButtonRef}
        incrementControl="+"
        decrementControl="-"
        defaultValue={10}
        min={5}
        max={15}
        id={id}
      />
      <Button onClick={onButtonClick}>Submit</Button>
    </>
  );
};
