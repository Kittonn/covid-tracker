import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/wiki/porames/the-researcher-covid-data/cases/testing-data.json";

export const getTest = createAsyncThunk("/cases/getTest", async () => {
  return axios.get(url).then((res) => res.data);
});

const atkTestSlice = createSlice({
  name: "atktest",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getTest.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTest.fulfilled]: (state, action) => {
      state.list = action.payload.slice(
        action.payload.length - 14,
        action.payload.length
      );
      state.status = "success";
    },
    [getTest.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const getTestActions = atkTestSlice.actions;

export default atkTestSlice;
