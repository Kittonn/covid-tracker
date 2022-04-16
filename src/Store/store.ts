import { configureStore } from "@reduxjs/toolkit";
import nationalVaccineManufacturerSlice from "./nationalVaccineManufacturer";
import nationalVaccineSlice from "./nationalVaccineSlice";
import provinceCaseSlice from "./provinceCaseSlice";
import provinceVaccineSlice from "./provinceVaccine";
import provinceVaccineManufacturerSlice from "./provinceVaccineManufacturer";
import testingSlice from "./testingSlice";
import timelineCaseSlice from "./timelineCaseSlice";
import todayCaseAllSlice from "./todayCaseAllSlice";

const store = configureStore({
  reducer: {
    today_case_all: todayCaseAllSlice.reducer,
    timeline_case: timelineCaseSlice.reducer,
    province_case: provinceCaseSlice.reducer,
    testing: testingSlice.reducer,
    nationalvaccine: nationalVaccineSlice.reducer,
    national_vaccine_manufacturer: nationalVaccineManufacturerSlice.reducer,
    province_vaccine: provinceVaccineSlice.reducer,
    province_vaccine_manufacturer: provinceVaccineManufacturerSlice.reducer,
  },
});

export default store;
