import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./auth/authSlice";

export const Store = configureStore({
  reducer: {
    auth: AuthReducers,
  },
});
