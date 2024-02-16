import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//update user
export const updateuser = createAsyncThunk("updateuser", async ({id,infouser}) => {
    try {
      let response = await axios.put(
        `http://localhost:5500/user/${id}`,infouser);
        
      return await response;
    } catch (error) {
      console.log(error);
    }
  });
  //all users
  export const getuser = createAsyncThunk("/getuser", async () => {
    try {
      let resultat = await axios.get("http://localhost:5500/user/allusers");
      return resultat;
    } catch (error) {
      console.log(error);
    }
  });
  
  
  
  const initialState = {
    listuser: null,
    status: null,
  };
  
  export const listuserSlice = createSlice({
    name: "listuser",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
         //update user
     .addCase(updateuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateuser.fulfilled, (state) => {
        state.status = "success";
        
      })
      .addCase(updateuser.rejected, (state) => {
        state.status = "fail";
      })
      // get all users
      .addCase(getuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getuser.fulfilled, (state, action) => {
        state.status = "success";
        state.listuser = action.payload?.data?.voicilist;
      })
      .addCase(getuser.rejected, (state) => {
        state.status = "fail";
      })
    }})
    export default listuserSlice.reducer;