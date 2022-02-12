import { SpinButton } from '../index';

import descriptionMd from './SpinButtonDescription.md';
import bestPracticesMd from './SpinButtonBestPractices.md';

export { Default } from './SpinButtonDefault.stories';
export { Uncontrolled } from './SpinButtonUncontrolled.stories';
export { UncontrolledFormatting } from './SpinButtonUncontrolledFormatting.stories';
export { Controlled } from './SpinButtonControlled.stories';
export { Convert } from './SpinButtonConvert.stories';
export { DatePicker } from './SpinButtonDatePicker.stories';
export { DeclControlled } from './DeclarativeSpinButtonControlled.stories';

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
