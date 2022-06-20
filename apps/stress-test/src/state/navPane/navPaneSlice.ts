import { createSlice } from '@reduxjs/toolkit';
import { state } from '../data/inlook/index';

export const navPaneSlice = createSlice({
  name: 'navPane',
  initialState: {
    folders: state.folders,
    selectedFolder: state.folders[0].id,
  },

  reducers: {
    addFolders: (state, action) => {
      state.folders = [...state.folders, ...action.payload];
    },
    selectFolder: (state, action) => {
      state.selectedFolder = action.payload.id;
    },
  },
});

export const { selectFolder } = navPaneSlice.actions;
export default navPaneSlice.reducer;
