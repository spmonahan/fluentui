import * as React from 'react';

import { Input } from '@fluentui/react-components';
import { observer } from 'mobx-react';
import { useStoreContext } from '../../../state/context/StoreContext';
import { Element } from '../../../shared/Element';

export const MessageFilter = ({ filter, onChange }) => {
  return (
    <Element className="app-MessageFilter-wrapper">
      <Input
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
      messageStore.setMessageFilter(newValue.value || null);
    },
    [messageStore],
  );

  return <MessageFilter filter={messageStore.messageFilter} onChange={onChange} />;
});
