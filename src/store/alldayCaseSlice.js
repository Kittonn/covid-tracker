import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/cases/national-timeseries.json";

export const getAllDay = createAsyncThunk("/Cases/getAllDay", async () => {
  return axios.get(url).then((res) => res.data);
});

const allDaySlice = createSlice({
  name: "allday",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getAllDay.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllDay.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getAllDay.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const alldayActions = allDaySlice.actions;

export default allDaySlice;
