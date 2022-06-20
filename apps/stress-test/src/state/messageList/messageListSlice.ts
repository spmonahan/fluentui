import { createSlice } from '@reduxjs/toolkit';
import { state as defaultState } from '../data/inlook/index';
import { InlookMessage } from '../data/inlook/types';

export type MessageListSliceState = {
  messages: Record<string, InlookMessage[]>;
  selectedMessage: string | null;
  messageFilter: string | null;
};

export type MessageListSliceCaseReducers = {
  selectMessage: (state: MessageListSliceState, action: { payload: string | null }) => void;
  setMessageFilter: (state: MessageListSliceState, action: { payload: string | null }) => void;
};

export const messageListSlice = createSlice<MessageListSliceState, MessageListSliceCaseReducers>({
  name: 'messageList',
  initialState: {
    messages: defaultState.messages,
    selectedMessage: null,
    messageFilter: null,
  },

  reducers: {
    selectMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },

    setMessageFilter: (state, action) => {
      state.messageFilter = action.payload;
    },
  },
});

export const { selectMessage, setMessageFilter } = messageListSlice.actions;
export default messageListSlice.reducer;
