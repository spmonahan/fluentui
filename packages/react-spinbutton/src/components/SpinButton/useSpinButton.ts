import * as React from 'react';
import { getPartitionedNativeProps, resolveShorthand } from '@fluentui/react-utilities';
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
export const useSpinButton_unstable = (props: SpinButtonProps, ref: React.Ref<HTMLInputElement>): SpinButtonState => {
  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: 'input',
    excludedPropNames: ['onChange'],
  });

  const {
    value,
    displayValue,
    defaultValue,
    min,
    max,
    step,
    precision,
    onChange,
    root,
    input,
    incrementButton,
    decrementButton,
  } = props;

  const state: SpinButtonState = {
    value,
    displayValue,
    defaultValue,
    min,
    max,
    step,
    precision,
    onChange,
    components: {
      // TODO add slot types here if needed (div is the default)
      root: 'div',
      input: 'input',
      incrementButton: 'button',
      decrementButton: 'button',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: resolveShorthand(root, {
      required: true,
      defaultProps: {
        ...nativeProps.root,
      },
    }),
    input: resolveShorthand(input, {
      required: true,
      defaultProps: {
        ref,
        autoComplete: 'off',
        ...nativeProps.primary,
      },
    }),
    incrementButton: resolveShorthand(incrementButton, {
      required: true,
      defaultProps: {
        tabIndex: -1,
      },
    }),
    decrementButton: resolveShorthand(decrementButton, {
      required: true,
      defaultProps: {
        tabIndex: -1,
      },
    }),
  };

  useSpinButtonState_unstable(state);

  return state;
};
