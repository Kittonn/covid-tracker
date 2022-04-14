import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NationalVaccineI, NationalVaccineListI } from "../interfaces";
import { national_vaccine } from "../Api/national_vaccine";

export const getNationalVaccine = createAsyncThunk(
  "/vaccination/national-vaccination-timeseries.json",
  national_vaccine
);

const initialState: NationalVaccineI = {
  list: [],
  status: null,
};

const nationalVaccineSlice = createSlice({
  name: "nationalvaccine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNationalVaccine.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getNationalVaccine.fulfilled,
      (state, action: PayloadAction<NationalVaccineListI[]>) => {
        state.list = action.payload.slice(
          action.payload.length - 14,
          action.payload.length
        );
        state.status = "success";
      }
    );
    builder.addCase(getNationalVaccine.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default nationalVaccineSlice;
