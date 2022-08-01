import * as React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultSpacing } from '@fluentui/react/lib/Theme';
import { NavListItem, NavListItemView } from './NavListItem';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { InlookFolder } from '../../../state/data/inlook/types';

const navPaneStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
    boxSizing: 'border-box',
  },
});

type NavPaneProps = {
  folders: InlookFolder[];
  itemRenderer: any;
  className?: string;
};

export const NavPane: React.FC<NavPaneProps> = ({ folders, itemRenderer = NavListItem, className }) => {
  return (
    <div className={className}>
      <AutoSizer>
        {({ height }: { height: number }) => (
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
    </div>
  );
};

export const NavPaneView = observer(
  ({ itemRenderer = NavListItemView, className }: { itemRenderer: any; className?: string }) => {
    const { folderStore } = useStoreContext();
    return <NavPane folders={folderStore.folders} itemRenderer={itemRenderer} className={className} />;
  },
);
