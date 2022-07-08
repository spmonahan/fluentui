import * as React from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetLength = alphabet.length;

export type ElementProps = {
  as?: React.ReactNode;
  depth?: number;
  start?: number;
  classPrefix?: string;
  className?: string;
};

export const Element: React.FC<ElementProps> = props => {
  const { as = 'div', depth = 1, children, start = 0, classPrefix = '', className, ...rest } = props;

  const El = as;
  let depthClassName = alphabet[start % alphabetLength];
  depthClassName = classPrefix ? `${classPrefix}-${depthClassName}` : depthClassName;

  const cn = className ? `${className} ${depthClassName}` : depthClassName;

  return depth > 1 ? (
    <El {...rest} className={cn}>
      <Element as={as} depth={depth - 1} start={start + 1} classPrefix={classPrefix} children={children} />
    </El>
  ) : (
    <El {...rest} className={cn}>
      {children}
    </El>
  );
};
