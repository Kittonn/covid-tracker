import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all";

export const getAllCase = createAsyncThunk(
  "/Cases/today-cases-all",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const allCaseSlice = createSlice({
  name: "allcase",
  initialState: {
    list: [],
    status: null,
    dataObj: {
      total_recovered: 0,
      new_recovered: 0,
      total_death: 0,
      new_death: 0,
      total_case: 0,
      new_case: 0,
      update_date: "",
    },
  },
  extraReducers: {
    [getAllCase.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllCase.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      state.dataObj = state.list[0];
    },
    [getAllCase.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const allCaseActions = allCaseSlice.actions;

export default allCaseSlice;
