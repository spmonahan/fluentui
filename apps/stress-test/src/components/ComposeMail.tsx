import * as React from 'react';

import { Element } from '../shared/Element';
import {
  IconButton,
  mergeStyleSets,
  Text,
  IIconProps,
  TextField,
  DefaultButton,
  DefaultSpacing,
} from '@fluentui/react';
import clsx from 'clsx';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';

const cancelIcon: IIconProps = { iconName: 'Cancel' };

type ComposeMailProps = {};

const styles = mergeStyleSets({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: DefaultSpacing.m,
    maxHeight: '75%',
    rowGap: DefaultSpacing.m,
  },

  controls: {
    display: 'flex',
    columnGap: DefaultSpacing.s1,
  },
});

export const ComposeMail: React.FC<ComposeMailProps> = ({ onDiscardClick }) => {
  return (
    <Element as="div" depth={1} className={clsx('app-ComposeMail-wrapper', styles.wrapper)}>
      <Element as="div" classPrefix="app-ComposeMail-title">
        <Text variant="large">Compose Mail</Text>
        <IconButton iconProps={cancelIcon} />
      </Element>
      <Element as="div" classPrefix="app-ComposeMail-meta">
        <TextField label="To" />
        <TextField label="CC" />
        <TextField label="Subject" />
      </Element>
      <Element as="div" classPrefix="app-ComposeMail-message">
        <TextField label="Message" multiline rows={10} />
      </Element>
      <Element as="div" depth={1} className={styles.controls}>
        <DefaultButton text="Send" primary />
        <DefaultButton text="Discard" onClick={onDiscardClick} />
      </Element>
    </Element>
  );
};

export const ComposeMailView = observer(() => {
  const { messageStore } = useStoreContext();

  const onSendClick = React.useCallback(() => {
    // todo
  }, []);

  const onDiscardClick = React.useCallback(() => {
    messageStore.setIsComposingMessage(false);
  }, [messageStore.setIsComposingMessage]);

  return <ComposeMail onDiscardClick={onDiscardClick} />;
});
