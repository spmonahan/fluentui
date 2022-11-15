import { makeDecorator } from '@storybook/addons';
import { defaultNotifier } from '@welldone-software/why-did-you-render';

type WhyDidYouRenderType = {
  whyDidYouRender?: {};
};

export const withWhyDidYouRender = makeDecorator({
  name: 'withWhyDidYouRender',
  parameterName: 'cats',
  wrapper: (storyFn, context, args) => {
    console.log('context!', context);
    console.log('args!', args);
    const { component } = context;

    if (component) {
      // eslint-disable-next-line
      // @ts-ignore
      const yargs = context.args;
      if ((yargs as WhyDidYouRenderType)?.whyDidYouRender?.enabled) {
        console.log('enable wdyr');
        (component as WhyDidYouRenderType).whyDidYouRender = {
          logOnDifferentValues: true,
        };
      } else {
        console.log('disable wdyr');
        delete (component as WhyDidYouRenderType).whyDidYouRender;
      }
    }

    return storyFn(context);
  },
});
