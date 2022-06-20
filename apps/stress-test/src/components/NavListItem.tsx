import * as React from 'react';
import { ActionButton } from '@fluentui/react/lib/Button';
import { InlookFolder } from '../state/data/inlook/types';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import type { IButtonStyles } from '@fluentui/react/lib/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolder } from '../state/navPane/navPaneSlice';
import type { AppDispatch, RootState } from '../state/store';

const buttonStyles: IButtonStyles = {
  root: {
    width: '100%',
  },
  rootHovered: {
    backgroundColor: DefaultPalette.neutralLight,
  },
};

const buttonSelectedStyles: IButtonStyles = {
  root: {
    width: '100%',
    backgroundColor: DefaultPalette.themeLight,
  },
  rootHovered: {
    backgroundColor: DefaultPalette.themeLight,
  },
};

export const NavListItem = ({ index, style, data }) => {
  const item = data[index] as InlookFolder;

  const dispatch: AppDispatch = useDispatch();
  const onClick = React.useCallback(
    e => {
      dispatch(selectFolder(item));
    },
    [dispatch, selectFolder, item],
  );

  const selectedFolderId = useSelector((state: RootState) => state.navPane.selectedFolder);
  const styles = selectedFolderId === item.id ? buttonSelectedStyles : buttonStyles;

  return (
    <div style={style}>
      <ActionButton styles={styles} iconProps={{ iconName: item.icon }} onClick={onClick}>
        {item.label}
      </ActionButton>
    </div>
  );
};
