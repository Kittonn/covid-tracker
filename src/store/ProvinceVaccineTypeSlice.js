import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/provincial-vaccination-by-manufacturer.json";

export const getProvinceVaccineType = createAsyncThunk(
  "/vaccination/provincial-vaccination-by-manufacturer.json",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const provinceVaccineTypeSlice = createSlice({
  name: "provincevaccinetype",
  initialState: {
    list: [],
    status: null,
    listData: {},
  },
  reducers: {
    change_province(state, action) {
      state.listData = state.list.filter(
        (item) => item.province === action.payload
      )[0];
    },
  },
  extraReducers: {
    [getProvinceVaccineType.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceVaccineType.fulfilled]: (state, action) => {
      state.list = action.payload.data;
      state.listData = state.list.filter(
        (item) => item.province === "กรุงเทพมหานคร"
      )[0];
      state.status = "success";
    },
    [getProvinceVaccineType.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceVaccineTypeActions = provinceVaccineTypeSlice.actions;

export default provinceVaccineTypeSlice;
