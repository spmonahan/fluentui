import * as React from 'react';
import { InlookMessage } from '../state/data/inlook/types';
import { DefaultSpacing } from '@fluentui/react/lib/Theme';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';
import { Element } from '../shared/Element';

const itemStyles = mergeStyleSets({
  root: {
    boxSizing: 'border-box',
    padding: DefaultSpacing.s1,
    cursor: 'pointer',
    overflow: 'hidden',
  },
});

export const MessageListItem = ({ index, style, data, onClick }) => {
  const item = data[index] as InlookMessage;

  return (
    <Element
      as="div"
      classPrefix="message-list-item"
      depth={10}
      style={style}
      className={itemStyles.root}
      onClick={onClick}
    >
      <Stack>
        <Element as="div" classPrefix="message-list-item-from" depth={5}>
          <Text variant="medium" nowrap>
            {item.from}
          </Text>
        </Element>
        <Element as="div" classPrefix="message-list-item-subject" depth={5}>
          <Text variant="smallPlus" nowrap>
            {item.subject.substring(0, 40)}
          </Text>
        </Element>
        <Element as="div" classPrefix="message-list-item-message" depth={5}>
          <Text variant="small" nowrap>
            {item.message}
          </Text>
        </Element>
      </Stack>
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
