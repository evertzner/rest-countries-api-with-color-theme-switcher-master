import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    //notification: null,
  },
  reducers: {
    load(state) {
      state.loading = !state.loading;
    },
    // showNotification(state, action) {
    //   const { status, title, message } = action.payload;
    //   state.notification = {
    //     status,
    //     title,
    //     message,
    //   };
    // },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
