import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/national-vaccination-timeseries.json";

export const getDayVaccine = createAsyncThunk(
  "/vaccination/national-vaccination-timeseries.json",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const dayVaccineSlice = createSlice({
  name: "dayvaccine",
  initialState: {
    list: [],
    status: null,
    listData: [],
    update_date: "",
    listObj: {
      date: "",
      daily_vaccinations: 0,
      data_anomaly: null,
      first_dose: 0,
      second_dose: 0,
      third_dose: 0,
      total_doses: 0,
    },
    minusData: [0, 0, 0, 0],
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
      state.listData = state.list.slice(
        state.list.length - 2,
        state.list.length
      );
      state.listObj = state.listData[1];
      state.update_date = state.listData[1].date;
      const one = state.listData[0];
      const two = state.listData[1];
      state.minusData = [
        two.first_dose - one.first_dose,
        two.second_dose - one.second_dose,
        two.third_dose - one.third_dose,
        two.total_doses - one.total_doses,
      ];
      state.status = "success";
    },
    [getDayVaccine.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const dayVaccineActions = dayVaccineSlice.actions;

export default dayVaccineSlice;
