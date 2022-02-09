import * as React from 'react';
import { SpinButton, SpinButtonProps, SpinButtonFormatter, SpinButtonParser } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

type NumberInputProps = {
  id?: string;
  min?: number;
  max?: number;
  locale?: string;
  formatOptions?: Intl.NumberFormatOptions;
  value?: number;
  defaultValue?: number;
  onChange: SpinButtonProps['onChange'];
};

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  min,
  max,
  locale = 'en-US',
  formatOptions,
  value,
  defaultValue,
  onChange,
}) => {
  const numFormatter = React.useMemo(() => new Intl.NumberFormat(locale, formatOptions), [locale, formatOptions]);
  const formatter: SpinButtonFormatter = val => {
    console.log('FORMAT', numFormatter.format(val));
    return numFormatter.format(val);
  };

  const parser: SpinButtonParser = formattedValue => {
    console.log('PARSE', parseFloat(formattedValue));
    return parseFloat(formattedValue); // This is not good enough :(
  };

  return (
    <SpinButton
      incrementControl="+"
      decrementControl="-"
      id={id}
      min={min}
      max={max}
      value={value}
      defaultValue={defaultValue}
      parser={parser}
      formatter={formatter}
      onChange={onChange}
    />
  );
};

export const Numeric = () => {
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState(10);

  const onSpinButtonChange: SpinButtonProps['onChange'] = (_ev, data) => {
    console.log('onSpinButtonChange', data.value);
    setSpinButtonValue(data.value);
  };

  return (
    <>
      <Label htmlFor={id}>Numeric</Label>
      <NumberInput
        value={spinButtonValue}
        min={0}
        max={9999999}
        onChange={onSpinButtonChange}
        id={id}
        formatOptions={{
          currency: 'USD',
          currencyDisplay: 'symbol',
          style: 'currency',
        }}
      />
    </>
  );
};
