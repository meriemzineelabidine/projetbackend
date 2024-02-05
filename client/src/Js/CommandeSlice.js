import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
//Api get all commande
export const getcommande = createAsyncThunk("/getcommande", async () => {
  try {
    let resultat = await axios.get("http://localhost:5500/commande/allcommande");
    return resultat;
  } catch (error) {
    console.log(error);
  }
});
//Api add commande 
export const addcommande = createAsyncThunk("/addcommande", async (commande) => {
  try {
    let resultat = await axios.get("http://localhost:5500/commande/addcommande",commande);
    return resultat;
  } catch (error) {
    console.log(error);
  }
});


const initialState = {
  commande: null,
  status: null,
};

export const commandeSlice = createSlice({
  name: "commande",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcommande.fulfilled, (state, action) => {
        state.status = "success";
        state.commande = action.payload?.data?.voicilist;
      })
      .addCase(getcommande.rejected, (state) => {
        state.status = "fail";
      })
      //add commande
      .addCase(addcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addcommande.fulfilled, (state, action) => {
        state.status = "success";
       
      })
      .addCase(addcommande.rejected, (state) => {
        state.status = "fail";
      })

    }
      
});


// Action creators are generated for each case reducer function
export const {} = commandeSlice.actions;

export default commandeSlice.reducer;
