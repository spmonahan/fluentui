import * as React from 'react';
import { useSpinButtonContext_unstable } from './useSpinButtonContext';
import { renderSpinButton_unstable } from './renderSpinButton';
import { useSpinButtonStyles_unstable } from './useSpinButtonStyles';
import type { SpinButtonProps } from './SpinButton.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * A SpinButton allows someone to incrementally adjust a value in small steps.
 */
export const ContextSpinButton: ForwardRefComponent<SpinButtonProps> = React.forwardRef((props, ref) => {
  const state = useSpinButtonContext_unstable(props, ref);

  useSpinButtonStyles_unstable(state);
  return renderSpinButton_unstable(state);
});

ContextSpinButton.displayName = 'ContextSpinButton';
