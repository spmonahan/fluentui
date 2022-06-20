import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { useSelector } from 'react-redux';
import { MessageListItem } from './MessageListItem';

const messageListStyles = mergeStyleSets({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const MessageList = () => {
  const messages = useSelector(state => {
    return state.messageList.messages[state.navPane.selectedFolder];
  });
  return (
    <div className={`app-MessageList ${messageListStyles.root}`}>
      <TextField className="app-FilterField" id="filterField" placeholder="Filter Messages" />
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
            {MessageListItem}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
