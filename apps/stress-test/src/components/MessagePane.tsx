import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { MessageFilterView } from './MessageFilter';
import { MessageListView } from './MessageList';
import { Element } from '../shared/Element';

const messageListStyles = mergeStyleSets({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  wrapper: {
    selectors: {
      ' .message-pane-b': {
        height: '100%',
      },
    },
  },
});

export const MesssagePaneView = () => {
  return (
    <Element as="div" classPrefix="message-pane" depth={2} className={`app-MessagePane ${messageListStyles.wrapper}`}>
      <div className={messageListStyles.root}>
        <MessageFilterView />
        <MessageListView />
      </div>
    </Element>
  );
};
