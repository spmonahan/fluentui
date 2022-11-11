import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { ReactTest } from '../../../shared/react/ReactTest';
import { getTestOptions } from '../../../shared/utils/testOptions';
import root from 'react-shadow/griffel';

const { fixtureName, rendererName, r } = getTestOptions();
document.title += ' | ' + r ?? rendererName;

type TestProps = {
  isShadow: boolean;
};

type InnerTestProps = {
  disableTest: boolean;
  targetElementId: string;
};

const InnerTest: React.FC<InnerTestProps> = ({ disableTest, targetElementId }) => {
  // Need to wrap FluentProvider in this inner component
  // so we get a DOM node from the document.getElementById call.
  return (
    <FluentProvider theme={webLightTheme} targetElement={document.getElementById(targetElementId)}>
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

const Test: React.FC<TestProps> = ({ isShadow }) => {
  const Wrapper = isShadow ? root.div : 'div';

  return (
    <>
      <Wrapper id="root-1">
        <InnerTest disableTest={true} targetElementId="root-1" />
      </Wrapper>
      <Wrapper id="root-2">
        <InnerTest disableTest={false} targetElementId="root-2" />
      </Wrapper>
    </>
  );
};

const { shadowIsland } = getTestOptions();
const useShadowIsland = shadowIsland === 'true';

ReactDOM.render(<Test isShadow={useShadowIsland} />, document.getElementById('root'));
