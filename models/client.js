const mongoose = require("mongoose");
const schema = mongoose.Schema;
const schemaclient = schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String
   
  }
});
module.exports=client=mongoose.model('users',schemaclient)
