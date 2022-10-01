import { makeStyles, mergeClasses, unstableMakeResetStyles } from '@griffel/react';
import { createFocusOutlineStyle } from '@fluentui/react-tabster';
import { tokens } from '@fluentui/react-theme';
import { CheckboxSlots, CheckboxState } from './Checkbox.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const checkboxClassNames: SlotClassNames<CheckboxSlots> = {
  root: 'fui-Checkbox',
  label: 'fui-Checkbox__label',
  input: 'fui-Checkbox__input',
  indicator: 'fui-Checkbox__indicator',
};

// The indicator size is used by the indicator and label styles
const indicatorSizeMedium = '16px';
const indicatorSizeLarge = '20px';

const useRootStyles = unstableMakeResetStyles({
  position: 'relative',
  display: 'inline-flex',
  // ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @griffel/no-shorthands
  padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
  ...createFocusOutlineStyle({ style: {}, selector: 'focus-within' }),
  contain: 'content',
});

const useInputStyles = unstableMakeResetStyles({
  // base: {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  // ...shorthands.margin(0),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @griffel/no-shorthands
  margin: 0,
  opacity: 0,
  cursor: 'pointer',

  // When unchecked, hide the the checkmark icon (child of the indicator slot)
  // [`:not(:checked):not(:indeterminate) ~ .${checkboxClassNames.indicator} > *`]: {
  //   opacity: 0,
  // },

  // Colors for the unchecked state
  // ':enabled:not(:checked):not(:indeterminate)': {
  //   // [`& ~ .${checkboxClassNames.label}`]: {
  //   //   color: tokens.colorNeutralForeground3,
  //   // },
  //   // [`& ~ .${checkboxClassNames.indicator}`]: {
  //   //   ...shorthands.borderColor(tokens.colorNeutralStrokeAccessible),
  //   // },

  //   ':hover': {
  //     // [`& ~ .${checkboxClassNames.label}`]: {
  //     //   color: tokens.colorNeutralForeground2,
  //     // },
  //     // [`& ~ .${checkboxClassNames.indicator}`]: {
  //     //   ...shorthands.borderColor(tokens.colorNeutralStrokeAccessibleHover),
  //     // },
  //   },

  //   ':active:hover': {
  //     // [`& ~ .${checkboxClassNames.label}`]: {
  //     //   color: tokens.colorNeutralForeground1,
  //     // },
  //     // [`& ~ .${checkboxClassNames.indicator}`]: {
  //     //   ...shorthands.borderColor(tokens.colorNeutralStrokeAccessiblePressed),
  //     // },
  //   },
  // },

  // Colors for the checked state
  // ':enabled:checked:not(:indeterminate)': {
  // [`& ~ .${checkboxClassNames.label}`]: {
  //   color: tokens.colorNeutralForeground1,
  // },
  // [`& ~ .${checkboxClassNames.indicator}`]: {
  //   backgroundColor: tokens.colorCompoundBrandBackground,
  //   color: tokens.colorNeutralForegroundInverted,
  //   ...shorthands.borderColor(tokens.colorCompoundBrandBackground),
  // },

  // ':hover': {
  //   [`& ~ .${checkboxClassNames.indicator}`]: {
  //     backgroundColor: tokens.colorCompoundBrandBackgroundHover,
  //     ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundHover),
  //   },
  // },

  // ':active:hover': {
  //   [`& ~ .${checkboxClassNames.indicator}`]: {
  //     backgroundColor: tokens.colorCompoundBrandBackgroundPressed,
  //     ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundPressed),
  //   },
  // },
  // },

  // Colors for the mixed state
  // ':enabled:indeterminate': {
  //   // [`& ~ .${checkboxClassNames.label}`]: {
  //   //   color: tokens.colorNeutralForeground1,
  //   // },
  //   [`& ~ .${checkboxClassNames.indicator}`]: {
  //     ...shorthands.borderColor(tokens.colorCompoundBrandStroke),
  //     color: tokens.colorCompoundBrandForeground1,
  //   },

  //   ':hover': {
  //     [`& ~ .${checkboxClassNames.indicator}`]: {
  //       ...shorthands.borderColor(tokens.colorCompoundBrandStrokeHover),
  //       color: tokens.colorCompoundBrandForeground1Hover,
  //     },
  //   },

  //   ':active:hover': {
  //     [`& ~ .${checkboxClassNames.indicator}`]: {
  //       ...shorthands.borderColor(tokens.colorCompoundBrandStrokePressed),
  //       color: tokens.colorCompoundBrandForeground1Pressed,
  //     },
  //   },
  // },

  // ':disabled': {
  //   cursor: 'default',

  //   // [`& ~ .${checkboxClassNames.label}`]: {
  //   //   color: tokens.colorNeutralForegroundDisabled,
  //   //   '@media (forced-colors: active)': {
  //   //     color: 'GrayText',
  //   //   },
  //   // },
  //   [`& ~ .${checkboxClassNames.indicator}`]: {
  //     ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
  //     color: tokens.colorNeutralForegroundDisabled,
  //     '@media (forced-colors: active)': {
  //       color: 'GrayText',
  //     },
  //   },
  //   [`& ~ .${checkboxClassNames.indicator} svg`]: {
  //     '@media (forced-colors: active)': {
  //       color: 'GrayText',
  //     },
  //   },
  // },
  // },
});

const useIndicatorStyles = makeStyles({
  base: {
    alignSelf: 'flex-start',
    boxSizing: 'border-box',
    flexShrink: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // ...shorthands.overflow('hidden'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    overflow: 'hidden',

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    border: `${tokens.strokeWidthThick} solid`,
    // ...shorthands.border(tokens.strokeWidthThin, 'solid'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderRadius: tokens.borderRadiusSmall,
    // ...shorthands.borderRadius(tokens.borderRadiusSmall),
    fill: 'currentColor',
    pointerEvents: 'none',
  },

  medium: {
    width: indicatorSizeMedium,
    height: indicatorSizeMedium,
    fontSize: '12px',
  },

  large: {
    width: indicatorSizeLarge,
    height: indicatorSizeLarge,
    fontSize: '16px',
  },

  circular: {
    // ...shorthands.borderRadius(tokens.borderRadiusCircular),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderRadius: tokens.borderRadiusCircular,
  },

  rest: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderColor: tokens.colorNeutralStrokeAccessible,
    // ...shorthands.borderColor(tokens.colorNeutralStrokeAccessible),

    '> svg': {
      opacity: 0,
    },

    ':hover': {
      // ...shorthands.borderColor(tokens.colorNeutralStrokeAccessibleHover),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorNeutralStrokeAccessibleHover,
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ':active:hover': {
      // ...shorthands.borderColor(tokens.colorNeutralStrokeAccessiblePressed),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorNeutralStrokeAccessiblePressed,
    },
  },

  checked: {
    backgroundColor: tokens.colorCompoundBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderColor: tokens.colorCompoundBrandBackground,
    // ...shorthands.borderColor(tokens.colorCompoundBrandBackground),

    ':hover': {
      backgroundColor: tokens.colorCompoundBrandBackgroundHover,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorCompountBrandBackgroundHover,
      // ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundHover),
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ':active:hover': {
      backgroundColor: tokens.colorCompoundBrandBackgroundPressed,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorCompoundBrandBackgroundPressed,
      // ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundPressed),
    },
  },

  indeterminate: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderColor: tokens.colorCompoundBrandStroke,
    // ...shorthands.borderColor(tokens.colorCompoundBrandStroke),
    color: tokens.colorCompoundBrandForeground1,

    ':hover': {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorCompoundBrandStrokeHover,
      // ...shorthands.borderColor(tokens.colorCompoundBrandStrokeHover),
      color: tokens.colorCompoundBrandForeground1Hover,
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ':active:hover': {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @griffel/no-shorthands
      borderColor: tokens.colorCompoundBrandStrokePressed,
      // ...shorthands.borderColor(tokens.colorCompoundBrandStrokePressed),
      color: tokens.colorCompoundBrandForeground1Pressed,
    },
  },

  disabled: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @griffel/no-shorthands
    borderColor: tokens.colorNeutralStrokeDisabled,
    // ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
    color: tokens.colorNeutralForegroundDisabled,
    '@media (forced-colors: active)': {
      color: 'GrayText',
    },
    '> svg': {
      '@media (forced-colors: active)': {
        color: 'GrayText',
      },
    },
  },
});

const useLabelStyles = makeStyles({
  base: {
    alignSelf: 'center',
    cursor: 'inherit',
    color: 'inherit',
  },

  before: {
    marginRight: tokens.spacingHorizontalM,
  },
  after: {
    marginLeft: tokens.spacingHorizontalM,
  },

  // Use a (negative) margin to account for the difference between the indicator's height and the label's line height.
  // This prevents the label from expanding the height of the Checkbox, but preserves line height if the label wraps.
  medium: {
    marginTop: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
  },
  large: {
    marginTop: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
  },

  rest: {
    color: tokens.colorNeutralForeground3,

    ':hover': {
      color: tokens.colorNeutralForeground2,
    },

    ':active:hover': {
      color: tokens.colorNeutralForeground1,
    },
  },

  checked: {
    color: tokens.colorNeutralForeground1,
  },

  indeterminate: {
    color: tokens.colorNeutralForeground1,
  },

  disabled: {
    color: tokens.colorNeutralForegroundDisabled,
    '@media (forced-colors: active)': {
      color: 'GrayText',
    },
  },
});

/**
 * Apply styling to the Checkbox slots based on the state
 */
export const useCheckboxStyles_unstable = (state: CheckboxState): CheckboxState => {
  const rootStyles = useRootStyles();
  state.root.className = mergeClasses(checkboxClassNames.root, rootStyles, state.root.className);

  const inputStyles = useInputStyles();
  state.input.className = mergeClasses(checkboxClassNames.input, inputStyles, state.input.className);

  const { checked } = state;

  const indicatorStyles = useIndicatorStyles();
  if (state.indicator) {
    state.indicator.className = mergeClasses(
      checkboxClassNames.indicator,
      indicatorStyles.base,
      checked === true && indicatorStyles.checked,
      checked === 'mixed' && indicatorStyles.indeterminate,
      checked === false && indicatorStyles.rest,
      indicatorStyles[state.size],
      state.shape === 'circular' && indicatorStyles.circular,
      state.indicator.className,
    );
  }

  const labelStyles = useLabelStyles();
  if (state.label) {
    state.label.className = mergeClasses(
      checkboxClassNames.label,
      labelStyles.base,
      checked === true && labelStyles.checked,
      checked === 'mixed' && labelStyles.indeterminate,
      checked === false && labelStyles.rest,
      labelStyles[state.size],
      labelStyles[state.labelPosition],
      state.label.className,
    );
  }

  return state;
};
