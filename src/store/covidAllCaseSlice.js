import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/cases/national-timeseries.json";

export const getAllCase = createAsyncThunk("cases/getAllCase", () => {
  return axios.get(url).then((res) => res.data);
});

const allCaseSlice = createSlice({
  name: "allcase",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getAllCase.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllCase.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getAllCase.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const allCaseActions = allCaseSlice.actions;

export default allCaseSlice;
