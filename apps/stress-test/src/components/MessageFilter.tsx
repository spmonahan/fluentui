import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';
import { Element } from '../shared/Element';
import clsx from 'clsx';
import { mergeStyleSets } from '@fluentui/react';

const styles = mergeStyleSets({
  root: {
    boxSizing: 'border-box',
  },
});

export const MessageFilter = ({ filter, onChange }) => {
  return (
    <Element className={clsx('app-MessageFilter-wrapper', styles.root)}>
      <TextField
        className="app-MessageFilter"
        id="filterField"
        placeholder="Filter Messages"
        value={filter ?? ''}
        onChange={onChange}
      />
    </Element>
  );
};

export const MessageFilterView = observer(() => {
  const { messageStore, folderStore } = useStoreContext();

  React.useEffect(() => {
    messageStore.setMessageFilter(null);
  }, [folderStore.selectedFolderId]);

  const onChange = React.useCallback(
    (e, newValue) => {
      messageStore.setMessageFilter(newValue || null);
    },
    [messageStore],
  );

  return <MessageFilter filter={messageStore.messageFilter} onChange={onChange} />;
});
