//importation
const express = require("express");
const cors = require("cors");
//connect avec base
const dbConnect = require("./config/db-connect");
require("dotenv").config();
const passport = require("passport");
//initialisation
const app = express();
dbConnect();
// creation
//midellwaire
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/user", require("./routes/user"));
app.use("/produit", require("./routes/produit"));
app.use("/commande", require("./routes/commande"));


app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log(`serveur listen ${process.env.PORT}`)
);
