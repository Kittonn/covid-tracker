import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { national_vaccine_manufacturer } from "../Api/national_vaccine_manufacturer";
import {
  NationalVaccineManufacturerI,
  NationalVaccineManufacturerListI,
} from "../interfaces";

export const getNationalVaccineManufacturer = createAsyncThunk(
  "/vaccination/vaccine-manufacturer-timeseries.json",
  national_vaccine_manufacturer
);

const initialState: NationalVaccineManufacturerI = {
  list: [],
  status: null,
};

const nationalVaccineManufacturerSlice = createSlice({
  name: "national_vaccine_manufacturer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNationalVaccineManufacturer.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getNationalVaccineManufacturer.fulfilled,
      (state, action: PayloadAction<NationalVaccineManufacturerListI[]>) => {
        state.list = action.payload.slice(
          action.payload.length - 14,
          action.payload.length
        );
        state.status = "success";
      }
    );
    builder.addCase(
      getNationalVaccineManufacturer.rejected,
      (state, action) => {
        state.status = "failed";
      }
    );
  },
});

export default nationalVaccineManufacturerSlice;
