import { clamp, useControllableState, useEventCallback } from '@fluentui/react-utilities';
import * as React from 'react';
import { SpinButtonState } from './SpinButton.types';

export const useSpinButtonState_unstable = (state: SpinButtonState) => {
  const { value, defaultValue = 0, min = 0, max = 10, step = 1 } = state;

  const [currentValue, setCurrentValue] = useControllableState({
    state: value !== undefined ? clamp(value, min, max) : undefined,
    defaultState: clamp(defaultValue, min, max),
    initialState: 0,
  });

  const onChange = state.onChange;

  const handleIncrementClick: React.MouseEvent<HTMLButtonElement> = useEventCallback(ev => {
    const newValue = clamp(currentValue + step, min, max);
    setCurrentValue(newValue);

    onChange?.(ev, { value: newValue });
  });

  const handleDecrementClick: React.MouseEvent<HTMLButtonElement> = useEventCallback(ev => {
    const newValue = clamp(currentValue - step, min, max);
    setCurrentValue(newValue);

    onChange?.(ev, newValue);
  });

  state.input.value = currentValue;
  state.input.onChange = onChange;
  state.incrementControl.onClick = handleIncrementClick;
};
