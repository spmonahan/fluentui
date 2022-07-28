import * as React from 'react';

import { ToggleButton, makeStyles, tokens, mergeClasses } from '@fluentui/react-components';
import { MailInbox24Regular, Send24Regular, Delete24Regular, Folder24Regular } from '@fluentui/react-icons';
import { InlookFolder } from '../../../state/data/inlook/types';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { Element } from '../../../shared/Element';
import clsx from 'clsx';

const useButtonStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'blue',
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

export const NavListItem = ({ index, style, data, onClick, isSelected }) => {
  const item = data[index] as InlookFolder;

  const buttonStyles = useButtonStyles();

  // const classNames = mergeClasses(buttonStyles.root);

  const Icon = getIcon(item.icon);

  return (
    <Element as="div" style={style} depth={1} classPrefix="nav-list-item">
      <ToggleButton
        className={buttonStyles.root}
        style={{ maxWidth: '100%', width: '100%', justifyContent: 'flex-start' }}
        icon={<Icon />}
        onClick={onClick}
        checked={isSelected}
        appearance="subtle"
      >
        {item.label}
      </ToggleButton>
    </Element>
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
