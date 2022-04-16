import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { province_vaccine_manufacturer } from "../Api/province_vaccine_manufacturer";
import {
  ProvinceVaccineManufacturerI,
  ProvinceVaccineManufacturerListI,
} from "../interfaces";

export const getProvinceVaccineManufacturer = createAsyncThunk(
  "/vaccination/provincial-vaccination-by-manufacturer.json",
  province_vaccine_manufacturer
);

const initialState: ProvinceVaccineManufacturerI = {
  list: {},
  status: null,
  data: [],
};

const provinceVaccineManufacturerSlice = createSlice({
  name: "province_vaccine_manufacturer",
  initialState,
  reducers: {
    change_province_manu(state, action) {
      state.data = state.list.data.filter(
        (item: { [key: string]: string | number }) =>
          item.province === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinceVaccineManufacturer.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getProvinceVaccineManufacturer.fulfilled,
      (state, action: PayloadAction<ProvinceVaccineManufacturerListI>) => {
        state.list = action.payload;
        state.status = "success";
        state.data = state.list.data.filter(
          (item: { [key: string]: string | number }) =>
            item.province === "กรุงเทพมหานคร"
        );
      }
    );
    builder.addCase(
      getProvinceVaccineManufacturer.rejected,
      (state, action) => {
        state.status = "failed";
      }
    );
  },
});

export const { change_province_manu } =
  provinceVaccineManufacturerSlice.actions;

export default provinceVaccineManufacturerSlice;
