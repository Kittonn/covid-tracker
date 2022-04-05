import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all";

export const getAllDay = createAsyncThunk("/Cases/getAllDay", async () => {
  return axios.get(url).then((res) => res.data);
});

const allDaySlice = createSlice({
  name: "allday",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getAllDay.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllDay.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [getAllDay.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const alldayActions = allDaySlice.actions;

export default allDaySlice;
