import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultSpacing } from '@fluentui/react/lib/Theme';
import { NavListItem, NavListItemView } from './NavListItem';
import { observer } from 'mobx-react';

const navPaneStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
  },
});

export const NavPane = ({ folders, itemRenderer = NavListItem }) => {
  // const folders = useSelector(state => state.navPane.folders);
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
          {itemRenderer}
        </List>
      )}
    </AutoSizer>
  );
};

export const NavPaneView = observer(({ folders }) => {
  return <NavPane folders={folders} itemRenderer={NavListItemView} />;
});
