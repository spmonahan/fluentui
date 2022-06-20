import { configureStore } from '@reduxjs/toolkit';
import navPaneReducer from './navPane/navPaneSlice';
import messageListReducer from './messageList/messageListSlice';

const store = configureStore({
  reducer: {
    navPane: navPaneReducer,
    messageList: messageListReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
