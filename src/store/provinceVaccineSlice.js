import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/vaccine-delivery.json";

export const getProvinceVaccine = createAsyncThunk("/vaccination", async () => {
  return axios.get(url).then((res) => res.data);
});

const provinceVaccineSlice = createSlice({
  name: "provincevaccine",
  initialState: {
    list: [],
    status: null,
    dataObj: {},
  },
  extraReducers: {
    [getProvinceVaccine.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceVaccine.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getProvinceVaccine.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceVaccineActions = provinceVaccineSlice.actions;

export default provinceVaccineSlice;
