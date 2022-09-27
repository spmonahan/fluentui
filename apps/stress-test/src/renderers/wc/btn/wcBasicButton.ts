import { DOMSelectorTreeComponentRenderer } from '../../../shared/vanilla/types';

const template = document.createElement('template');
template.innerHTML = `<button><slot></slot></button>`;

class WCBasicButton extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('wc-basic-button', WCBasicButton);

const componentRenderer: DOMSelectorTreeComponentRenderer = (node, depth, index) => {
  const btn = document.createElement('wc-basic-button');
  btn.innerHTML = node.value.name + ' ' + index;

  return btn;
};

export default componentRenderer;
