import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { setMessageFilter } from '../state/messageList/messageListSlice';

export const MessageFilter = () => {
  const selectedFolderId = useSelector((state: RootState) => state.navPane.selectedFolder);
  const messageFilter = useSelector((state: RootState) => state.messageList.messageFilter);

  const dispatch: AppDispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMessageFilter(null));
  }, [selectedFolderId]);

  const onFilterChange = React.useCallback(
    (e, newValue) => {
      dispatch(setMessageFilter(newValue || null));
    },
    [dispatch, setMessageFilter],
  );

  return (
    <TextField
      className="app-MessageFilter"
      id="filterField"
      placeholder="Filter Messages"
      value={messageFilter ?? ''}
      onChange={onFilterChange}
    />
  );
};
