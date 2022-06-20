import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { initializeIcons, ThemeProvider } from '@fluentui/react';
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
