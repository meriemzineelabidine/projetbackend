import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
//Api get all product
export const getproduct = createAsyncThunk("/getproduct", async () => {
  try {
    let resultat = await axios.get("http://localhost:5500/produit/allproduct");
    return resultat;
  } catch (error) {
    console.log(error);
  }
});
export const getbyidproduct = createAsyncThunk("/getbyidproduct", async (id) => {
  try {
    let resultat = await axios.get(`http://localhost:5500/produit/${id}`);
    return resultat;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  produit: null,
  status: null,
};

export const ProduitSlice = createSlice({
  name: "produit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproduct.fulfilled, (state, action) => {
        state.status = "success";
        state.produit = action.payload?.data?.voicilist;
      })
      .addCase(getproduct.rejected, (state) => {
        state.status = "fail";
      })
       // getbyid
       .addCase(getbyidproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getbyidproduct.fulfilled, (state, action) => {
        state.status = "success";
        state.produit = action.payload?.data?.result;
      })
      .addCase(getbyidproduct.rejected, (state) => {
        state.status = "fail";
      })}
});

// Action creators are generated for each case reducer function
export const {} = ProduitSlice.actions;

export default ProduitSlice.reducer;
