import { configureStore } from "@reduxjs/toolkit";
import allDaySlice from "./alldayCaseSlice";
import atkTestSlice from "./atkTestSlice";
import allCaseSlice from "./covidAllCaseSlice";
import dayVaccineSlice from "./dayVaccine";
import dayVaccineTypeSlice from "./dayVaccineType";
import provinceCaseSlice from "./provinceCaseSlice";
import provinceVaccineSlice from "./provinceVaccineSlice";
import provinceVaccineDoseSlice from "./provinceVaccineDoseSlice";
import provinceVaccineTypeSlice from "./ProvinceVaccineTypeSlice";

const store = configureStore({
  reducer: {
    allcase: allCaseSlice.reducer,
    allday: allDaySlice.reducer,
    atktest: atkTestSlice.reducer,
    provincecase: provinceCaseSlice.reducer,
    provincevaccine: provinceVaccineSlice.reducer,
    dayvaccine: dayVaccineSlice.reducer,
    dayvaccinetype: dayVaccineTypeSlice.reducer,
    provincevaccinedose: provinceVaccineDoseSlice.reducer,
    provincevaccinetype: provinceVaccineTypeSlice.reducer,
  },
});

export default store;
