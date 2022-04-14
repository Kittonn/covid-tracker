import store from "./store";

type rootState = ReturnType<typeof store.getState>;

export const selectTodayCaseAll = (state: rootState) =>
  state.today_case_all.list[0];

export const selectTimelineCase = (state: rootState) =>
  state.timeline_case.data;
