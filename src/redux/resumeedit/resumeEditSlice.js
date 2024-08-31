import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  resumeData: {},
};

const ResumeEditSlice = createSlice({
  name: "resumeEdit",
  initialState,
  reducers: {},
});

export const {} = ResumeEditSlice.actions;
export const ResumeEditReducer = ResumeEditReducer.reducers;
