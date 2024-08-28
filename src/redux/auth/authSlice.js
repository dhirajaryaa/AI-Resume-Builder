import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../firebase/firebase.js";

const initialState = [
  {
    user: null,
    isError: null,
  },
];

export const signInGoogle = createAsyncThunk(
  "auth/singIn",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      
      
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{}
});

// export {} from AuthSlice.actions
export const AuthReducers = AuthSlice.reducer;
