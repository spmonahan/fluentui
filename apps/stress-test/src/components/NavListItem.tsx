import * as React from 'react';
import { ActionButton } from '@fluentui/react/lib/Button';
import { InlookFolder } from '../state/data/inlook/types';
import { DefaultPalette } from '@fluentui/react/lib/Theme';
import type { IButtonStyles } from '@fluentui/react/lib/Button';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';

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

export const NavListItem = ({ index, style, data, onClick, isSelected }) => {
  const item = data[index] as InlookFolder;
  const styles = isSelected ? buttonSelectedStyles : buttonStyles;

  return (
    <div style={style}>
      <ActionButton styles={styles} iconProps={{ iconName: item.icon }} onClick={onClick}>
        {item.label}
      </ActionButton>
    </div>
  );
};

export const NavListItemView = observer(({ index, style, data }) => {
  const { folderStore } = useStoreContext();

  const onClick = React.useCallback(
    e => {
      folderStore.setSelectedFolderId(data[index].id);
    },
    [data, index, folderStore],
  );

  const isSelected = folderStore.selectedFolderId === data[index].id ? true : false;

  return <NavListItem index={index} style={style} data={data} onClick={onClick} isSelected={isSelected} />;
});
