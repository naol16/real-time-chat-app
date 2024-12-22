///const {app,serever,io} =require("./socketio/socketio")
const express= require("express")
const  userroute=require("./routes/userroute")
const  grouproute=require("./routes/grouproute")
const  messageroute=require("./routes/messageroute")
const { default: mongoose } = require("mongoose")
require('dotenv').config()
const port =process.env.port ||5421
const  app =express()
app.use('/user',userroute)
app.use('/group',grouproute)
app.use('/message',messageroute)
async function createconnection (){
    try{
    await mongoose.connect(
    process.env.DataBase,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
    )
console.log("connected");
}
catch(error){
    console.log(error);
}
}
app.listen(port,()=>{
    createconnection();
    console.log(process.env.DataBase);
    console.log("nolawi");
})