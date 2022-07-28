import * as React from 'react';

import { makeStyles, mergeClasses, tokens, shorthands } from '@fluentui/react-components';

// import { mergeStyleSets } from '@fluentui/react/lib/Styling';
// import { DefaultPalette } from '@fluentui/react/lib/Theme';
// import { Ribbon } from './components/Ribbon';
// import { NavHeader } from './components/NavHeader';
// import { NavPaneView } from './components/NavPane';
// import { MesssagePaneView } from './components/MessagePane';
// import { MailReadComposeView } from './components/MailReadCompose';

import './App.css';
import { NavHeader } from './components/NavHeader';
import { Ribbon } from './components/Ribbon';
import { NavPaneView } from './components/NavPane';
import { MesssagePaneView } from './components/MessagePane';
import { MailReadComposeView } from './components/MailReadCompose';

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
    height: `calc(100% - ${navHeaderHeight} - ${ribbonHeight})`,
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

// const appStyles = mergeStyleSets({
//   root: {
//     backgroundColor: DefaultPalette.neutralLighter,
//     display: 'flex',
//     flexDirection: 'column',
//     rowGap: 10,
//     height: '100vh',
//     overflow: 'hidden',
//   },

//   navHeader: {
//     height: navHeaderHeight,
//   },

//   ribbon: {
//     height: ribbonHeight,
//   },

//   main: {
//     display: 'flex',
//     alignItems: 'stretch',
//     height: `calc(100% - ${navHeaderHeight} - ${ribbonHeight})`,
//   },

//   navView: {
//     flexShrink: 0,
//     width: 220,
//   },

//   messagePaneView: {
//     flexShrink: 0,
//     width: 320,
//   },

//   mailReadComposeView: {
//     // flex: '1 1 auto',
//   },
// });

// function App() {
//   return (
//     <div className={clsx('App', appStyles.root)}>
//       <NavHeader className={appStyles.navHeader} />
//       <Ribbon className={appStyles.ribbon} />
//       <main className={clsx('app-main', appStyles.main, appStyles.main)}>
//         <NavPaneView className={appStyles.navView} />
//         <MesssagePaneView className={appStyles.messagePaneView} />
//         <MailReadComposeView className={appStyles.mailReadComposeView} />
//       </main>
//     </div>
//   );
// }

// export default App;

function App() {
  const appStyles = useAppStyles();

  return (
    <div className={mergeClasses('App', appStyles.root)}>
      <NavHeader className={appStyles.navHeader} />
      <Ribbon className={appStyles.ribbon} />
      <main className={mergeClasses('app-Main', appStyles.main)}>
        <NavPaneView className={appStyles.navView} />
        <MesssagePaneView className={appStyles.messagePaneView} />
        <MailReadComposeView />
      </main>
    </div>
  );
}

export default App;
