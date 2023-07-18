import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logInsert } from "./reportReducer";

//async insert action
export const insertBook = createAsyncThunk(
 "books/insertbook",
 async (bookItem, thunkAPI) => {
  const { rejectWithValue, getState, dispatch } = thunkAPI;
  try {
   // bookItem.name = thunkAPI.getState().auth.name;
   const res = await axios.post("http://localhost:3000/books", {
    ...bookItem,
    name: getState().auth.name,
   });
   dispatch(logInsert({name:"insert", status:"success"}))
   return res.data;
  } catch (err) {
   dispatch(logInsert({name:"insert", status:"failed"}))
   rejectWithValue(err.message);
  }
 }
);

export const deleteBook = createAsyncThunk(
 "books/deletebook",
 async (item, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;
  try {
   const res = await axios.delete(`http://localhost:3000/books/${item.id}`);
   dispatch(logInsert({name:"delete", status:`delete ${item}`}))
   return item;
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
   state.books.push(action.payload);
  },
  [insertBook.rejected]: (state, action) => {
   state.error = action.payload;
   state.loading = false;
  },

  [deleteBook.pending]: (state, action) => {
   state.loading = true;
   state.error = null;
  },
  [deleteBook.fulfilled]: (state, action) => {
   state.loading = false;

   state.books = state.books.filter((book) => book.id !== action.payload.id);
  },
  [deleteBook.rejected]: (state, action) => {
   state.loading = true;
   state.error = action.payload; 
  },
 },
});

export default bookReducer.reducer;
