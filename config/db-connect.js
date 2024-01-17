const mongoose=require('mongoose')
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.URLDB)
        console.log('data base connect')   
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=dbConnect
