import { configureStore } from "@reduxjs/toolkit";
import ProduitSlice from "./SliceProduit/SliceProduit";
import commandeSlice from "./CommandeSlice";
import userSlice from "./SliceUser/Sliceuser";

export const store = configureStore({
  reducer: { user: userSlice, produit: ProduitSlice, commande: commandeSlice },
});
