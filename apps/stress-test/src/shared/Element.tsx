import * as React from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetLength = alphabet.length;

export type ElementProps = {
  as?: React.ReactNode;
  depth?: number;
  start?: number;
  className?: string;
};

export const Element: React.FC<ElementProps> = props => {
  const { as = 'div', depth = 1, children, start = 0, className, ...rest } = props;

  const El = as;
  const depthClassName = alphabet[start % alphabetLength];

  const cn = className ? `${className} ${depthClassName}` : depthClassName;

  return depth > 1 ? (
    <El {...rest} className={cn}>
      <Element {...rest} as={as} depth={depth - 1} start={start + 1} children={children} />
    </El>
  ) : (
    <El {...rest} className={cn}>
      {children}
    </El>
  );
};
