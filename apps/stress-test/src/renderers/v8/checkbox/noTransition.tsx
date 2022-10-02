import * as React from 'react';
import { Checkbox, ICheckboxStyles } from '@fluentui/react';
import { ReactSelectorTreeComponentRenderer } from '../../shared/react/types';

const styles: Partial<ICheckboxStyles> = {
  checkbox: {
    transitionDuration: 'none',
  },
};

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  return <Checkbox styles={styles} label={`${node.value.name}, ${index}`} />;
};

export default componentRenderer;
