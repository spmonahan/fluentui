import * as React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import { Ribbon } from './components/Ribbon';
import { NavHeader } from './components/NavHeader';
import store from './state/store';
import { Provider } from 'react-redux';

import './App.css';

const appStyles = mergeStyleSets({
  root: {
    backgroundColor: DefaultPalette.neutralLighter,
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '220px 320px 1fr',
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className={`App ${appStyles.root}`}>
        <NavHeader />
        <Ribbon />
        <main className={`app-main ${appStyles.main}`}>
          <div style={{ background: 'red', height: 100 }}></div>
          <div style={{ background: 'green', height: 100 }}></div>
          <div style={{ background: 'blue', height: 100 }}></div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
