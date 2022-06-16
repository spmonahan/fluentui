import { createSlice } from '@reduxjs/toolkit';
import { state } from '../data/inlook/index';

export const navPaneSlice = createSlice({
  name: 'navPane',
  initialState: {
    folders: state.folders,
  },

  addFolders: (state, action) => {
    state.folders = [...state.folders, ...action.payload];
  },
});

export const { addFolders } = navPaneSlice.actions;
export default navPaneSlice.reducer;
