import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/national-vaccination-timeseries.json";

export const getDayVaccine = createAsyncThunk(
  "/vaccination/getDayVaccine",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const dayVaccineSlice = createSlice({
  name: "dayvaccine",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getDayVaccine.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDayVaccine.fulfilled]: (state, action) => {
      state.list = action.payload.slice(
        action.payload.length - 14,
        action.payload.length
      );
      state.status = "success";
    },
    [getDayVaccine.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const dayVaccineActions = dayVaccineSlice.actions;

export default dayVaccineSlice;
