import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { ReactTest } from '../../../shared/react/ReactTest';
import { getTestOptions } from '../../../shared/utils/testOptions';
import { mountReactShadowIsland } from '../../../shared/react/ReactShadowIsland';

const { fixtureName, rendererName, r } = getTestOptions();
document.title += ' | ' + r ?? rendererName;

type TestProps = {
  targetElement: HTMLElement | null;
  disableTest: boolean;
};

const Test: React.FC<TestProps> = ({ targetElement, disableTest }) => {
  return (
    <FluentProvider theme={webLightTheme} targetElement={targetElement}>
      <ReactTest
        target="v9"
        fixtureName={fixtureName}
        rendererName={rendererName ?? r}
        testOptions={{
          disableTest: disableTest.toString(),
        }}
      />
    </FluentProvider>
  );
};

const { shadowIsland } = getTestOptions();
const useShadowIsland = shadowIsland === 'true';

if (useShadowIsland) {
  const root1 = document.createElement('shadow-island');
  root1.id = 'root-1';

  const root2 = document.createElement('shadow-island');
  root2.id = 'root-2';

  document.body.prepend(root2);
  document.body.prepend(root1);

  mountReactShadowIsland(
    <Test disableTest={false} targetElement={document.getElementById('root-1')} />,
    document.getElementById('root-1'),
  );
  mountReactShadowIsland(
    <Test disableTest={true} targetElement={document.getElementById('root-2')} />,
    document.getElementById('root-2'),
  );
} else {
  const root1 = document.createElement('div');
  root1.id = 'root-1';

  const root2 = document.createElement('div');
  root2.id = 'root-2';

  document.body.prepend(root2);
  document.body.prepend(root1);

  ReactDOM.render(<Test disableTest={false} targetElement={null} />, document.getElementById('root-1'));
  ReactDOM.render(<Test disableTest={true} targetElement={null} />, document.getElementById('root-2'));
}
