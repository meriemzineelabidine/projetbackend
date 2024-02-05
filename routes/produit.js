const express=require('express')
const produitRouter=express.Router()
const product=require('../models/produit')
const produit = require('../models/produit')
//add produit

    produitRouter.post("/addproduit",async(req,res)=>{
        try{
        const newproduitaj=new product(req.body)
        const result= await newproduitaj.save()
        res.send({msg:"addproduct",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    produitRouter.get('/allproduct',async(req,res)=>{
        try {
            let result = await product.find()
            res.send({msg:"voici toutes les produits",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul produit
    produitRouter.get('/:id',async(req,res)=>{
        try {
            let result= await product.findById({_id:req.params.id})
            res.send({msg:"voici produit",result:result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    produitRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await product.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"produit supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update produit
    produitRouter.put('/:id',async(req,res)=>{
        try {
            let result= await product.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"produit modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=produitRouter