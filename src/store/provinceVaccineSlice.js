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
    dataProvince: {},
    update_date: "",
  },
  reducers: {
    change_province(state, action) {
      const dataObj = state.list.data.filter(
        (item) => item.province === action.payload
      );
      state.dataProvince = dataObj[0];
    },
  },
  extraReducers: {
    [getProvinceVaccine.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceVaccine.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      state.update_date = state.list.update_date;
      state.dataProvince = state.list.data[state.list.data.length - 1];
    },
    [getProvinceVaccine.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceVaccineActions = provinceVaccineSlice.actions;

export default provinceVaccineSlice;
