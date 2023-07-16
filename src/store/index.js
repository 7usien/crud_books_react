import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookReducer";
import authReducer from "./authReducer";
const store = configureStore({
 reducer: {
  books: bookReducer,
  auth:authReducer,
 },
});

export default store;
