const mongoose= require("mongoose")
const {userschema,usermodel}= require("./user")
const  {messageschema,messagemodel}   =require("./message")
const groupschema=mongoose.Schema({
    groupchatname:String,
    user:[userschema],
    messages:[messageschema]
    })
const groupmodel=mongoose.model("Group",groupschema);
export{groupschema,groupmodel}