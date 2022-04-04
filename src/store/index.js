import { configureStore } from "@reduxjs/toolkit";
import allCaseSlice from "./covidAllCaseSlice";

const store = configureStore({
  reducer: { allcase: allCaseSlice.reducer },
});

export default store;
