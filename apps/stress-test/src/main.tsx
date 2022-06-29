import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { StoreProvider } from './state/context/StoreContext';

import { initializeIcons, ThemeProvider } from '@fluentui/react';
import { RootStore } from './state/stores/rootStores';
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <StoreProvider value={new RootStore()}>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
