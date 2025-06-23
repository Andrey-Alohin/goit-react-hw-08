import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dialog",
  initialState: {
    info: null,
    isOpen: false,
    changeData: null,
  },
  reducers: {
    openDialog: (state, action) => {
      state.info = action.payload;
      state.isOpen = true;
      state.changeData = {
        name: action.payload.name,
        number: action.payload.number,
      };
    },
    closeDialog: (state) => {
      state.info = null;
      state.isOpen = false;
      state.changeData = null;
    },
    setChangeData: (state, action) => {
      state.changeData = { ...state.changeData, ...action.payload };
    },
  },
});

export const { openDialog, closeDialog, setChangeData } = slice.actions;

export default slice.reducer;
