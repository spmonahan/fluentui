import * as React from 'react';
import type { SpinButtonFormatter, SpinButtonParser } from '../SpinButton';

export type Customizer = {
  parser: SpinButtonParser;
  formatter: SpinButtonFormatter;
};

export const CustomContext = React.createContext<Customizer>({
  parser: parseFloat,
  formatter: value => value.toString(),
});

export const useCustomFormatting = () => {
  const { parser, formatter } = React.useContext(CustomContext);
  return { parser, formatter };
};
