import { clamp, useControllableState, useMergedEventCallbacks } from '@fluentui/react-utilities';
import * as Keys from '@fluentui/keyboard-keys';
import * as React from 'react';
import { SpinButtonState, SpinButtonFormatter, SpinButtonParser, SpinButtonChangeEvent } from './SpinButton.types';

const defaultFormatter: SpinButtonFormatter = value => value.toString();
const defaultParser: SpinButtonParser = parseFloat;

export const useSpinButtonState_unstable = (state: SpinButtonState) => {
  const {
    value,
    defaultValue = 0,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    step = 1,
    parser = defaultParser,
    formatter = defaultFormatter,
  } = state;

  const [currentValue, setCurrentValue] = useControllableState({
    state: value !== undefined ? clamp(value, min, max) : undefined,
    defaultState: clamp(defaultValue, min, max),
    initialState: 0,
  });

  const [formattedValue, setFormattedValue] = React.useState(formatter(currentValue));
  const parsedValue = React.useRef(0);
  parsedValue.current = parser(formattedValue);

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
    setFormattedValue(newValue);
    parsedValue.current = parser(newValue);
  };

  const increment = (e: SpinButtonChangeEvent, from: number) => {
    const newValue = clamp(from + step, min, max);
    commit(e, newValue);
  };

  const decrement = (e: SpinButtonChangeEvent, from: number) => {
    const newValue = clamp(from - step, min, max);
    commit(e, newValue);
  };

  const handleIncrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    increment(e, getIntermediateValue());
  };

  const handleDecrementClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    decrement(e, getIntermediateValue());
  };

  const getIntermediateValue = () => {
    return Number.isNaN(parsedValue.current) ? NaN : clamp(parsedValue.current, min, max);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = getIntermediateValue();
    commit(e, newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === Keys.ArrowUp) {
      increment(e, getIntermediateValue());
    } else if (e.key === Keys.ArrowDown) {
      decrement(e, getIntermediateValue());
    } else if (!e.shiftKey && e.key === Keys.Home) {
      commit(e, min);
    } else if (!e.shiftKey && e.key === Keys.End) {
      commit(e, max);
    }
  };

  const commit = (e: SpinButtonChangeEvent, newValue: number) => {
    if (Number.isNaN(newValue)) {
      // New value is bad for some reason.
      // Typically this is because a user entered a "bad"
      // value in the <input>.
      setFormattedValue(formatter(currentValue));
    } else {
      const newFormattedValue = formatter(newValue);
      if (currentValue !== newValue || formattedValue !== newFormattedValue) {
        setCurrentValue(newValue);
        setFormattedValue(newFormattedValue);
        onChange?.(e, { value: newValue });
      }
    }
  };

  state.input.value = formattedValue;
  state.input.onChange = useMergedEventCallbacks(handleInputChange, onInputChange);
  state.input.onBlur = useMergedEventCallbacks(handleBlur, onInputBlur);
  state.input.onKeyDown = useMergedEventCallbacks(handleKeyDown, onInputKeyDown);
  state.incrementControl.onClick = useMergedEventCallbacks(handleIncrementClick, onIncrementClick);
  state.decrementControl.onClick = useMergedEventCallbacks(handleDecrementClick, onDecrementClick);
};
