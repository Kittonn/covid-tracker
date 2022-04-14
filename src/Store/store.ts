import { configureStore } from "@reduxjs/toolkit";
import nationalVaccineSlice from "./nationalVaccineSlice";
import provinceCaseSlice from "./provinceCaseSlice";
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
  },
});

export default store;
