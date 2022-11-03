import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shadow-island': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export class ShadowIsland extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

if (!customElements.get('shadow-island')) {
  customElements.define('shadow-island', ShadowIsland);
}
