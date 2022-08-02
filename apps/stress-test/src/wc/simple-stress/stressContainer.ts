import { FASTElement, customElement, attr, html, css, repeat } from '@microsoft/fast-element';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';

const styles = css`
  :host {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

// ${repeat(el => new Array(Number(el.numChildren)).fill('1'), html`<stress-component></stress-component>`)}
const template = html<StressContainer>`<slot></slot>`;

@customElement({
  name: 'stress-container',
  template,
  styles,
})
export class StressContainer extends FASTElement {
  constructor() {
    super();

    performance.mark('start');
  }

  public connectedCallback(): void {
    super.connectedCallback();
    const slot = this.shadowRoot?.querySelector('slot');
    slot?.addEventListener(
      'slotchange',
      e => {
        // requestPostAnimationFrame polyfill
        requestAnimationFrame(() => {
          addEventListener(
            'message',
            () => {
              performance.measure('stress-container', 'start');
            },
            { once: true },
          );
          postMessage('', '*');
        });
      },
      { once: true },
    );
  }
}
