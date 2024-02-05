const mongosse = require("mongoose");
const shcema = mongosse.Schema;
const shemacommande = shcema({
 iduser: {
    type: String,
    
  },
 nameuser: {
    type: String,
    
  },
  nameprod: {
    type: String,
    
  },
  quantite: {
    type: String,
    
  },
  price: {
    type: String,
  
  },
  
  status: {
    type: String,
   
  },
  
});
module.exports = commande = mongosse.model("commande", shemacommande);
