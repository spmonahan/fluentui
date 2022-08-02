import { FASTElement, customElement, attr, html, css, repeat } from '@microsoft/fast-element';
import { getTestParams } from '../../shared/testParams';

const styles = css`
  :host {
    width: 100%;
    height: 100%;
  }
`;

const template = html<StressApp>`
  <stress-container>
    ${repeat(el => new Array(Number(el.numChildren)), html`<stress-component></stress-component>`)}
  </stress-container>
`;

@customElement({
  name: 'stress-app',
  template,
  styles,
})
export class StressApp extends FASTElement {
  @attr numChildren: number = 10;

  public connectedCallback(): void {
    super.connectedCallback();
  }
}
