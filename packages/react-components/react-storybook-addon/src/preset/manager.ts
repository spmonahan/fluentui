import { addons, types } from '@storybook/addons';

import { ADDON_ID, THEME_ID } from '../constants';
import { ThemePicker } from '../components/ThemePicker';
import { WhyDidYouRenderPanel } from '../components/WhyDidYouRender';

addons.register(ADDON_ID, () => {
  addons.add(THEME_ID, {
    title: 'Fluent Theme Picker',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ThemePicker,
  });
});

const WDYR_ADDON_ID = '@fluentui/why-did-you-render';
const PANEL_ID = `${WDYR_ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Why Did You Render?',
    render: WhyDidYouRenderPanel,
  });
});
