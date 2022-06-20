import * as React from 'react';
import { InlookMessage } from '../state/data/inlook/types';
import { DefaultPalette, DefaultSpacing } from '@fluentui/react/lib/Theme';
import { Text } from '@fluentui/react/lib/Text';
import { Stack } from '@fluentui/react/lib/Stack';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { useDispatch } from 'react-redux';
import { selectMessage } from '../state/messageList/messageListSlice';

const itemStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.s1,
    cursor: 'pointer',
  },
});

export const MessageListItem = ({ index, style, data }) => {
  const item = data[index] as InlookMessage;
  const dispatch = useDispatch();
  const onClick = React.useCallback(
    e => {
      dispatch(selectMessage(data.id));
    },
    [dispatch, selectMessage, data],
  );

  return (
    <div style={style} className={itemStyles.root} onClick={onClick}>
      <Stack>
        <Text variant="medium" nowrap>
          {item.from}
        </Text>
        <Text variant="smallPlus" nowrap>
          {item.subject}
        </Text>
        <Text variant="small" nowrap>
          {item.message}
        </Text>
      </Stack>
    </div>
  );
};
