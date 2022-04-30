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
  data: [],
};

const provinceCaseSlice = createSlice({
  name: "provincecase",
  initialState,
  reducers: {
    change_data(state, action: PayloadAction<string>) {
      const filter_data = state.list.filter(
        (item) => item.name === action.payload
      );
      state.data = filter_data.map((item) => {
        return { province: item.name, case: item.cases };
      });
    },
    change_type(state, action: PayloadAction<string>) {
      const province = state.data[0].province;
      const filter_data = state.list.filter((item) => item.name === province);
      if (action.payload === "new_case") {
        state.data = filter_data.map((item) => {
          return { province: item.name, case: item.cases };
        });
      } else {
        state.data = filter_data.map((item) => {
          return { province: item.name, case: item.deaths };
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinceCase.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(
      getProvinceCase.fulfilled,
      (state, action: PayloadAction<ProvinceCaseListI[]>) => {
        state.list = action.payload;
        state.status = "success";
        const filter_data = state.list.filter(
          (item) => item.name === "กรุงเทพมหานคร"
        );
        state.data = filter_data.map((item) => {
          return { province: item.name, case: item.cases };
        });
      }
    );
    builder.addCase(getProvinceCase.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});
export const { change_data, change_type } = provinceCaseSlice.actions;

export default provinceCaseSlice;
