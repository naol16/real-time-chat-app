const {serever,io,users,app} =require("./socketio/socketio")
const express= require("express")
const  userroute=require("./routes/userroute")
const  grouproute=require("./routes/grouproute")
const  messageroute=require("./routes/messageroute")
const { default: mongoose } = require("mongoose")
require('dotenv').config()
const port =process.env.port ||6221
app.use(express.json())
app.use('/user',(req,res,next)=>{
    req.io=io
    req.app=app
    req.users=users
    next()
},userroute)
app.use('/group',(req,res,next)=>{
    req.io=io
    req.app=app
    req.users=users
    next();
},grouproute)
app.use('/message',(req,res,next)=>{
    req.io=io
    req.app=app
    req.users=users
    next();
},messageroute)
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
serever.listen(port,()=>{
    createconnection();
    console.log(process.env.DataBase);
    console.log("nolawi");
})