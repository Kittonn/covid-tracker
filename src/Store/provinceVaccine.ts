import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { province_vaccine } from "../Api/province_vaccine";
import { ProvinceVaccineI, ProvinceVaccineListI } from "../interfaces";

export const getProvinceVaccine = createAsyncThunk(
  "/vaccination/provincial-vaccination.json",
  province_vaccine
);

const initialState: ProvinceVaccineI = {
  list: {},
  status: null,
  data: [],
};

const provinceVaccineSlice = createSlice({
  name: "province_vaccine",
  initialState,
  reducers: {
    change_province(state, action) {
      state.data = state.list.data.filter(
        (item: { [key: string]: number | string }) =>
          item.province === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinceVaccine.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getProvinceVaccine.fulfilled,
      (state, action: PayloadAction<ProvinceVaccineListI>) => {
        state.list = action.payload;
        state.status = "success";
        state.data = state.list.data.filter(
          (item: { [key: string]: number | string }) =>
            item.province === "กรุงเทพมหานคร"
        );
      }
    );
    builder.addCase(getProvinceVaccine.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { change_province } = provinceVaccineSlice.actions;

export default provinceVaccineSlice;
