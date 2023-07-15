import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const insertBook = createAsyncThunk(
 "books/insertbook",
 async (bookItem, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
   const res = await axios.post("http://localhost:3000/books", bookItem);
   console.log('res', res);

   return res.data
  } catch (err) {
   rejectWithValue(err.message);
  }
 }
);

// async action to get books
export const getBooks = createAsyncThunk(
 "books/getbooks",
 async (_, thunAPI) => {
  const { rejectWithValue } = thunAPI;

  try {
   console.log(thunAPI);
   const res = await axios.get("http://localhost:3000/books");
   return res.data;
  } catch (err) {
   return rejectWithValue(err.message);
  }
 }
);

const bookReducer = createSlice({
 name: "books",
 initialState: { books: [], loading: false, error: null },
 extraReducers: {
  [getBooks.pending]: (state, action) => {
   state.loading = true;
   state.error = null; // state.loading = true;
  },
  [getBooks.fulfilled]: (state, action) => {
   state.loading = false;
   state.books = action.payload;
   // state.books = action.payload;
  },
  [getBooks.rejected]: (state, action) => {
   state.error = action.payload;
   state.loading = false; // state.loading = false;
   // state.rejected = state.error = action.payload;
  },

  // insert book actions

  [insertBook.pending]: (state, action) => {
   state.loading = true;
   state.error = null;
  },
  [insertBook.fulfilled]: (state, action) => {
   state.loading = false;
   console.log(action.payload)
   state.books.push(action.payload);
  },
  [insertBook.rejected]: (state, action) => {
   state.error = action.payload;
   state.loading = false;
  },
 },
});

export default bookReducer.reducer;
