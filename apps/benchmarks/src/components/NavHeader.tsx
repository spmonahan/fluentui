import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { Icon } from '@fluentui/react/lib/Icon';
import { DefaultPalette, DefaultSpacing } from '@fluentui/react/lib/Theme';
import { Text, ITextStyles } from '@fluentui/react/lib/Text';

const navHeaderStyles = mergeStyleSets({
  root: {
    backgroundColor: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    padding: DefaultSpacing.m,
    display: 'flex',
    alignItems: 'center',
    columnGap: DefaultSpacing.m,
  },
});

const headerTextStyles: ITextStyles = {
  root: {
    color: DefaultPalette.white,
  },
};

export const NavHeader = () => {
  return (
    <div className={`app-NavHeader ${navHeaderStyles.root}`}>
      <Icon iconName="WaffleOffice365" />
      <Text variant="xLarge" nowrap block styles={headerTextStyles}>
        Inlook
      </Text>
    </div>
  );
};
