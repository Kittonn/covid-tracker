import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestingI, TestingListI } from "../interfaces";
import { testing } from "../Api/testing";

export const getTesting = createAsyncThunk("/cases/testing-data.json", testing);

const initialState: TestingI = {
  list: [],
  status: null,
};

const testingSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTesting.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getTesting.fulfilled,
      (state, action: PayloadAction<TestingListI[]>) => {
        state.list = action.payload.slice(
          action.payload.length - 14,
          action.payload.length
        );
        state.status = "success";
      }
    );
    builder.addCase(getTesting.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default testingSlice;
