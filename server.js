const express= require("express")
const { default: mongoose } = require("mongoose")
require('dotenv').config()
const app = new express()
const port =process.env.port ||5421
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
createconnection();

app.listen(port,()=>{
    console.log(process.env.DataBase);
    console.log("nolawi");
})