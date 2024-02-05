const mongoose=require('mongoose')
const schema=mongoose.Schema
const userschema=schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:"https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
    },
    isadmin:{
        type:Boolean,
        default:false
    }
})
module.exports=user=mongoose.model('user',userschema)