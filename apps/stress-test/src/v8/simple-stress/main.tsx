import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { initializeIcons, ThemeProvider } from '@fluentui/react';
import { StressContainer } from './StressContainer';

initializeIcons();

ReactDOM.render(
  <ThemeProvider>
    <StressContainer numChildren={100} />
  </ThemeProvider>,
  document.getElementById('root'),
);
