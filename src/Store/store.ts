import { configureStore } from "@reduxjs/toolkit";
import timelineCaseSlice from "./timelineCaseSlice";
import todayCaseAllSlice from "./todayCaseAllSlice";

const store = configureStore({
  reducer: {
    today_case_all: todayCaseAllSlice.reducer,
    timeline_case: timelineCaseSlice.reducer,
  },
});

export default store;
