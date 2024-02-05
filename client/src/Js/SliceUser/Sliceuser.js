import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5500/user/signup",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5500/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5500/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(userRegister.pending, (state) => {
      state.status = "pending";
    })
    .addCase(userRegister.fulfilled, (state,action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.newuser;
      localStorage.setItem("token", action.payload?.data?.token);
    })
    .addCase(userRegister.rejected, (state) => {
      state.status = "fail";
    })
    .addCase(userLogin.pending, (state) => {
      state.status = "pending";
    })
    .addCase(userLogin.fulfilled, (state,action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.user;
      localStorage.setItem("token", action.payload?.data?.token);
    })
    .addCase(userLogin.rejected, (state) => {
      state.status = "fail";
    })
    .addCase(userCurrent.pending, (state) => {
      state.status = "pending";
    })
    .addCase(userCurrent.fulfilled, (state,action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.user;
    })
    .addCase(userCurrent.rejected, (state) => {
      state.status = "fail";
    })
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;