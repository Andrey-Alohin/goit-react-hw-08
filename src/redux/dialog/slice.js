import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dialog",
  initialState: {
    info: null,
    isOpen: false,
  },
  reducers: {
    openDialog: (state, action) => {
      state.info = action.payload;
      state.isOpen = true;
    },
    closeDialog: (state) => {
      state.info = null;
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = slice.actions;

export default slice.reducer;
