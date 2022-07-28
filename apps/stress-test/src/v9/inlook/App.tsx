import * as React from 'react';

import { makeStyles, tokens, shorthands } from '@fluentui/react-components';

import './App.css';
import { NavHeader } from './components/NavHeader';
import { Ribbon } from './components/Ribbon';
import { NavPaneView } from './components/NavPane';
import { MesssagePaneView } from './components/MessagePane';
import { MailReadComposeView } from './components/MailReadCompose';
import clsx from 'clsx';

const navHeaderHeight = '43px';
const ribbonHeight = '162px';

const useAppStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    height: '100vh',
    ...shorthands.overflow('hidden'),
  },

  navHeader: {
    height: navHeaderHeight,
  },

  ribbon: {
    height: ribbonHeight,
  },

  main: {
    display: 'flex',
    alignItems: 'stretch',
    height: `calc(100% - ${navHeaderHeight} - ${ribbonHeight} - 20px)`,
    paddingTop: '20px',
  },

  navView: {
    flexShrink: 0,
    width: '220px',
  },

  messagePaneView: {
    flexShrink: 0,
    width: '320px',
  },
});

function App() {
  const appStyles = useAppStyles();

  return (
    <div className={clsx('App', appStyles.root)}>
      <NavHeader className={appStyles.navHeader} />
      <Ribbon className={appStyles.ribbon} />
      <main className={clsx('app-Main', appStyles.main)}>
        <NavPaneView className={appStyles.navView} />
        <MesssagePaneView className={appStyles.messagePaneView} />
        <MailReadComposeView />
      </main>
    </div>
  );
}

export default App;
