import * as React from 'react';

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { MessageListItem, MessageListItemView } from './MessageListItem';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { usePerformanceMeasure } from '../../../shared/usePerformanceMeasure';

export const MessageList = ({ messages, ItemRenderer = MessageListItem }) => {
  usePerformanceMeasure('message-list', 'start');
  return (
    <div style={{ overflowY: 'auto', maxHeight: '100%' }}>
      {messages.map((message, index) => {
        return <ItemRenderer index={index} data={messages} />;
      })}
    </div>
  );

  // return (
  //   <AutoSizer>
  //     {({ height }) => (
  //       <List
  //         className="app-MessageList_Messages"
  //         height={height}
  //         width={320}
  //         itemData={messages}
  //         itemCount={messages.length}
  //         itemSize={60}
  //       >
  //         {itemRenderer}
  //       </List>
  //     )}
  //   </AutoSizer>
  // );
};

export const MessageListView = observer(({ itemRenderer = MessageListItemView }) => {
  const { messageStore } = useStoreContext();
  return <MessageList messages={messageStore.filteredMessages} itemRenderer={itemRenderer} />;
});
