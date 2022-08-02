// import { LCG } from 'random-seedable';

// // Taken from: https://github.com/nolanlawson/shadow-selector-benchmark
// const SEED = 114569486; // use a consistent seed

// const tags = [
//   // Tags used primarily in React implementation
//   'button',
//   'input',
//   'hr',
//   'svg',
//   'div',

//   // Custom elements used in Web Component implementation
//   'stress-app',
//   'stress-container',
//   'stress-component',
// ];

// let random;

// const colors = [
//   'aliceblue',
//   'antiquewhite',
//   'aqua',
//   'aquamarine',
//   'azure',
//   'beige',
//   'bisque',
//   'black',
//   'blanchedalmond',
//   'blue',
//   'blueviolet',
//   'brown',
//   'burlywood',
//   'cadetblue',
//   'chartreuse',
//   'chocolate',
//   'coral',
//   'cornflowerblue',
//   'cornsilk',
//   'crimson',
//   'cyan',
//   'darkblue',
//   'darkcyan',
//   'darkgoldenrod',
//   'darkgray',
//   'darkgreen',
//   'darkgrey',
//   'darkkhaki',
//   'darkmagenta',
//   'darkolivegreen',
//   'darkorange',
//   'darkorchid',
//   'darkred',
//   'darksalmon',
//   'darkseagreen',
//   'darkslateblue',
//   'darkslategray',
//   'darkslategrey',
//   'darkturquoise',
//   'darkviolet',
//   'deeppink',
//   'deepskyblue',
//   'dimgray',
//   'dimgrey',
//   'dodgerblue',
//   'firebrick',
//   'floralwhite',
//   'forestgreen',
//   'fuchsia',
//   'gainsboro',
//   'ghostwhite',
//   'goldenrod',
//   'gold',
//   'gray',
//   'green',
//   'greenyellow',
//   'grey',
//   'honeydew',
//   'hotpink',
//   'indianred',
//   'indigo',
//   'ivory',
//   'khaki',
//   'lavenderblush',
//   'lavender',
//   'lawngreen',
//   'lemonchiffon',
//   'lightblue',
//   'lightcoral',
//   'lightcyan',
//   'lightgoldenrodyellow',
//   'lightgray',
//   'lightgreen',
//   'lightgrey',
//   'lightpink',
//   'lightsalmon',
//   'lightseagreen',
//   'lightskyblue',
//   'lightslategray',
//   'lightslategrey',
//   'lightsteelblue',
//   'lightyellow',
//   'lime',
//   'limegreen',
//   'linen',
//   'magenta',
//   'maroon',
//   'mediumaquamarine',
//   'mediumblue',
//   'mediumorchid',
//   'mediumpurple',
//   'mediumseagreen',
//   'mediumslateblue',
//   'mediumspringgreen',
//   'mediumturquoise',
//   'mediumvioletred',
//   'midnightblue',
//   'mintcream',
//   'mistyrose',
//   'moccasin',
//   'navajowhite',
//   'navy',
//   'oldlace',
//   'olive',
//   'olivedrab',
//   'orange',
//   'orangered',
//   'orchid',
//   'palegoldenrod',
//   'palegreen',
//   'paleturquoise',
//   'palevioletred',
//   'papayawhip',
//   'peachpuff',
//   'peru',
//   'pink',
//   'plum',
//   'powderblue',
//   'purple',
//   'rebeccapurple',
//   'red',
//   'rosybrown',
//   'royalblue',
//   'saddlebrown',
//   'salmon',
//   'sandybrown',
//   'seagreen',
//   'seashell',
//   'sienna',
//   'silver',
//   'skyblue',
//   'slateblue',
//   'slategray',
//   'slategrey',
//   'snow',
//   'springgreen',
//   'steelblue',
//   'tan',
//   'teal',
//   'thistle',
//   'tomato',
//   'turquoise',
//   'violet',
//   'wheat',
//   'white',
//   'whitesmoke',
//   'yellow',
//   'yellowgreen',
// ];

// export function randomChoice(arr) {
//   return random.choice(arr);
// }

// export const randomTag = () => randomChoice(tags);
// export const randomColor = () => randomChoice(colors);
// export const randomString = () => 'x' + Math.round(random.int()).toString(16);
// export const randomNumber = (from, to) => random.randRange(from, to);
// export const randomBool = () => random.bool();
// export const randomCoin = prob => random.coin(prob);

// export const resetRandomSeed = () => {
//   random = new LCG(SEED); // LCG used because it's relatively fast compared to others
// };

// resetRandomSeed();

// function generateAttributeValueSelector({ name, value }) {
//   return `[${name}=${JSON.stringify(value)}]`;
// }

// function generateRandomCssRule({ classes, attributes, tags }) {
//   function generateRandomFullSelector() {
//     let str = '';
//     do {
//       str += generateRandomSelector(['tag', 'class', 'attributeName', 'attributeValue']);

//       if (randomBool()) {
//         str += generateRandomSelector([
//           'class',
//           'attributeName',
//           'attributeValue',
//           'notClass',
//           'notAttribute',
//           'nthChild',
//         ]); // combinator selector
//       }
//       str += ' '; // descendant selector
//     } while (randomBool());

//     return str;
//   }

//   function generateRandomSelector(selectorTypes) {
//     const selectorType = randomChoice(selectorTypes);
//     switch (selectorType) {
//       case 'tag':
//         return tags.length ? randomChoice(tags) : randomString();
//       case 'class':
//         return '.' + (classes.length ? randomChoice(classes) : randomString());
//       case 'attributeName':
//         return '[' + (attributes.length ? randomChoice(attributes.map(_ => _.name)) : randomString()) + ']';
//       case 'attributeValue':
//         return generateAttributeValueSelector(
//           attributes.length ? randomChoice(attributes) : { name: randomString(), value: randomString() },
//         );
//       case 'notClass':
//         return ':not(.' + (classes.length ? randomChoice(classes) : randomString()) + ')';
//       case 'notAttribute':
//         return ':not([' + (attributes.length ? randomChoice(attributes.map(_ => _.name)) : randomString()) + '])';
//       case 'nthChild':
//         return `:nth-child(${randomNumber(1, 5)})`;
//     }
//   }

//   const selector = generateRandomFullSelector();

//   return `${selector} { background-color: ${randomColor()}; }`;
// }

// export function generateRandomCss({ numRules, classes, attributes, tags }) {
//   let str = '';

//   for (let i = 0; i < numRules; i++) {
//     str += generateRandomCssRule({ classes, attributes, tags }) + '\n\n';
//   }

//   return str;
// }

function createStyleTag(css) {
  const style = document.createElement('style');
  style.textContent = css;
  return style;
}

export function injectGlobalCss(css) {
  performance.mark('fluent-inject-global-css-start');
  css = `
    div {
      background-color: yellow;
    }

    button {
      background-color: hotpink;
    }

    hr {
      background-color: red;
    }

    stress-app: {
      background-color: yellow;
    }

    stress-container {
      background-color: green;
    }

    stress-component: {
      background-color: aliceblue;
    }
  `;

  document.head.appendChild(createStyleTag(css));
  performance.measure('fluent-inject-global-css', 'fluent-inject-global-css-start');
}
