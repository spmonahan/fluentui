import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { SpinButtonState, SpinButtonSlots } from './SpinButton.types';

/**
 * Render the final JSX of SpinButton
 */
export const renderSpinButton_unstable = (state: SpinButtonState) => {
  const { slots, slotProps } = getSlots<SpinButtonSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.input {...slotProps.input} />
      <slots.incrementControl {...slotProps.incrementControl} />
      <slots.decrementControl {...slotProps.decrementControl} />
    </slots.root>
  );
};
