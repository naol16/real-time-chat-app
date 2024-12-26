const mongoose= require("mongoose")
const groupschema=require("./group")
const userschema=mongoose.Schema(
    {
    name:String,
    username:String,
     email:String,
     password:String,
     profilepicture:String,
     groups:[{type:mongoose.Schema.Types.ObjectId,ref:'Group'}],
     connections:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
 }
)
const usermodel = mongoose.model('User',userschema)
module.exports = { usermodel,userschema}