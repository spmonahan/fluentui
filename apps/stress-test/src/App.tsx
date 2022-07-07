import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import { Ribbon } from './components/Ribbon';
import { NavHeader } from './components/NavHeader';
import { NavPaneView } from './components/NavPane';
import { MesssagePaneView } from './components/MessagePane';

import './App.css';
import { Element } from './shared/Element';

const appStyles = mergeStyleSets({
  root: {
    backgroundColor: DefaultPalette.neutralLighter,
    display: 'grid',
    gridTemplateRows: '48px 162px 1fr',
    height: '100vh',
    overflow: 'hidden',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '220px 320px 1fr',
  },
});

function App() {
  return (
    <Element as="div" className={`App ${appStyles.root}`}>
      <NavHeader />
      <Ribbon />
      <main className={`app-main ${appStyles.main}`}>
        <NavPaneView />
        <MesssagePaneView />
        <div style={{ background: 'blue', height: '100%' }}></div>
      </main>
    </Element>
  );
}

export default App;
