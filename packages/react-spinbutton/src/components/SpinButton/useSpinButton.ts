import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { SpinButtonProps, SpinButtonState } from './SpinButton.types';
import { useSpinButtonState_unstable } from './useSpinButtonState';

/**
 * Create the state required to render SpinButton.
 *
 * The returned state can be modified with hooks such as useSpinButtonStyles_unstable,
 * before being passed to renderSpinButton_unstable.
 *
 * @param props - props from this instance of SpinButton
 * @param ref - reference to root HTMLElement of SpinButton
 */
export const useSpinButton_unstable = (props: SpinButtonProps, ref: React.Ref<HTMLElement>): SpinButtonState => {
  const {
    value,
    defaultValue,
    min,
    max,
    step,
    onChange,
    parser,
    formatter,
    root,
    input,
    incrementControl,
    decrementControl,
  } = props;

  const state: SpinButtonState = {
    value,
    defaultValue,
    min,
    max,
    step,
    onChange,
    parser,
    formatter,
    components: {
      // TODO add slot types here if needed (div is the default)
      root: 'div',
      input: 'input',
      incrementControl: 'button',
      decrementControl: 'button',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: resolveShorthand(root, {
      required: true,
    }),
    input: resolveShorthand(input, {
      required: true,
    }),
    incrementControl: resolveShorthand(incrementControl, {
      required: true,
    }),
    decrementControl: resolveShorthand(decrementControl, {
      required: true,
    }),
  };

  useSpinButtonState_unstable(state);

  return state;
};
