import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { initializeIcons, ThemeProvider } from '@fluentui/react';
import { StressApp } from './StressApp';

initializeIcons();

ReactDOM.render(
  <ThemeProvider>
    <StressApp />
  </ThemeProvider>,
  document.getElementById('root'),
);
