import * as React from 'react';
import { Button, Subtitle1, Text } from '@fluentui/react-components';
import { action } from '@storybook/addon-actions';

const Btn = ({ styles, count, onClick }) => {
  return (
    <Button onClick={onClick} styles={styles}>
      <Text>The count is: {count}</Text>
    </Button>
  );
};

Btn.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'Menu',
};

export const Demos = () => {
  const [count, setCount] = React.useState(0);
  console.log('asdfasd', Btn.whyDidYouRender);

  return (
    <div>
      <Subtitle1>This story is for testing purposes of this addon</Subtitle1>
      <section>
        <Btn styles={{ width: '100%' }} onClick={() => setCount(count + 1)} count={count} />
      </section>
    </div>
  );
};
Demos.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'Menu',
};

export default {
  title: 'Demos',
  component: Btn,
  components: Demos,
};
