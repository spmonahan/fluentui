import { FASTElement, customElement, attr, html, css, repeat } from '@microsoft/fast-element';
import { injectGlobalCss } from '../../shared/injectStyles';
import { getTestParams } from '../../shared/testParams';
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
  }

  public connectedCallback(): void {
    super.connectedCallback();

    if (getTestParams().test === 'mount') {
      performance.mark('start');
    }

    const slot = this.shadowRoot?.querySelector('slot');
    slot?.addEventListener(
      'slotchange',
      e => {
        if (getTestParams().test === 'inject-styles') {
          setTimeout(() => {
            performanceMeasure('stress', 'start');
            injectGlobalCss();
          }, 2000);
          return;
        }

        if (getTestParams().test === 'mount') {
          // requestPostAnimationFrame polyfill
          requestAnimationFrame(() => {
            addEventListener(
              'message',
              () => {
                performance.measure('stress', 'start');
              },
              { once: true },
            );
            postMessage('', '*');
          });
        }
      },
      { once: true },
    );
  }
}
