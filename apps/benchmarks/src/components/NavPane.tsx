import * as React from 'react';
import { ActionButton } from '@fluentui/react/lib/Button';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';

const ListItem = ({ index, style, data }) => {
  return (
    <div style={style}>
      <ActionButton>{data[index]}</ActionButton>
    </div>
  );
};

export const NavPane = () => {
  const folders = useSelector(state => state.navPane.folders);
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          className="app-NavPane"
          height={height}
          width={220}
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
