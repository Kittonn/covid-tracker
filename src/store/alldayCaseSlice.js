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
    data: [],
  },
  reducers: {
    change(state, action) {
      if (action.payload === "new_case") {
        state.data = state.list.map((item) => {
          return {
            txn_date: item.txn_date,
            case: item.new_case,
          };
        });
      } else if (action.payload === "new_death") {
        state.data = state.list.map((item) => {
          return {
            txn_date: item.txn_date,
            case: item.new_death,
          };
        });
      } else {
        state.data = state.list.map((item) => {
          return {
            txn_date: item.txn_date,
            case: item.new_recovered,
          };
        });
      }
    },
  },
  extraReducers: {
    [getAllDay.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllDay.fulfilled]: (state, action) => {
      state.list = action.payload.slice(
        action.payload.length - 14,
        action.payload.length
      );
      state.status = "success";
      state.data = state.list.map((item) => {
        return {
          txn_date: item.txn_date,
          case: item.new_case,
        };
      });
    },
    [getAllDay.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const alldayActions = allDaySlice.actions;

export default allDaySlice;
