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
//getbyid
export const getbyidproduct = createAsyncThunk("/getbyidproduct", async (id) => {
  try {
    let resultat = await axios.get(`http://localhost:5500/produit/${id}`);
    return resultat;
  } catch (error) {
    console.log(error);
  }
});

//add produit
export const addproduit=createAsyncThunk('/addproduit',async(newprod)=>{
  try{
      let resultat= await axios.post('http://localhost:5500/produit/addproduit',newprod)
      return  resultat;   

  }catch (error) {
      console.log(error)
  }
})
//delete produit
export const deleteproduit=createAsyncThunk('/deleteproduit',async(id)=>{
  try{
      let resultat= await axios.delete(`http://localhost:5500/produit/${id}`)
      return  resultat;   

  }catch (error) {
      console.log(error)
  }
})
//update produit
export const updateproduit=createAsyncThunk('/updateproduit',async({id,updateproduit})=>{
  try{
      let resultat= await axios.put(`http://localhost:5500/produit/${id}`,updateproduit)
      return  resultat;   

  }catch (error) {
      console.log(error)
  }
})

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
      })

      //add produit
      .addCase(addproduit.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addproduit.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addproduit.rejected, (state) => {
        state.status = "fail";
      })
      //   delete
      .addCase(deleteproduit.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteproduit.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteproduit.rejected, (state) => {
        state.status = "fail";
      })
      //updateproduit
      .addCase(updateproduit.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateproduit.fulfilled, (state) => {
        state.status = "success";
        
      })
      .addCase(updateproduit.rejected, (state) => {
        state.status = "fail";
      })
    }
      
});

// Action creators are generated for each case reducer function
export const {} = ProduitSlice.actions;

export default ProduitSlice.reducer;
