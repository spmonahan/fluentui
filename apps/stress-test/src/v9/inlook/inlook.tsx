import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { StoreProvider } from '../../state/context/StoreContext';
import { RootStore } from '../../state/stores/rootStore';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';

ReactDOM.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <StoreProvider value={new RootStore()}>
        <App />
      </StoreProvider>
    </FluentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
