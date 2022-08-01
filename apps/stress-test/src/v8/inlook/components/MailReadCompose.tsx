import { DefaultSpacing, mergeStyleSets, Persona, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Element } from '../../../shared/Element';
import { useStoreContext } from '../../../state/context/StoreContext';
import { InlookMessage } from '../../../state/data/inlook/types';
import clsx from 'clsx';
import { ComposeMailView } from './ComposeMail';

type MailReadComposeProps = {
  message?: InlookMessage;
  isComposingMessage: boolean;
  className?: string;
};

const messageStyles = mergeStyleSets({
  root: {
    padding: DefaultSpacing.m,
    paddingTop: 0,
    overflowY: 'scroll',
  },

  meta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: DefaultSpacing.s2,
  },

  toFromWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: DefaultSpacing.s2,
  },

  messageWrapper: {
    // overflowY: 'scroll',
  },
});

export const MailReadCompose: React.FC<MailReadComposeProps> = ({ message, isComposingMessage, className }) => {
  if (isComposingMessage) {
    return <ComposeMailView />;
  }

  if (!message) {
    return (
      <>
        <Element as="div" className={clsx('mailreadcompose-root', messageStyles.root, className)}>
          <Text variant="mega">No message selected</Text>
        </Element>
      </>
    );
  }

  return (
    <Element as="div" className={clsx('mailreadcompose-root', messageStyles.root, className)}>
      <Element as="div" className={clsx('mailreadcompose-subject')}>
        <Text variant="xLarge" block>
          {message.subject}
        </Text>
      </Element>
      <Element as="div" className={clsx('mailreadcompose-meta', messageStyles.meta)}>
        <Element as="div" className={clsx('mailreadcompose-to-from-wrapper', messageStyles.toFromWrapper)}>
          <Element as="div" className="mailreadcompose-from">
            <Persona text={message.from} />
          </Element>
          <Element as="div" className="mailreadcompose-to">
            {message.to.map(to => {
              return <Text variant="medium">{to}</Text>;
            })}
          </Element>
        </Element>

        <Element as="div" className="mailreadcompose-time">
          <Text variant="medium">{new Date(message.timestamp).toLocaleString()}</Text>
        </Element>
      </Element>
      <Element as="div" className={clsx('mailreadcompse-message-wrapper', messageStyles.messageWrapper)}>
        <Element as="div" className="mailreadcompose-message">
          {message.message}
        </Element>
      </Element>
    </Element>
  );
};

// eslint-disable-next-line
export const MailReadComposeView = observer((props: any) => {
  const { messageStore } = useStoreContext();
  return (
    <MailReadCompose
      message={messageStore.currentSelectedMessage}
      isComposingMessage={messageStore.isComposingMessage}
      {...props}
    />
  );
});
