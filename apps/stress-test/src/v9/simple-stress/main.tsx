import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { StressApp } from './StressApp';

ReactDOM.render(
  <FluentProvider theme={webLightTheme}>
    <StressApp />
  </FluentProvider>,
  document.getElementById('root'),
);
