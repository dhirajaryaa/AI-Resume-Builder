import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
user:null,
isError:null,
isLoading:false,
},]

export const AuthSlice = createSlice({
name:"auth",
initialState,
reducers:{

}
});


// export {} from AuthSlice.actions
export const  AuthReducers = AuthSlice.reducer
