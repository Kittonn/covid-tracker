import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/vaccine-manufacturer-timeseries.json";

export const getDayVaccineType = createAsyncThunk(
  "/vaccination/vaccine-manufacturer-timeseries.json",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const dayVaccineTypeSlice = createSlice({
  name: "dayvaccinetype",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getDayVaccineType.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDayVaccineType.fulfilled]: (state, action) => {
      state.list = action.payload.slice(
        action.payload.length - 14,
        action.payload.length
      );
      state.status = "success";
    },
    [getDayVaccineType.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const dayVaccineTypeActions = dayVaccineTypeSlice.actions;

export default dayVaccineTypeSlice;
