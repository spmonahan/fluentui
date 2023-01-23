import * as React from 'react';
import { ComboBox, SelectableOptionMenuItemType } from '@fluentui/react';
import type { IComboBoxOption } from '@fluentui/react';
import { ReactSelectorTreeComponentRenderer } from '../../../shared/react/types';

const options: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  return <ComboBox defaultSelectedKey="C" label="Basic single-select ComboBox" options={options} />;
};

export default componentRenderer;
