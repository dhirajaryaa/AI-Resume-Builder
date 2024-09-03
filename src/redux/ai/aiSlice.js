import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
} from "@google/generative-ai";

const initialState = {
  isLoading: false,
  isError: null,
  result: [
    
  ],
};

export const generateWithAi = createAsyncThunk(
  "ai/generate",
  async ({ prompt }, { rejectWithValue }) => {
    const API_Key = import.meta.env.VITE_GEMINI_API_KEY;
    try {
      const genAI = new GoogleGenerativeAI(API_Key);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      };

      const AIChatSession = model.startChat({
        generationConfig,
        history: [],
        // history: [{ role: 'user', content: prompt }],
      });

      const response = await AIChatSession.sendMessage(prompt);

      return response.response.text();
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const AiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateWithAi.pending, (state) => {
        state.isLoading = true;
        state.dbError = null;
      })
      .addCase(generateWithAi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = JSON.parse(action.payload);
        console.log(JSON.parse(action.payload));
      })
      .addCase(generateWithAi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const AiReducer = AiSlice.reducer;
