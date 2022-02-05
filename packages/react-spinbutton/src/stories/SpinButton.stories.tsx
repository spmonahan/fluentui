import { SpinButton } from '../index';

import descriptionMd from './SpinButtonDescription.md';
import bestPracticesMd from './SpinButtonBestPractices.md';

export { Default } from './SpinButtonDefault.stories';
export { Controlled } from './SpinButtonControlled.stories';

export default {
  title: 'Components/SpinButton',
  component: SpinButton,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
