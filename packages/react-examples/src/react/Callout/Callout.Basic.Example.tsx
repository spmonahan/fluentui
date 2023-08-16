import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import root from 'react-shadow';

import {
  Callout,
  Link,
  mergeStyleSets,
  Text,
  FontWeights,
  MergeStylesRootProvider_unstable,
  MergeStylesShadowRootProvider_unstable,
  LayerHost,
} from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { DefaultButton } from '@fluentui/react/lib/Button';

interface ICalloutBasicExampleImplProps {
  inShadowDom?: boolean;
}

export const CalloutBasicExampleImpl: React.FC<ICalloutBasicExampleImplProps> = ({ inShadowDom }) => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
  const buttonId = `${useId('callout-button')}${inShadowDom ? '-shadow' : ''}`;
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');

  return (
    <>
      <Text variant="large">{inShadowDom ? 'Shadow DOM' : 'Light DOM'}</Text>
      <DefaultButton
        id={buttonId}
        onClick={toggleIsCalloutVisible}
        text={isCalloutVisible ? 'Hide callout' : 'Show callout'}
        className={styles.button}
      />
      {isCalloutVisible && (
        <Callout
          className={styles.callout}
          ariaLabelledBy={labelId}
          ariaDescribedBy={descriptionId}
          role="dialog"
          gapSpace={0}
          target={`#${buttonId}`}
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus
          layerProps={inShadowDom ? { hostId: 'layer-host' } : undefined}
        >
          <Text as="h1" block variant="xLarge" className={styles.title} id={labelId}>
            Callout title here
          </Text>
          <Text block variant="small" id={descriptionId}>
            Message body is optional. If help documentation is available, consider adding a link to learn more at the
            bottom.
          </Text>
          <Link href="http://microsoft.com" target="_blank" className={styles.link}>
            Sample link
          </Link>
        </Callout>
      )}
    </>
  );
};

export const CalloutBasicExample: React.FunctionComponent = () => {
  const [shadowRootEl, setShadowRootEl] = React.useState<HTMLElement | null>(null);

  return (
    <>
      <MergeStylesRootProvider_unstable>
        <root.div className="shadow-root" delegatesFocus ref={setShadowRootEl}>
          <MergeStylesShadowRootProvider_unstable shadowRoot={shadowRootEl?.shadowRoot}>
            <CalloutBasicExampleImpl inShadowDom={true} />
            <LayerHost id="layer-host" />
          </MergeStylesShadowRootProvider_unstable>
        </root.div>
      </MergeStylesRootProvider_unstable>
      <CalloutBasicExampleImpl inShadowDom={false} />
    </>
  );
};

const styles = mergeStyleSets({
  button: {
    width: 130,
  },
  callout: {
    width: 320,
    maxWidth: '90%',
    padding: '20px 24px',
  },
  title: {
    marginBottom: 12,
    fontWeight: FontWeights.semilight,
  },
  link: {
    display: 'block',
    marginTop: 20,
  },
});
