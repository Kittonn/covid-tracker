import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CaseAllListI, timelineCaseI } from "../interfaces";
import { timeline_case } from "../Api/timeline_case";

export const getTimelineCase = createAsyncThunk(
  "/Cases/timeline-cases-all",
  timeline_case
);

const initialState: timelineCaseI = {
  list: [],
  status: null,
  data: [],
};

const timelineCaseSlice = createSlice({
  name: "timelinecase",
  initialState,
  reducers: {
    change_data(state, action: PayloadAction<string>) {
      if (action.payload === "new_case") {
        state.data = state.list.map((item) => {
          return { date: item.txn_date, cases: item.new_case };
        });
      } else if (action.payload === "new_death") {
        state.data = state.list.map((item) => {
          return { date: item.txn_date, cases: item.new_death };
        });
      } else {
        state.data = state.list.map((item) => {
          return { date: item.txn_date, cases: item.new_recovered };
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTimelineCase.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getTimelineCase.fulfilled,
      (state, action: PayloadAction<CaseAllListI[]>) => {
        state.list = action.payload.slice(
          action.payload.length - 14,
          action.payload.length
        );
        state.status = "success";
        state.data = state.list.map((item) => {
          return { date: item.txn_date, cases: item.new_case };
        });
      }
    );
    builder.addCase(getTimelineCase.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { change_data } = timelineCaseSlice.actions;

export default timelineCaseSlice;
