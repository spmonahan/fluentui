import * as React from 'react';

import { ToggleButton, makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import { MailInbox24Regular, Send24Regular, Delete24Regular, Folder24Regular } from '@fluentui/react-icons';
import { InlookFolder } from '../../../state/data/inlook/types';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { Element } from '../../../shared/Element';

const useButtonStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100%',

    ':hover': {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
  },

  rootSelected: {
    backgroundColor: tokens.colorBrandBackgroundInvertedHover,
    ':hover': {
      backgroundColor: tokens.colorBrandBackgroundInvertedHover,
    },
  },
});

type IconMapFn = (iconName: string) => React.ReactNode;

const getIcon: IconMapFn = iconName => {
  switch (iconName) {
    case 'Inbox':
      return MailInbox24Regular;
    case 'Send':
      return Send24Regular;
    case 'Delete':
      return Delete24Regular;
    default:
      return Folder24Regular;
  }
};

export const NavListItem = ({ index, data, onClick, isSelected }) => {
  const item = data[index] as InlookFolder;

  const buttonStyles = useButtonStyles();

  const classNames = mergeClasses(buttonStyles.root, isSelected ? buttonStyles.rootSelected : undefined);

  const Icon = getIcon(item.icon);

  return (
    <Element as="div" classPrefix="nav-list-item">
      <ToggleButton className={classNames} icon={<Icon />} onClick={onClick} checked={isSelected} appearance="subtle">
        {item.label}
      </ToggleButton>
    </Element>
  );
};

export const NavListItemView = observer(({ index, data }) => {
  const { folderStore } = useStoreContext();

  const onClick = React.useCallback(
    e => {
      folderStore.setSelectedFolderId(data[index].id);
    },
    [data, index, folderStore],
  );

  const isSelected = folderStore.selectedFolderId === data[index].id ? true : false;

  return <NavListItem index={index} data={data} onClick={onClick} isSelected={isSelected} />;
});
