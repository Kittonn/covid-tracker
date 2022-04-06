import { configureStore } from "@reduxjs/toolkit";
import allDaySlice from "./alldayCaseSlice";
import atkTestSlice from "./atkTestSlice";
import allCaseSlice from "./covidAllCaseSlice";
import provinceCaseSlice from "./provinceCaseSlice";
import provinceVaccineSlice from "./provinceVaccineSlice";

const store = configureStore({
  reducer: {
    allcase: allCaseSlice.reducer,
    allday: allDaySlice.reducer,
    atktest: atkTestSlice.reducer,
    provincecase: provinceCaseSlice.reducer,
    provincevaccine: provinceVaccineSlice.reducer,
  },
});

export default store;
