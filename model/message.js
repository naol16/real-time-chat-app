const { default: mongoose } = require("mongoose")

const messageschema= mongoose.Schema({
    messagetype:{type:String
    ,required:true
    },
    messagesender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    messagereciver:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    messagegroup:{type:mongoose.Schema.Types.ObjectId,ref:'Group'},
},{timestamps:true})
const messagemodel= mongoose.model("Message",messageschema);
export  {messageschema,messagemodel}