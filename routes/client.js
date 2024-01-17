const express=require('express')
const clientRouter = express.Router()
const user=require('../models/client')
//add
clientRouter.post('/add',async(req,res)=>{
try {
	const newclient = new user (req.body)
	const result= await newclient.save()
	res.send(({new:result , msg:'client ajoutée'}))
	
} 
catch (error) {
	console.log(error)
}
})
//get all client
clientRouter.get('/lists',async(req,res)=>{
	try {
		let result= await user.find()
		res.send({result,msg:"voici list des client"})
	} catch (error) {
		console.log(error)
		
	}
})
//get un seul element
clientRouter.get('/:id',async(req,res)=>{
	try {
		let result=await user.findById({_id:req.params.id})
		res.send({msg:"voici client",result})
	} 
	catch (error) {
		console.log(error)
		
	}

})
//delete un element
clientRouter.delete('/:id',async(req,res)=>{
	
	try {
		let result= await user.findByIdAndDelete({_id:req.params.id})
		res.send({msg:"element supprimé"})
		
	} catch (error) {
		console.log(error)
		
	}
})
 //update un element
clientRouter.put('/:id',async(req,res)=>{
	try {
		let result=await user.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
		res.send({msg:"element modifié"})
		
	} 
	
	catch (error) {
		console.log(error)
		
	}

})


module.exports=clientRouter

