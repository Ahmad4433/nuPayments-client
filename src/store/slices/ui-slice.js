import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    errorMsg: null,
  },
  reducers: {
    startLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.errorMsg = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
