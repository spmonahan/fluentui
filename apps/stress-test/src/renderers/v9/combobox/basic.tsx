import * as React from 'react';
import { Label, useId, makeStyles } from '@fluentui/react-components';
import { Combobox, Option } from '@fluentui/react-components/unstable';
import { ReactSelectorTreeComponentRenderer } from '../../../shared/react/types';

type ComboboxOption = {
  key: string;
  text: string;
  disabled?: boolean;
};

const options: ComboboxOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];

const useLabelStyles = makeStyles({
  layout: {
    display: 'block',
  },
});

const defaultSelectedOptions = ['C'];

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  const id = useId();
  const labelStyles = useLabelStyles();
  return (
    <>
      <Label id={id} className={labelStyles.layout}>
        Basic single-select Combobox
      </Label>
      <Combobox aria-labelledby={id} defaultSelectedOptions={defaultSelectedOptions}>
        {options.map(option => (
          <Option key={option.key}>{option.text}</Option>
        ))}
      </Combobox>
    </>
  );
};

export default componentRenderer;
