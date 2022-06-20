import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { useSelector } from 'react-redux';
import { MessageListItem } from './MessageListItem';
import { MessageFilter } from './MessageFilter';
import type { RootState } from '../state/store';

const messageListStyles = mergeStyleSets({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const MessageList = () => {
  const messages = useSelector((state: RootState) => {
    const allFolderMessages = state.messageList.messages[state.navPane.selectedFolder];
    const messageFilter = state.messageList.messageFilter?.toLowerCase();
    if (messageFilter) {
      return allFolderMessages.filter(message => message.from.toLowerCase().startsWith(messageFilter));
    }

    return allFolderMessages;
  });

  return (
    <div className={`app-MessageList ${messageListStyles.root}`}>
      <MessageFilter />
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
