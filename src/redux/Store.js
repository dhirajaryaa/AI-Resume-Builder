import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./auth/authSlice";
import { DbReducer } from "./database/dbSlice";
import { ResumeEditReducer } from "./resumeedit/resumeEditSlice";

export const Store = configureStore({
  reducer: {
    auth: AuthReducers,
    db: DbReducer,
    resumeEdit:ResumeEditReducer,
  },
});
