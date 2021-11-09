import { MakeStylesStrictCSSObject } from './types';

type DirectionalProperties = 'border' | 'padding' | 'margin';
type Value = string | 0;

const positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateStyles(
  property: DirectionalProperties,
  suffix: '' | 'Color' | 'Style' | 'Width',
  ...values: Value[]
): MakeStylesStrictCSSObject {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;
  const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];

  const styles: MakeStylesStrictCSSObject = {};

  for (let i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[(property + positionMap[i]) as keyof MakeStylesStrictCSSObject] = valuesWithDefaults[i] as any;
    }
  }

  return styles;
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
export function padding(...values: Value[]): MakeStylesStrictCSSObject {
  return generateStyles('padding', '', ...values);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
export function margin(...values: Value[]): MakeStylesStrictCSSObject {
  return generateStyles('padding', '', ...values);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
export function borderWidth(...values: Value[]): MakeStylesStrictCSSObject {
  return generateStyles('border', 'Width', ...values);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
export function borderStyle(...values: Value[]): MakeStylesStrictCSSObject {
  return generateStyles('border', 'Style', ...values);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
export function borderColor(...values: Value[]): MakeStylesStrictCSSObject {
  return generateStyles('border', 'Color', ...values);
}

/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 */
export function border(...values: Value[]): MakeStylesStrictCSSObject {
  return {
    ...borderWidth(values[0]),
    ...borderStyle(values[1]),
    ...borderColor(values[2]),
  };
}

export function borderTop(...values: Value[]): MakeStylesStrictCSSObject {
  return {
    borderTopWidth: values[0],
    borderTopStyle: values[1] as MakeStylesStrictCSSObject['borderTopStyle'],
    borderTopColor: values[2] as MakeStylesStrictCSSObject['borderTopColor'],
  };
}

export function borderLeft(...values: Value[]): MakeStylesStrictCSSObject {
  return {
    borderLeftWidth: values[0],
    borderLeftStyle: values[1] as MakeStylesStrictCSSObject['borderLeftStyle'],
    borderLeftColor: values[2] as MakeStylesStrictCSSObject['borderLeftColor'],
  };
}

export function borderBottom(...values: Value[]): MakeStylesStrictCSSObject {
  return {
    borderBottomWidth: values[0],
    borderBottomStyle: values[1] as MakeStylesStrictCSSObject['borderBottomStyle'],
    borderBottomColor: values[2] as MakeStylesStrictCSSObject['borderTopColor'],
  };
}

export function borderRight(...values: Value[]): MakeStylesStrictCSSObject {
  return {
    borderRightWidth: values[0],
    borderRightStyle: values[1] as MakeStylesStrictCSSObject['borderRightStyle'],
    borderRightColor: values[2] as MakeStylesStrictCSSObject['borderRightColor'],
  };
}

export function borderRadius(radius: Value): MakeStylesStrictCSSObject {
  return {
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
  };
}
