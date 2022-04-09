import { configureStore } from "@reduxjs/toolkit";
import allDaySlice from "./alldayCaseSlice";
import atkTestSlice from "./atkTestSlice";
import allCaseSlice from "./covidAllCaseSlice";
import dayVaccineSlice from "./dayVaccine";
import provinceCaseSlice from "./provinceCaseSlice";
import provinceVaccineSlice from "./provinceVaccineSlice";

const store = configureStore({
  reducer: {
    allcase: allCaseSlice.reducer,
    allday: allDaySlice.reducer,
    atktest: atkTestSlice.reducer,
    provincecase: provinceCaseSlice.reducer,
    provincevaccine: provinceVaccineSlice.reducer,
    dayvaccine: dayVaccineSlice.reducer,
  },
});

export default store;
