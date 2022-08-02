import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { StressContainer } from './StressContainer';

ReactDOM.render(
  <FluentProvider theme={webLightTheme}>
    <StressContainer numChildren={100} />
  </FluentProvider>,
  document.getElementById('root'),
);
