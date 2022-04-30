import store from "./store";

type rootState = ReturnType<typeof store.getState>;

export const selectTodayCaseAll = (state: rootState) =>
  state.today_case_all.list[0];

export const selectTimelineCase = (state: rootState) =>
  state.timeline_case.data;

export const selectProvinceCase = (state: rootState) =>
  state.province_case.data[0];

export const selectTesting = (state: rootState) => state.testing.list;

export const selectNationalVaccine = (state: rootState) =>
  state.nationalvaccine.list;

export const selectNationalVaccineManufacturer = (state: rootState) =>
  state.national_vaccine_manufacturer.list;

export const selectProvinceVaccine = (state: rootState) =>
  state.province_vaccine.data;

export const selectProvinceVaccineManufacturer = (state: rootState) =>
  state.province_vaccine_manufacturer.data;
