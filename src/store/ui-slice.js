import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    theme: ''
    //notification: null,
  },
  reducers: {
    load(state, action) {
      state.loading = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setInitialTheme(state) {
      state.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.body.setAttribute('data-theme', state.theme);
    }
    // showNotification(state, action) {
    //   const { status, title, message } = action.payload;
    //   state.notification = {
    //     status,
    //     title,
    //     message,
    //   };
    // },
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
