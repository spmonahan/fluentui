import { clamp, useControllableState, useMergedEventCallbacks } from '@fluentui/react-utilities';
import * as Keys from '@fluentui/keyboard-keys';
import * as React from 'react';
import { SpinButtonState, SpinButtonChangeEvent } from './SpinButton.types';

export const useSpinButtonState_unstable = (state: SpinButtonState) => {
  const { value, displayValue, defaultValue = 0, min = Number.MIN_VALUE, max = Number.MAX_VALUE, step = 1 } = state;

  const [currentValue, setCurrentValue] = useControllableState({
    state: value ?? undefined,
    defaultState: defaultValue,
    initialState: 0,
  });

  const [textValue, setTextValue] = React.useState(
    value !== undefined && displayValue !== undefined ? displayValue : String(currentValue),
  );

  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    const isControlled = value !== undefined && displayValue !== undefined;
    setTextValue(isControlled ? displayValue : String(currentValue));
    parsedValue.current = currentValue;
  }, [value, displayValue, focused, currentValue]);

  const parsedValue = React.useRef(currentValue);

  const onChange = state.onChange;
  const onInputChange = state.input.onChange;
  const onInputFocus = state.input.onFocus;
  const onInputBlur = state.input.onBlur;
  const onInputKeyDown = state.input.onKeyDown;
  const onIncrementClick = state.incrementButton.onClick;
  const onDecrementClick = state.decrementButton.onClick;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setTextValue(newValue);
    parsedValue.current = parseFloat(newValue);
  };

  const stepper = (e: SpinButtonChangeEvent, direction: 'up' | 'down') => {
    const dir = direction === 'up' ? 1 : -1;
    const val = Number.isNaN(parsedValue.current) ? currentValue : parsedValue.current;

    const valueInRange = val >= min && val <= max;
    let newValue = val + step * dir;
    if (valueInRange) {
      // If the value is in the range of [min, max] clamp it.
      // Don't clamp values outside this range so users get a
      // more natural behavior. For example, if the range is [5, 15]
      // and the user types 1 into the input we don't want to clamp
      // the value when they next press the increment button because
      // clamping would snap the value to 5 rather than increment to 2.
      newValue = clamp(newValue, min, max);
    }

    commit(e, newValue);
  };

  const handleIncrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stepper(e, 'up');
  };

  const handleDecrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stepper(e, 'down');
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isControlled = value !== undefined;
    commit(e, !isControlled ? parsedValue.current : undefined, textValue);
    setFocused(false);
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

  const commit = (e: SpinButtonChangeEvent, newValue?: number, newDisplayValue?: string) => {
    const valueChanged = newValue !== undefined && currentValue !== newValue;
    const displayValueChanged = newDisplayValue !== undefined;

    if (valueChanged) {
      // const nextValue = newValue ?? currentValue;
      setCurrentValue(newValue);
      parsedValue.current = newValue;
    }

    if (valueChanged || displayValueChanged) {
      onChange?.(e, { value: newValue, displayValue: newDisplayValue });
    }
  };

  state.input.value = textValue;
  state.input.onChange = useMergedEventCallbacks(handleInputChange, onInputChange);
  state.input.onFocus = useMergedEventCallbacks(handleFocus, onInputFocus);
  state.input.onBlur = useMergedEventCallbacks(handleBlur, onInputBlur);
  state.input.onKeyDown = useMergedEventCallbacks(handleKeyDown, onInputKeyDown);
  state.incrementButton.onClick = useMergedEventCallbacks(handleIncrementClick, onIncrementClick);
  state.decrementButton.onClick = useMergedEventCallbacks(handleDecrementClick, onDecrementClick);
};
