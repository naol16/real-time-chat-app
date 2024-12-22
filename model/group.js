const mongoose= require("mongoose")
const {userschema,usermodel}= require("./user")
const  {messageschema,messagemodel}   =require("./message")
const groupschema=mongoose.Schema({
    groupchatname:String,
    userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    messageIds: 
     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] 
    })
const groupmodel=mongoose.model("Group",groupschema);
export{groupschema,groupmodel}