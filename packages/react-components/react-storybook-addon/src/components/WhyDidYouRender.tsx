import * as React from 'react';
import { AddonPanel } from '@storybook/components';
import { Addon } from '@storybook/addons';
import { useAddonState, useArgs } from '@storybook/api';

// give a unique name for the panel
const Panel = () => {
  const [state, setState] = useAddonState('whyDidYouRender', { enabled: false });
  const [args, updateArgs, resetArgs] = useArgs();

  const whyDidYouRender = args?.whyDidYouRender ?? { enabled: false };

  return (
    <div>
      <label htmlFor="enabled">Enabled?</label>
      <input
        id="enabled"
        type="checkbox"
        checked={whyDidYouRender.enabled}
        onChange={e => updateArgs({ ...args, whyDidYouRender: { ...whyDidYouRender, enabled: e.target.checked } })}
      />
    </div>
  );
};

export const WhyDidYouRenderPanel: Addon['render'] = ({ active, key }) => {
  return (
    <AddonPanel active={!!active} key={key}>
      <Panel />
    </AddonPanel>
  );
};
