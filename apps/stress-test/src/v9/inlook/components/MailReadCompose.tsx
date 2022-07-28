import * as React from 'react';
import { Avatar, Title1, Title2, Body1, makeStyles, tokens, shorthands } from '@fluentui/react-components';
import { observer } from 'mobx-react';
import { Element } from '../../../shared/Element';
import { useStoreContext } from '../../../state/context/StoreContext';
import { InlookMessage } from '../../../state/data/inlook/types';
import clsx from 'clsx';
import { ComposeMailView } from './ComposeMail';

type MailReadComposeProps = {
  message?: InlookMessage;
};

const useMessageStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
    paddingTop: '0px',
    overflowY: 'auto',
  },

  meta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: tokens.spacingHorizontalSNudge,
  },

  toFromWrapper: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: tokens.spacingVerticalSNudge,
  },
});

export const MailReadCompose: React.FC<MailReadComposeProps> = ({ message, isComposingMessage, className }) => {
  if (isComposingMessage) {
    return <ComposeMailView />;
  }

  const messageStyles = useMessageStyles();

  if (!message) {
    return (
      <>
        <Element as="div" className={clsx('mailreadcompose-root', messageStyles.root, className)}>
          <Title1>No message selected</Title1>
        </Element>
      </>
    );
  }

  return (
    <Element as="div" className={clsx('mailreadcompose-root', messageStyles.root, className)}>
      <Element as="div" className={clsx('mailreadcompose-subject')}>
        <Title2>{message.subject}</Title2>
      </Element>
      <Element as="div" className={clsx('mailreadcompose-meta', messageStyles.meta)}>
        <Element as="div" className={clsx('mailreadcompose-to-from-wrapper', messageStyles.toFromWrapper)}>
          <Element as="div" className="mailreadcompose-from">
            <Avatar name={message.from} />
          </Element>
          <Element as="div" className="mailreadcompose-to">
            {message.to.map(to => {
              return <Body1>{to}</Body1>;
            })}
          </Element>
        </Element>

        <Element as="div" className="mailreadcompose-time">
          <Body1>{new Date(message.timestamp).toLocaleString()}</Body1>
        </Element>
      </Element>
      <Element as="div" className={clsx('mailreadcompse-message-wrapper')}>
        <Element as="p" className="mailreadcompose-message">
          {message.message}
        </Element>
      </Element>
    </Element>
  );
};

export const MailReadComposeView = observer(props => {
  const { messageStore } = useStoreContext();
  return (
    <MailReadCompose
      message={messageStore.currentSelectedMessage}
      isComposingMessage={messageStore.isComposingMessage}
      {...props}
    />
  );
});
