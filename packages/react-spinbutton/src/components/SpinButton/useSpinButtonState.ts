import { clamp, useControllableState, useMergedEventCallbacks } from '@fluentui/react-utilities';
import * as Keys from '@fluentui/keyboard-keys';
import * as React from 'react';
import { SpinButtonState, SpinButtonChangeEvent } from './SpinButton.types';

export const useSpinButtonState_unstable = (state: SpinButtonState) => {
  const { value, textValue, defaultValue = 0, min = Number.MIN_VALUE, max = Number.MAX_VALUE, step = 1 } = state;

  const [renderVersion, setRenderVersion] = React.useState(0);

  const [currentValue, setCurrentValue] = useControllableState({
    state: value ?? undefined,
    defaultState: defaultValue,
    initialState: 0,
  });

  const [displayValue, setDisplayValue] = React.useState(textValue ?? String(currentValue));
  React.useEffect(() => {
    setDisplayValue(textValue ?? String(currentValue));
  }, [currentValue, textValue, renderVersion]);
  const previousDisplayValue = React.useRef(displayValue);

  console.log(
    `[useSpinButtonState]`,
    'currentValue:',
    currentValue,
    'displayValue:',
    displayValue,
    'previousDisplayValue:',
    previousDisplayValue.current,
    'textValue:',
    textValue,
  );

  const onChange = state.onChange;
  const onInputChange = state.input.onChange;
  const onInputFocus = state.input.onFocus;
  const onInputBlur = state.input.onBlur;
  const onInputKeyDown = state.input.onKeyDown;
  const onIncrementClick = state.incrementButton.onClick;
  const onDecrementClick = state.decrementButton.onClick;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setDisplayValue(newValue);
  };

  const stepper = (e: SpinButtonChangeEvent, direction: 'up' | 'down') => {
    const dir = direction === 'up' ? 1 : -1;
    const val = currentValue;

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
    previousDisplayValue.current = displayValue;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    commit(e, undefined, displayValue);
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

  const commit = (e: SpinButtonChangeEvent, newValue?: number, newTextValue?: string) => {
    if ((currentValue !== undefined && currentValue !== newValue) || newTextValue !== undefined) {
      setCurrentValue(newValue ?? currentValue);

      if (newTextValue !== undefined && previousDisplayValue.current !== newTextValue) {
        setRenderVersion(renderVersion + 1);
        previousDisplayValue.current = newTextValue;
      }

      onChange?.(e, { value: newValue, textValue: newTextValue });
    }
  };

  state.input.value = displayValue;
  state.input.onChange = useMergedEventCallbacks(handleInputChange, onInputChange);
  state.input.onFocus = useMergedEventCallbacks(handleFocus, onInputFocus);
  state.input.onBlur = useMergedEventCallbacks(handleBlur, onInputBlur);
  state.input.onKeyDown = useMergedEventCallbacks(handleKeyDown, onInputKeyDown);
  state.incrementButton.onClick = useMergedEventCallbacks(handleIncrementClick, onIncrementClick);
  state.decrementButton.onClick = useMergedEventCallbacks(handleDecrementClick, onDecrementClick);
};
