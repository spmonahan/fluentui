import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { MessageFilterView } from './MessageFilter';
import { MessageListView } from './MessageList';
import { Element } from '../shared/Element';
import clsx from 'clsx';

const messageListStyles = mergeStyleSets({
  root: {
    height: 'calc(100% - 32px)',
  },
  wrapper: {
    selectors: {
      ' .message-pane-b': {
        height: '100%',
      },
    },
  },
});

export const MesssagePaneView = props => {
  return (
    <Element
      as="div"
      classPrefix="message-pane"
      depth={2}
      className={clsx('app-MessagePane', messageListStyles.wrapper, props.className)}
    >
      <div className={messageListStyles.root}>
        <MessageFilterView />
        <MessageListView />
      </div>
    </Element>
  );
};
