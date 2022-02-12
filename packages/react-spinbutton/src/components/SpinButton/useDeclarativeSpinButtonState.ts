import { clamp, useControllableState, useMergedEventCallbacks } from '@fluentui/react-utilities';
import * as Keys from '@fluentui/keyboard-keys';
import * as React from 'react';
import { SpinButtonState, SpinButtonChangeEvent } from './SpinButton.types';

/**
 * A wrapper around `clamp` that propagates NaN `value`s.
 */
const clampNaN = (value: number, min: number, max: number): number => {
  if (Number.isNaN(value)) {
    return NaN;
  }

  return clamp(value, min, max);
};

export const useDeclarativeSpinButtonState_unstable = (state: SpinButtonState) => {
  const {
    value,
    defaultValue = 0,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    step = 1,
    formattedValue,
    defaultFormattedValue,
  } = state;

  const [currentValue, setCurrentValue] = useControllableState({
    state: value ?? undefined,
    defaultState: defaultValue,
    initialState: 0,
  });

  const parsedValue = React.useRef(value);

  console.log(
    `[useSpinButtonState]`,
    'currentValue:',
    currentValue,
    'formattedValue:',
    formattedValue,
    'parsedValue:',
    parsedValue.current,
  );

  const onChange = state.onChange;
  const onInputChange = state.input.onChange;
  const onInputBlur = state.input.onBlur;
  const onInputKeyDown = state.input.onKeyDown;
  const onIncrementClick = state.incrementControl.onClick;
  const onDecrementClick = state.decrementControl.onClick;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    commit(e, newValue);
  };

  const stepper = (e: SpinButtonChangeEvent, direction: 'up' | 'down') => {
    const dir = direction === 'up' ? 1 : -1;
    const val = parsedValue.current;

    const valueInRange = val >= min && val <= max;
    let newValue = val + step * dir;
    if (valueInRange) {
      // If the value is in the range of [min, max] clamp it.
      // Don't clamp values outside this range so users get a
      // more natural behavior. For example, if the range is [5, 15]
      // and the user types 1 into the input we don't want to clamp
      // the value when they next press the increment button because
      // clamping would snap the value to 5 rather than increment to 2.
      newValue = clampNaN(newValue, min, max);
    }

    commit(e, newValue);
  };

  const handleIncrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stepper(e, 'up');
  };

  const handleDecrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stepper(e, 'down');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    commit(e, parsedValue.current);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === Keys.ArrowUp) {
      stepper(e, 'up');
    } else if (e.key === Keys.ArrowDown) {
      stepper(e, 'down');
    } else if (!e.shiftKey && e.key === Keys.Home) {
      commit(e, min);
    } else if (!e.shiftKey && e.key === Keys.End) {
      commit(e, max);
    }
  };

  const commit = (e: SpinButtonChangeEvent, newValue: number) => {
    if (currentValue !== newValue) {
      setCurrentValue(newValue);
      parsedValue.current = newValue;
      onChange?.(e, { value: newValue });
    }
  };

  state.input.value = formattedValue;
  state.input.onChange = useMergedEventCallbacks(handleInputChange, onInputChange);
  state.input.onBlur = useMergedEventCallbacks(handleBlur, onInputBlur);
  state.input.onKeyDown = useMergedEventCallbacks(handleKeyDown, onInputKeyDown);
  state.incrementControl.onClick = useMergedEventCallbacks(handleIncrementClick, onIncrementClick);
  state.decrementControl.onClick = useMergedEventCallbacks(handleDecrementClick, onDecrementClick);
};
