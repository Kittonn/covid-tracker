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

const padTo2Digit = (num) => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return [
    padTo2Digit(date.getDate()),
    padTo2Digit(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");
};

const provinceCaseSlice = createSlice({
  name: "provincecase",
  initialState: {
    list: [],
    status: null,
    date: [],
    new_case: [],
  },
  reducers: {
    change_province(state, action) {
      const dataObj = state.list.filter(
        (item) => item.id === Number(action.payload)
      );
      state.date = Object.keys(dataObj[0].cases).map((item) =>
        formatDate(new Date(item))
      );
      state.new_case = Object.values(dataObj[0].cases);
    },
  },
  extraReducers: {
    [getProvinceCase.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProvinceCase.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
      const dataObj = state.list.filter((item) => item.id === 10);
      state.date = Object.keys(dataObj[0].cases).map((item) =>
        formatDate(new Date(item))
      );
      state.new_case = Object.values(dataObj[0].cases);
    },
    [getProvinceCase.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const provinceCaseActions = provinceCaseSlice.actions;

export default provinceCaseSlice;
