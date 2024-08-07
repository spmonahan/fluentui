import * as React from 'react';
import { StoryWright } from 'storywright';
import { Meta } from '@storybook/react';
import { Checkbox } from '@fluentui/react-northstar';
import StoryWrightSteps from './commonStoryWrightSteps';
import CheckboxExample from '../../examples/components/Checkbox/Types/CheckboxExample.shorthand';

export default {
  component: Checkbox,
  title: 'Checkbox',
  decorators: [story => <StoryWright steps={StoryWrightSteps}>{story()}</StoryWright>],
} as Meta<typeof Checkbox>;

export { CheckboxExample };
