//importation
const express=require('express')
//connect avec base
const dbConnect=require(('./config/db-connect'))
require('dotenv').config()
//initialisation
const app=express()
dbConnect()
// creation
//midellwaire
app.use(express.json())
app.use('/client',require('./routes/client'))
app.use('/produit',require('./routes/produit'))


app.listen(process.env.PORT,(err)=>err?console.log(err):console.log(`serveur listen ${process.env.PORT}`))

