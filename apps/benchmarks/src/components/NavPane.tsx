import * as React from 'react';
import { ActionButton } from '@fluentui/react/lib/Button';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';
import { InlookFolder } from '../state/data/inlook/types';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultPalette, DefaultSpacing } from '@fluentui/react/lib/Theme';
import type { IButtonStyles } from '@fluentui/react/lib/Button';

const navPaneStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
  },
});

const buttonStyles: IButtonStyles = {
  root: {
    width: '100%',
  },
  rootHovered: {
    backgroundColor: DefaultPalette.neutralLight,
  },
};

const ListItem = ({ index, style, data }) => {
  const item = data[index] as InlookFolder;
  return (
    <div style={style}>
      <ActionButton styles={buttonStyles} iconProps={{ iconName: item.icon }}>
        {item.label}
      </ActionButton>
    </div>
  );
};

export const NavPane = () => {
  const folders = useSelector(state => state.navPane.folders);
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          className={`app-NavPane ${navPaneStyles.root}`}
          height={height}
          width={204}
          itemData={folders}
          itemCount={folders.length}
          itemSize={35}
        >
          {ListItem}
        </List>
      )}
    </AutoSizer>
  );
};
