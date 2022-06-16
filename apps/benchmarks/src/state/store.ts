import { configureStore } from '@reduxjs/toolkit';
import navPaneReducer from './navPane/navPaneSlice';

export default configureStore({
  reducer: {
    navPane: navPaneReducer,
  },
});
