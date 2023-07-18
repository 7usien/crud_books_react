import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookReducer";
import authReducer from "./authReducer";
import reportReducer from "./reportReducer";
const store = configureStore({
 reducer: {
  books: bookReducer,
  auth: authReducer,
  report:reportReducer
 },
});

export default store;
