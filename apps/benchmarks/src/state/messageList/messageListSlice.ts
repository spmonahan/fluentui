import { createSlice } from '@reduxjs/toolkit';
import { state } from '../data/inlook/index';

export const messageListSlice = createSlice({
  name: 'messageList',
  initialState: {
    messages: state.messages,
    selectedMessage: null,
  },

  reducers: {
    selectMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
  },
});

export const { selectMessage } = messageListSlice.actions;
export default messageListSlice.reducer;
