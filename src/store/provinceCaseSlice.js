import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/cases/province-cases-data-14days.json";

export const getProvinceCase = createAsyncThunk(
  "/Cases/getProvinceCase",
  async () => {
    return axios.get(url).then((res) => res.data);
  }
);

const provinceCaseSlice = createSlice({
  name: "provincecase",
  initialState: {
    list: [],
    status: null,
    dataObj: {},
  },
  reducers: {
    change_province(state, action) {
      const dataList = state.list.filter(
        (item) => item.id === Number(action.payload)
      );
      state.dataObj = dataList[0];
    },
  },
  extraReducers: {
    [getProvinceCase.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceCase.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      state.dataObj = state.list[1];
    },
    [getProvinceCase.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceCaseActions = provinceCaseSlice.actions;

export default provinceCaseSlice;
