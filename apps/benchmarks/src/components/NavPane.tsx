import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultSpacing } from '@fluentui/react/lib/Theme';
import { NavListItem } from './NavListItem';

const navPaneStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
  },
});

export const NavPane = () => {
  const folders = useSelector(state => state.navPane.folders);
  return (
    <AutoSizer>
      {({ height }) => (
        <List
          className={`app-NavPane ${navPaneStyles.root}`}
          height={height}
          width={204}
          itemData={folders}
          itemCount={folders.length}
          itemSize={35}
        >
          {NavListItem}
        </List>
      )}
    </AutoSizer>
  );
};
