import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: null,
    isRefreshing: null,
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default slice.reducer;
