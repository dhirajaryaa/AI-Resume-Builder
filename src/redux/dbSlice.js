import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  isLoading: false,
  dbError: null,
};

export const add = createAsyncThunk("db/createResume", ({title},{rejectWithValue}) => {
  const data = {
    
  }
});
export const createNewResume = createAsyncThunk("db/createResume", ({title},{rejectWithValue}) => {
  const data = {

  }
});
// export const createNewResume = createAsyncThunk("db/createResume", ({title},{rejectWithValue}) => {
//   const data = {

//   }
// });

const DbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const DbReducer = DbSlice.reducer;
