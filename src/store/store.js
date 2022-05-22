import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./countries-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { countries: countriesSlice.reducer, ui: uiSlice.reducer },
});

export default store;
