import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase.js";

const initialState = {
  user: null,
  isError: null,
  isLoading: false,
};

const transformUser = (user) => {
  if (!user) return null;
  const { uid, email, displayName, photoURL } = user;
  return { uid, email, displayName, photoURL };
};

export const signInGoogle = createAsyncThunk(
  "auth/singIn",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, provider);
      return transformUser(result.user);
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      if (auth.currentUser) {
        return transformUser(auth.currentUser);
      } else {
        throw new Error("No user is currently logged in");
      }
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInGoogle.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signInGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signInGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

// export {} from AuthSlice.actions
export const AuthReducers = AuthSlice.reducer;
