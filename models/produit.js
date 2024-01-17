const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shemaProduit = shcema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
module.exports = Produit = mongosse.model("produits", shemaProduit);
