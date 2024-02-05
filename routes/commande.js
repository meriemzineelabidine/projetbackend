const express=require('express')
const commandeRouter=express.Router()
const commande=require('../models/commande')
//add commande

    commandeRouter.post("/addcommande",async(req,res)=>{
        try{
        const newcommandeaj=new commande(req.body)
        const result= await newcommandeaj.save()
        res.send({msg:"addcommande",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    commandeRouter.get('/allcommande',async(req,res)=>{
        try {
            let result = await commande.find()
            res.send({msg:"voici toutes les commandes",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul commande
    commandeRouter.get('/:id',async(req,res)=>{
        try {
            let result= await commande.findById({_id:req.params.id})
            res.send({msg:"voici commande",result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    commandeRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await commande.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"commande supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update commande
    commandeRouter.put('/:id',async(req,res)=>{
        try {
            let result= await commande.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"commande modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=commandeRouter