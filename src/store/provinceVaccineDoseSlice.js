import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/vaccination/provincial-vaccination.json";

export const getProvinceVaccineDose = createAsyncThunk(
  "/vaccination/provincial-vaccination.json",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const provinceVaccineDoseSlice = createSlice({
  name: "provincevaccinedose",
  initialState: {
    list: [],
    status: null,
    dataList: {},
  },
  reducers: {
    change_province(state, action) {
      state.dataList = state.list.filter(
        (item) => item.province === action.payload
      )[0];
    },
  },
  extraReducers: {
    [getProvinceVaccineDose.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceVaccineDose.fulfilled]: (state, action) => {
      state.list = action.payload.data;

      const data = state.list.filter(
        (item) => item.province === "กรุงเทพมหานคร"
      );
      state.dataList = data[0];
      state.status = "success";
    },
    [getProvinceVaccineDose.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceVaccineDoseActions = provinceVaccineDoseSlice.actions;

export default provinceVaccineDoseSlice;
