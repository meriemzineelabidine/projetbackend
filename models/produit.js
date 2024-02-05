const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shemaProduit = shcema({
 categorie: {
    type: String,
    required: true,
  },
  produit: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  nomproduit: {
    type: String,
    required: true,
  },
  marque: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  prix: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});
module.exports = Produit = mongosse.model("produits", shemaProduit);
