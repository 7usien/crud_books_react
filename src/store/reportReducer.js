import { createSlice } from "@reduxjs/toolkit";

const reportReducer = createSlice({
 name: "report",
 initialState: { logs: [] },
 reducers: {
  logInsert: (state, action) => {
   state.logs.push(action.payload);
  },
 },
});

export const { logInsert } = reportReducer.actions;
export default reportReducer.reducer;
