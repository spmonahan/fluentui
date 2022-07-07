import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { observer } from 'mobx-react';
import { useStoreContext } from '../state/context/StoreContext';

export const MessageFilter = ({ filter, onChange }) => {
  return (
    <TextField
      className="app-MessageFilter"
      id="filterField"
      placeholder="Filter Messages"
      value={filter ?? ''}
      onChange={onChange}
    />
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
