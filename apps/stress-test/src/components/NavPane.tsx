import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultSpacing } from '@fluentui/react/lib/Theme';
import { NavListItem, NavListItemView } from './NavListItem';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';

const navPaneStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
  },
});

export const NavPane = ({ folders, itemRenderer = NavListItem }) => {
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

export const NavPaneView = observer(({ itemRenderer = NavListItemView }) => {
  const { folderStore } = useStoreContext();
  return <NavPane folders={folderStore.folders} itemRenderer={itemRenderer} />;
});
