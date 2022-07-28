import * as React from 'react';

import { makeStyles } from '@fluentui/react-components';

import { MessageFilterView } from './MessageFilter';
import { MessageListView } from './MessageList';
import { Element } from '../../../shared/Element';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    height: 'calc(100% - 32px)',
  },
});

export const MesssagePaneView = props => {
  const styles = useStyles();

  return (
    <Element as="div" depth={1} classPrefix="message-pane" className={clsx('app-MessagePane', props.className)}>
      <div className={styles.root}>
        <MessageFilterView />
        <MessageListView />
      </div>
    </Element>
  );
};
