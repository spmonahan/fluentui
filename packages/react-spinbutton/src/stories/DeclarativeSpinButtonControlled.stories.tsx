import * as React from 'react';
import { DeclarativeSpinButton } from '../components/SpinButton/DeclarativeSpinButton';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const DeclControlled = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState<number>(10);
  const [formattedSpinButtonValue, setFormattedSpinButtonValue] = React.useState<string>('$10');
  const onSpinButtonChange = (_ev, data) => {
    if (typeof data.value === 'number') {
      console.log('[onSpinButtonChange] number', data.value);
      setSpinButtonValue(data.value);
      setFormattedSpinButtonValue(`$${data.value}`);
    } else if (typeof data.value === 'string') {
      console.log('[onSpinButtonChange] string', data.value);
      const newValue = parseFloat(data.value.replace(/\$/g, ''));
      setSpinButtonValue(newValue);
      setFormattedSpinButtonValue(`$${newValue}`);
    }
  };
  return (
    <>
      <Label htmlFor={id}>Controlled DeclarativeSpinButton</Label>
      <DeclarativeSpinButton
        incrementControl="+"
        decrementControl="-"
        value={spinButtonValue}
        formattedValue={formattedSpinButtonValue}
        min={5}
        max={15}
        onChange={onSpinButtonChange}
        id={id}
      />
      <p>
        This is a "declarative" implementation of SpinButton. Compared with the "normal" SpinButton implementation this
        implemention removes the <code>parser</code> and <code>formatter</code>
        function props in favor of <code>value</code> and <code>formattedValue</code> props. Value is a number like the
        normal implementation and formattedValue is a string.
      </p>
      <p>
        Compared with the "normal" implementation this makes the onChange handler somewhat more complex as{' '}
        <code>data.value</code> can now be a number or a string. Parsing and formatting logic still the user's
        responsibility so the complexity of that is the same for both implementations.
      </p>
      <p>
        The "normal" implementation can provide some default behavior for "bad" values. In that implementation if you
        type bad value into the input field (e.g., "cats") the component will continue to display "cats" while
        propagating <code>NaN</code>. This implementation will display NaN as the user is entirely responsible for what
        is displayed. The declarative behavior is nice because it gives users total control of what is displayed in a
        "bad" state but is not so nice because the "simple" default state is harder to achieve -- they have to do more
        up front to use this component. The "normal" implementation still provides users this level of controll as they
        control the formatting function.
      </p>
      <p>
        The primary downside of this approach is that formatting is only possible when using this as a controlled
        component. The "normal" implementation applies formatting for both controlled and uncontrolled components but as
        this depends on the onChange handler it only works in controlled cases.
      </p>
    </>
  );
};
