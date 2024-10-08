import { db } from "@/firebase/firebase";
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  dbError: null,
  resumes: [],
  recentDocId: null,
  resume: {},
};

export const createResume = createAsyncThunk(
  "db/createResume",
  async ({ title, uid }, { rejectWithValue }) => {
    try {
      const data = {
        title: title,
      };
      // get users ref
      const userRef = doc(db, "users", uid);
      // get resume ref
      const resumesCollectionRef = collection(userRef, "resumes");
      // add data in subcollecion
      const docRef = await addDoc(resumesCollectionRef, data);
      return docRef.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateResume = createAsyncThunk(
  "db/updateResume",
  async ({ resumeData, docId, uid }, { rejectWithValue }) => {
    try {
      const resumeRef = doc(db, "users", uid, "resumes", docId);

      await updateDoc(resumeRef, resumeData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getResumes = createAsyncThunk(
  "db/getResumes",
  async ({ uid }, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", uid);

      // Reference to the 'resumes' subcollecion under the user document
      const resumesCollectionRef = collection(userRef, "resumes");

      // Get all documents in the 'resumes' subcollecion
      const querySnapshot = await getDocs(resumesCollectionRef);

      // Loop through each document and extract data
      let resumes = [];

      querySnapshot.forEach((doc) => {
        resumes.push({ docId: doc.id, ...doc.data() });
      });

      return resumes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const DbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createResume.pending, (state) => {
        state.isLoading = true;
        state.dbError = null;
      })
      .addCase(createResume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recentDocId = action.payload;
      })
      .addCase(createResume.rejected, (state, action) => {
        state.isLoading = false;
        state.dbError = action.payload;
      })
      .addCase(getResumes.pending, (state) => {
        state.isLoading = true;
        state.dbError = null;
      })
      .addCase(getResumes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resumes = [...action.payload];
      })
      .addCase(getResumes.rejected, (state, action) => {
        state.isLoading = false;
        state.dbError = action.payload;
      })

      .addCase(updateResume.pending, (state) => {
        state.isLoading = true;
        state.dbError = null;
      })
      .addCase(updateResume.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Data updated successfully!", {
          duration: 3000, // Optional duration for the toast
          style: {
            backgroundColor: "#4CAF50", // Customize success background color
            color: "#fff", // Customize text color
          },
          action: {
            label: "undo",
          },
        });
      })
      .addCase(updateResume.rejected, (state, action) => {
        state.isLoading = false;
        state.dbError = action.payload;
      });
  },
});

export const DbReducer = DbSlice.reducer;
