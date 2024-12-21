const mongoose= require("mongoose")
const groupschema=require("./group")

const userschema=mongoose.Schema(
    {username:String,
     email:String,
     password:String,
     profilepicture:String,
     groups:[groupschema],
     connections:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
 }
)
const usermodel = mongoose.model('User',userschema)
export { usermodel,userschema}