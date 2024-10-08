import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./auth/authSlice";
import { DbReducer } from "./database/dbSlice";
import {AiReducer} from "./ai/aiSlice";

export const Store = configureStore({
  reducer: {
    auth: AuthReducers,
    db: DbReducer,
    ai: AiReducer
  },
});
