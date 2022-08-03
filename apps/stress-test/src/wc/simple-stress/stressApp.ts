import { FASTElement, customElement, attr, html, css, repeat } from '@microsoft/fast-element';
import { getTestParams } from '../../shared/testParams';
import { performanceMeasure } from '../../shared/usePerformanceMeasure';
import { StressComponent } from './stressComponent';

const styles = css`
  :host {
    width: 100%;
    height: 100%;
  }
`;

const template = html<StressApp>`
  <stress-container>
    ${repeat(
      el => new Array(Number(el.numChildren)),
      html<StressComponent, StressApp>`<stress-component
        checked=${(el, ctx) => ctx.parent.checked}
      ></stress-component>`,
    )}
  </stress-container>
`;

@customElement({
  name: 'stress-app',
  template,
  styles,
})
export class StressApp extends FASTElement {
  @attr numChildren: number = 10;
  @attr checked: boolean = false;

  public connectedCallback(): void {
    super.connectedCallback();

    if (getTestParams().test === 'prop-update') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.checked = true;
      }, 2000);
    } else if (getTestParams().test === 'add-node') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.numChildren = 200;
      }, 2000);
    } else if (getTestParams().test === 'remove-node') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.numChildren = 1;
      }, 2000);
    }
  }
}
