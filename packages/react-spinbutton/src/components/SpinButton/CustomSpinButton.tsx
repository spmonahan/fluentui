import * as React from 'react';
import { useSpinButton_unstable } from './useSpinButton';
import { renderSpinButton_unstable } from './renderSpinButton';
import { useSpinButtonStyles_unstable } from './useSpinButtonStyles';
import type { SpinButtonProps } from './SpinButton.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

const useCustomFormatting = (state, formatter, parser) => {
  state.formatter = formatter;
  state.parser = parser;
};

const formatter = value => `cats ${value} cats`;
const parser = formattedValue => parseFloat(formattedValue.replace(/cats/g, '').trim());

/**
 * A SpinButton allows someone to incrementally adjust a value in small steps.
 */
export const CustomSpinButton: ForwardRefComponent<SpinButtonProps> = React.forwardRef((props, ref) => {
  const state = useSpinButton_unstable(props, ref);

  useCustomFormatting(state, formatter, parser);
  useSpinButtonStyles_unstable(state);
  return renderSpinButton_unstable(state);
});

CustomSpinButton.displayName = 'CustomSpinButton';
