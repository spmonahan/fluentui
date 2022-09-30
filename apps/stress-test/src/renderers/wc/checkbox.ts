// import { fluentCheckbox, provideFluentDesignSystem } from '@fluentui/web-components';
import { Checkbox } from '@fluentui/web-components';
import { DOMSelectorTreeComponentRenderer } from '../../shared/vanilla/types';

// provideFluentDesignSystem().register(fluentCheckbox());

const componentRenderer: DOMSelectorTreeComponentRenderer = (node, depth, index) => {
  const checkbox = document.createElement('fluent-checkbox') as Checkbox;
  checkbox.innerHTML = node.value.name + ' ' + index;

  return checkbox;
};

export default componentRenderer;
