import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { MessageFilterView } from './MessageFilter';
import { MessageListView } from './MessageList';

const messageListStyles = mergeStyleSets({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const MesssagePaneView = () => {
  return (
    <div className={`app-MessagePane ${messageListStyles.root}`}>
      <MessageFilterView />
      <MessageListView />
    </div>
  );
};
