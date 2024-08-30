import { db } from "@/firebase/firebase";
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: false,
  dbError: null,
  resumes: [],
};

export const createResume = createAsyncThunk(
  "db/createResume",
  async ({ title, uid }, { rejectWithValue }) => {
    try {
      const data = {
        resumeId: nanoid(),
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
      return rejectWithValue(error.massage);
    }
  }
);

export const getResumes = createAsyncThunk(
  "db/getResumes",
  async ({ uid }, { rejectWithValue }) => {
    try {
      const userRef = doc(db, "users", uid);

      // Reference to the 'resumes' subcollection under the user document
      const resumesCollectionRef = collection(userRef, "resumes");

      // Get all documents in the 'resumes' subcollection
      const querySnapshot = await getDocs(resumesCollectionRef);

      // Array to hold resume data
      const resumes = [];

      // Loop through each document and extract data
      querySnapshot.forEach((doc) => {
        resumes.push({ id: doc.id, ...doc.data() });
      });

      console.log("Resumes: ", resumes);

      // Return the resumes array
      return resumes;
    } catch (error) {
      return rejectWithValue(error.massage);
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
        console.log(action.payload);
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
        console.log(action.payload);
      })
      .addCase(getResumes.rejected, (state, action) => {
        state.isLoading = false;
        state.dbError = action.payload;
      });
  },
});

export const DbReducer = DbSlice.reducer;
