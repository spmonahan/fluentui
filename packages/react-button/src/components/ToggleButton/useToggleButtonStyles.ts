import { macros, mergeClasses, makeStyles } from '@fluentui/react-make-styles';
import { useButtonStyles } from '../Button/useButtonStyles';
import type { ToggleButtonState } from './ToggleButton.types';

export const toggleButtonClassName = 'fui-ToggleButton';

const useCheckedStyles = makeStyles({
  // Base styles
  base: theme => ({
    backgroundColor: theme.colorNeutralBackground1Selected,
    ...macros.borderColor(theme.colorNeutralStroke1),
    color: theme.colorNeutralForeground1,

    ...macros.borderWidth(theme.strokeWidthThin),

    ':hover': {
      backgroundColor: theme.colorNeutralBackground1Hover,
      ...macros.borderColor(theme.colorNeutralStroke1Hover),
      color: theme.colorNeutralForeground1,
    },

    ':active': {
      backgroundColor: theme.colorNeutralBackground1Pressed,
      ...macros.borderColor(theme.colorNeutralStroke1Pressed),
      color: theme.colorNeutralForeground1,
    },
  }),

  // Appearance variations
  outline: theme => ({
    backgroundColor: theme.colorTransparentBackgroundSelected,

    ':hover': {
      backgroundColor: theme.colorTransparentBackgroundHover,
    },

    ':active': {
      backgroundColor: theme.colorTransparentBackgroundPressed,
    },
  }),
  primary: theme => ({
    backgroundColor: theme.colorBrandBackgroundSelected,
    ...macros.borderColor('transparent'),
    color: theme.colorNeutralForegroundOnBrand,

    ':hover': {
      backgroundColor: theme.colorBrandBackgroundHover,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForegroundOnBrand,
    },

    ':active': {
      backgroundColor: theme.colorBrandBackgroundPressed,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForegroundOnBrand,
    },
  }),
  subtle: theme => ({
    backgroundColor: theme.colorSubtleBackgroundSelected,
    ...macros.borderColor('transparent'),
    color: theme.colorNeutralForeground2BrandSelected,

    ':hover': {
      backgroundColor: theme.colorSubtleBackgroundHover,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForeground2BrandHover,
    },

    ':active': {
      backgroundColor: theme.colorSubtleBackgroundPressed,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForeground2BrandPressed,
    },
  }),
  transparent: theme => ({
    backgroundColor: theme.colorTransparentBackgroundSelected,
    ...macros.borderColor('transparent'),
    color: theme.colorNeutralForeground2BrandSelected,

    ':hover': {
      backgroundColor: theme.colorTransparentBackgroundHover,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForeground2BrandHover,
    },

    ':active': {
      backgroundColor: theme.colorTransparentBackgroundPressed,
      ...macros.borderColor('transparent'),
      color: theme.colorNeutralForeground2BrandPressed,
    },
  }),
});

const useDisabledStyles = makeStyles({
  // Base styles
  base: theme => ({
    backgroundColor: theme.colorNeutralBackgroundDisabled,
    ...macros.borderColor(theme.colorNeutralStrokeDisabled),
    color: theme.colorNeutralForegroundDisabled,

    ':hover': {
      backgroundColor: theme.colorNeutralBackgroundDisabled,
      ...macros.borderColor(theme.colorNeutralStrokeDisabled),
      color: theme.colorNeutralForegroundDisabled,
    },

    ':active': {
      backgroundColor: theme.colorNeutralBackgroundDisabled,
      ...macros.borderColor(theme.colorNeutralStrokeDisabled),
      color: theme.colorNeutralForegroundDisabled,
    },
  }),

  // Appearance variations
  outline: {
    /* No styles */
  },
  primary: {
    ...macros.borderColor('transparent'),

    ':hover': {
      ...macros.borderColor('transparent'),
    },

    ':active': {
      ...macros.borderColor('transparent'),
    },
  },
  subtle: {
    backgroundImage: 'image',
    ...macros.borderColor('transparent'),

    ':hover': {
      backgroundImage: 'image',
      ...macros.borderColor('transparent'),
    },

    ':active': {
      backgroundImage: 'image',
      ...macros.borderColor('transparent'),
    },
  },
  transparent: {
    backgroundImage: 'image',
    ...macros.borderColor('transparent'),

    ':hover': {
      backgroundImage: 'image',
      ...macros.borderColor('transparent'),
    },

    ':active': {
      backgroundImage: 'image',
      ...macros.borderColor('transparent'),
    },
  },
});

export const useToggleButtonStyles = (state: ToggleButtonState): ToggleButtonState => {
  const checkedStyles = useCheckedStyles();
  const disabledStyles = useDisabledStyles();

  const { appearance, checked, disabled, disabledFocusable } = state;

  state.root.className = mergeClasses(
    toggleButtonClassName,

    // Checked styles
    checked && checkedStyles.base,
    appearance && checked && checkedStyles[appearance],

    // Disabled styles
    (disabled || disabledFocusable) && disabledStyles.base,
    appearance && (disabled || disabledFocusable) && disabledStyles[appearance],

    // User provided class name
    state.root.className,
  );

  useButtonStyles(state);

  return state;
};
