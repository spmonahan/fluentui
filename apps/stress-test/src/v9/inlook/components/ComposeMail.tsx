import * as React from 'react';

import {
  Button,
  makeStyles,
  Input,
  Textarea,
  Label,
  useId,
  tokens,
  shorthands,
  Subtitle1,
} from '@fluentui/react-components';
import { Element } from '../../../shared/Element';

import clsx from 'clsx';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';

type ComposeMailProps = {};

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    maxHeight: '75%',
    rowGap: tokens.spacingVerticalM,
  },

  meta: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },

  message: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalM,
  },

  controls: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalS,
  },
});

export const ComposeMail: React.FC<ComposeMailProps> = ({ onDiscardClick }) => {
  const styles = useStyles();
  const toId = useId('to');
  const ccId = useId('cc');
  const subjectId = useId('subject');
  const messageId = useId('message');

  return (
    <Element as="div" depth={1} className={clsx('app-ComposeMail-wrapper', styles.wrapper)}>
      <Element as="div" classPrefix="app-ComposeMail-title">
        <Subtitle1>Compose Mail</Subtitle1>
      </Element>
      <Element as="div" depth={1} classPrefix="app-ComposeMail-meta" className={styles.meta}>
        <Label htmlFor={toId}>To</Label>
        <Input id={toId} />

        <Label htmlFor={ccId}>CC</Label>
        <Input id={ccId} />

        <Label htmlFor={subjectId}>Subject</Label>
        <Input id={subjectId} />
      </Element>
      <Element as="div" depth={1} classPrefix="app-ComposeMail-message" className={styles.message}>
        <Label htmlFor={messageId}>Message</Label>
        <Textarea id={messageId} />
      </Element>
      <Element as="div" depth={1} className={styles.controls}>
        <Button appearance="primary">Send</Button>
        <Button onClick={onDiscardClick}>Discard</Button>
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
