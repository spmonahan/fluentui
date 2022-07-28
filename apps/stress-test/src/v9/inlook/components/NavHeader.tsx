import * as React from 'react';

import { makeStyles, tokens, shorthands, Subtitle1 } from '@fluentui/react-components';
import { GridDots24Filled } from '@fluentui/react-icons';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    display: 'flex',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalM,
  },
});

export const NavHeader = ({ className, ...rest }) => {
  const styles = useStyles();

  return (
    <div className={clsx('app-NavHeader', styles.root, className)} {...rest}>
      <GridDots24Filled />
      <Subtitle1 block>Inlook v9</Subtitle1>
    </div>
  );
};
