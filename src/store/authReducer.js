import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
 name: "auth",
 initialState: { isLoggedIn: false, name: "husien adel" },
 reducers: {
  isLogInOut: (state) => {
   state.isLoggedIn = !state.isLoggedIn;
  },
 },
});

export default authReducer.reducer;
export const { isLogInOut } = authReducer.actions;
