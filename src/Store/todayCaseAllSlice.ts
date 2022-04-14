import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CaseAllListI, todayCaseAllI } from "../interfaces";
import { todayCaseAllApi } from "../Api/today_case_all";

export const getTodayCaseAll = createAsyncThunk(
  "/Cases/today-cases-all",
  todayCaseAllApi
);

const initialState: todayCaseAllI = {
  list: [],
  status: null,
};

const todayCaseAllSlice = createSlice({
  name: "todaycaseall",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodayCaseAll.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getTodayCaseAll.fulfilled,
      (state, action: PayloadAction<CaseAllListI[]>) => {
        state.list = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(getTodayCaseAll.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default todayCaseAllSlice;
