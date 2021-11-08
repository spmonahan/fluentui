import { macros, mergeClasses, makeStyles } from '@fluentui/react-make-styles';
import type { ImageState } from './Image.types';

export const imageClassName = 'fui-Image';

const useStyles = makeStyles({
  root: theme => ({
    ...macros.borderColor(theme.colorNeutralStroke1),
    ...macros.borderRadius('top', theme.borderRadiusNone),
    ...macros.borderRadius('left', theme.borderRadiusNone),
    ...macros.borderRadius('right', theme.borderRadiusNone),
    ...macros.borderRadius('bottom', theme.borderRadiusNone),

    boxSizing: 'border-box',
    display: 'inline-block',
  }),
  rootBordered: theme => ({
    ...macros.borderStyle('solid'),
    ...macros.borderWidth(theme.strokeWidthThin),
  }),
  rootCircular: theme => ({
    ...macros.borderRadius('top', theme.borderRadiusCircular),
    ...macros.borderRadius('left', theme.borderRadiusCircular),
    ...macros.borderRadius('right', theme.borderRadiusCircular),
    ...macros.borderRadius('bottom', theme.borderRadiusCircular),
  }),
  rootRounded: theme => ({
    ...macros.borderRadius('top', theme.borderRadiusMedium),
    ...macros.borderRadius('left', theme.borderRadiusMedium),
    ...macros.borderRadius('right', theme.borderRadiusMedium),
    ...macros.borderRadius('bottom', theme.borderRadiusMedium),
  }),
  rootShadow: theme => ({
    boxShadow: theme.shadow4,
  }),
  rootFitNone: {
    objectFit: 'none',
    objectPosition: 'left top',
    height: '100%',
    width: '100%',
  },
  rootFitCenter: {
    objectFit: 'none',
    objectPosition: 'center',
    height: '100%',
    width: '100%',
  },
  rootFitCover: {
    objectFit: 'cover',
    objectPosition: 'center',
    height: '100%',
    width: '100%',
  },
  rootFitContain: {
    objectFit: 'contain',
    objectPosition: 'center',
    height: '100%',
    width: '100%',
  },
  rootBlock: {
    width: '100%',
  },
});

export const useImageStyles = (state: ImageState) => {
  const styles = useStyles();
  state.root.className = mergeClasses(
    imageClassName,
    styles.root,
    state.bordered && styles.rootBordered,
    state.shape === 'circular' && styles.rootCircular,
    state.shape === 'rounded' && styles.rootRounded,
    state.shadow && styles.rootShadow,
    state.fit === 'none' && styles.rootFitNone,
    state.fit === 'center' && styles.rootFitCenter,
    state.fit === 'cover' && styles.rootFitCover,
    state.fit === 'contain' && styles.rootFitContain,
    state.block && styles.rootBlock,
    state.root.className,
  );
};
