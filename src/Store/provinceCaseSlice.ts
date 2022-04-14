import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProvinceCaseI, ProvinceCaseListI } from "../interfaces";
import { province_case } from "../Api/province_case";

export const getProvinceCase = createAsyncThunk(
  "/cases/province-cases-data-14days.json",
  province_case
);

const initialState: ProvinceCaseI = {
  list: [],
  status: null,
};

const provinceCaseSlice = createSlice({
  name: "provincecase",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProvinceCase.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getProvinceCase.fulfilled,
      (state, action: PayloadAction<ProvinceCaseListI[]>) => {
        state.list = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(getProvinceCase.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default provinceCaseSlice;
