import * as React from 'react';
import { InlookMessage } from '../../../state/data/inlook/types';

import { tokens, shorthands, makeStyles, Body1, Caption1, Caption2 } from '@fluentui/react-components';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { Element } from '../../../shared/Element';

const useItemStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
    cursor: 'pointer',
    ...shorthands.overflow('hidden'),
  },
});

const useFlexStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalS,
  },
});

const FlexColumn = ({ children }) => {
  const flexStyles = useFlexStyles();
  return <div className={flexStyles.column}>{children}</div>;
};

export const MessageListItem = ({ index, style, data, onClick }) => {
  const item = data[index] as InlookMessage;
  const itemStyles = useItemStyles();

  return (
    <Element as="div" classPrefix="message-list-item" className={itemStyles.root} onClick={onClick}>
      <FlexColumn>
        <Element as="div" classPrefix="message-list-item-from">
          <Body1>{item.from}</Body1>
        </Element>
        <Element as="div" classPrefix="message-list-item-subject">
          <Caption1>{item.subject.substring(0, 40)}</Caption1>
        </Element>
        <Element as="div" classPrefix="message-list-item-message">
          <Caption2>{item.message.substring(0, 40)}</Caption2>
        </Element>
      </FlexColumn>
    </Element>
  );
};

export const MessageListItemView = observer(({ index, style, data }) => {
  const { messageStore } = useStoreContext();

  const onClick = React.useCallback(
    e => {
      const item = data[index] as InlookMessage;
      messageStore.setSelectedMesssageId(item.id);
    },
    [data, index, messageStore],
  );

  return <MessageListItem index={index} style={style} data={data} onClick={onClick} />;
});
