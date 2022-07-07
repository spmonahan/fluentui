import * as React from 'react';

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { MessageListItem, MessageListItemView } from './MessageListItem';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';

export const MessageList = ({ messages, itemRenderer = MessageListItem }) => {
  return (
    <AutoSizer>
      {({ height }) => (
        <List
          className="app-MessageList_Messages"
          height={height}
          width={320}
          itemData={messages}
          itemCount={messages.length}
          itemSize={60}
        >
          {itemRenderer}
        </List>
      )}
    </AutoSizer>
  );
};

export const MessageListView = observer(({ itemRenderer = MessageListItemView }) => {
  const { messageStore } = useStoreContext();
  return <MessageList messages={messageStore.filteredMessages} itemRenderer={itemRenderer} />;
});
