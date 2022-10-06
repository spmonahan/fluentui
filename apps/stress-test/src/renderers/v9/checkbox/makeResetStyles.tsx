import * as React from 'react';
import { makeResetStyles } from '@griffel/react';
import {
  useCheckbox_unstable,
  renderCheckbox_unstable,
  createFocusOutlineStyle,
  tokens,
  checkboxClassNames,
  CheckboxState,
  CheckboxProps,
  makeStyles,
  shorthands,
  mergeClasses,
} from '@fluentui/react-components';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { ReactSelectorTreeComponentRenderer } from '../../../shared/react/types';

// The indicator size is used by the indicator and label styles
const indicatorSizeMedium = '16px';
const indicatorSizeLarge = '20px';

const useRootStyles = makeResetStyles({
  position: 'relative',
  display: 'inline-flex',
  padding: `${(tokens.spacingVerticalS, tokens.spacingHorizontalS)}`,
  ...createFocusOutlineStyle({ style: {}, selector: 'focus-within' }),
  contain: 'content',
});

const useInputStyles = makeResetStyles({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  margin: 0,
  opacity: 0,
  cursor: 'pointer',
});

const useIndicatorBaseStyles = makeResetStyles({
  alignSelf: 'flex-start',
  boxSizing: 'border-box',
  flexShrink: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  border: `${tokens.strokeWidthThin} solid`,
  borderRadius: tokens.borderRadiusSmall,
  fill: 'currentColor',
  pointerEvents: 'none',

  width: indicatorSizeMedium,
  height: indicatorSizeMedium,
  fontSize: '12px',
});

const useIndicatorStyles = makeStyles({
  large: {
    width: indicatorSizeLarge,
    height: indicatorSizeLarge,
    fontSize: '16px',
  },

  circular: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
  },

  rest: {
    ...shorthands.borderColor(tokens.colorNeutralStrokeAccessible),

    '> svg': {
      opacity: 0,
    },

    ':hover': {
      ...shorthands.borderColor(tokens.colorNeutralStrokeAccessibleHover),
    },

    ':active:hover': {
      ...shorthands.borderColor(tokens.colorNeutralStrokeAccessiblePressed),
    },
  },

  checked: {
    backgroundColor: tokens.colorCompoundBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.borderColor(tokens.colorCompoundBrandBackground),

    ':hover': {
      backgroundColor: tokens.colorCompoundBrandBackgroundHover,
      ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundHover),
    },

    ':active:hover': {
      backgroundColor: tokens.colorCompoundBrandBackgroundPressed,
      ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundPressed),
    },
  },

  indeterminate: {
    ...shorthands.borderColor(tokens.colorCompoundBrandStroke),
    color: tokens.colorCompoundBrandForeground1,

    ':hover': {
      ...shorthands.borderColor(tokens.colorCompoundBrandStrokeHover),
      color: tokens.colorCompoundBrandForeground1Hover,
    },

    ':active:hover': {
      ...shorthands.borderColor(tokens.colorCompoundBrandStrokePressed),
      color: tokens.colorCompoundBrandForeground1Pressed,
    },
  },

  disabled: {
    ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
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

const useLabelBaseStyles = makeResetStyles({
  alignSelf: 'center',
  cursor: 'inherit',
  color: 'inherit',
});

const useLabelStyles = makeStyles({
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
export const useMakeResetStylesCheckbox_unstable = (state: CheckboxState, disabled?: boolean): CheckboxState => {
  const rootStyles = useRootStyles();
  state.root.className = mergeClasses(checkboxClassNames.root, rootStyles, state.root.className);

  const inputStyles = useInputStyles();
  state.input.className = mergeClasses(checkboxClassNames.input, inputStyles, state.input.className);

  const { checked } = state;

  const indicatorBaseStyles = useIndicatorBaseStyles();
  const indicatorStyles = useIndicatorStyles();
  if (state.indicator) {
    state.indicator.className = mergeClasses(
      checkboxClassNames.indicator,
      indicatorBaseStyles,
      checked === true && indicatorStyles.checked,
      checked === 'mixed' && indicatorStyles.indeterminate,
      checked === false && indicatorStyles.rest,
      disabled && indicatorStyles.disabled,
      state.size === 'large' && indicatorStyles.large,
      state.shape === 'circular' && indicatorStyles.circular,
      state.indicator.className,
    );
  }

  const labelBaseStyles = useLabelBaseStyles();
  const labelStyles = useLabelStyles();
  if (state.label) {
    state.label.className = mergeClasses(
      checkboxClassNames.label,
      labelBaseStyles,
      checked === true && labelStyles.checked,
      checked === 'mixed' && labelStyles.indeterminate,
      checked === false && labelStyles.rest,
      disabled && labelStyles.disabled,
      labelStyles[state.size],
      labelStyles[state.labelPosition],
      state.label.className,
    );
  }

  return state;
};

export const MakeResetStylesCheckbox: ForwardRefComponent<CheckboxProps> = React.forwardRef((props, ref) => {
  const state = useCheckbox_unstable(props, ref);

  useMakeResetStylesCheckbox_unstable(state, props.disabled);
  return renderCheckbox_unstable(state);
});

const componentRenderer: ReactSelectorTreeComponentRenderer = (node, depth, index) => {
  return <MakeResetStylesCheckbox label={`${node.value.name}, ${index}`} />;
};

export default componentRenderer;
