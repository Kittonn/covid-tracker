import { configureStore } from "@reduxjs/toolkit";
import allDaySlice from "./alldayCaseSlice";
import atkTestSlice from "./atkTestSlice";
import allCaseSlice from "./covidAllCaseSlice";

const store = configureStore({
  reducer: {
    allcase: allCaseSlice.reducer,
    allday: allDaySlice.reducer,
    atktest: atkTestSlice.reducer,
  },
});

export default store;
