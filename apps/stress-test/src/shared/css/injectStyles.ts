// Inspired by: https://github.com/nolanlawson/shadow-selector-benchmark
import { random } from '../utils/random';

const colors = [
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'goldenrod',
  'gold',
  'gray',
  'green',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavenderblush',
  'lavender',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'rebeccapurple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen',
];

export const randomCssFromSelectors = (selectors: string[]): string => {
  const { choice } = random();

  let css = '';

  selectors.forEach(selector => {
    css += `${selector} { background-color: ${choice(colors)}; }\n`;
  });

  return css;
};

function createStyleTag(css: string) {
  const style = document.createElement('style');
  style.textContent = css;
  return style;
}

export type StyleInjectorOptions = {
  target?: HTMLElement;
  constructableStylesheets?: boolean;
};

export function injectGlobalCss(css: string, options: StyleInjectorOptions = {}) {
  const { target = document.head, constructableStylesheets = false } = options;

  performance.mark('fluent-inject-global-css-start');

  if (constructableStylesheets) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    // if (!window.__adoptedStylesheets__) {
    //   window.__adoptedStylesheets__ = [];
    // }
    // window.__adoptedStylesheets__.push(sheet);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  } else {
    const style = createStyleTag(css);
    if (target.shadowRoot) {
      target.shadowRoot.appendChild(style);
    } else {
      target.appendChild(style);
    }
  }

  performance.measure('fluent-inject-global-css', 'fluent-inject-global-css-start');
}

export const styleInjector = (selectors: string[], options?: StyleInjectorOptions): void => {
  injectGlobalCss(randomCssFromSelectors(selectors), options);
};
