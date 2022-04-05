import { configureStore } from "@reduxjs/toolkit";
import allDaySlice from "./alldayCaseSlice";
import allCaseSlice from "./covidAllCaseSlice";

const store = configureStore({
  reducer: { allcase: allCaseSlice.reducer, allday: allDaySlice.reducer },
});

export default store;
