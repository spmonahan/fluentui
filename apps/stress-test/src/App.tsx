import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import { Ribbon } from './components/Ribbon';
import { NavHeader } from './components/NavHeader';
import { NavPaneView } from './components/NavPane';
import { MesssagePaneView } from './components/MessagePane';
import { MailReadComposeView } from './components/MailReadCompose';
import clsx from 'clsx';

import './App.css';

const navHeaderHeight = '43px';
const ribbonHeight = '162px';

const appStyles = mergeStyleSets({
  root: {
    backgroundColor: DefaultPalette.neutralLighter,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    height: '100vh',
    overflow: 'hidden',
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
    height: `calc(100% - ${navHeaderHeight} - ${ribbonHeight})`,
  },

  navView: {
    flexShrink: 0,
    width: 220,
  },

  messagePaneView: {
    flexShrink: 0,
    width: 320,
  },

  mailReadComposeView: {
    // flex: '1 1 auto',
  },
});

function App() {
  return (
    <div className={clsx('App', appStyles.root)}>
      <NavHeader className={appStyles.navHeader} />
      <Ribbon className={appStyles.ribbon} />
      <main className={clsx('app-main', appStyles.main, appStyles.main)}>
        <NavPaneView className={appStyles.navView} />
        <MesssagePaneView className={appStyles.messagePaneView} />
        <MailReadComposeView className={appStyles.mailReadComposeView} />
      </main>
    </div>
  );
}

export default App;
