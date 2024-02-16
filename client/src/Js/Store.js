import { configureStore } from "@reduxjs/toolkit";
import ProduitSlice from "./SliceProduit/SliceProduit";
import commandeSlice from "./CommandeSlice";
import userSlice from "./SliceUser/Sliceuser";
import  listuserSlice  from "./SliceUser/List_user";

export const store = configureStore({
  reducer: { user: userSlice,listuser:listuserSlice, produit: ProduitSlice, commande: commandeSlice },
});
