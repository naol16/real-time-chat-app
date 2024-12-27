const { usermodel,userschema} = require("../model/user")
var jwt = require('jsonwebtoken');
const bcrypt= require('bcrypt')
const saltround=10
function emailvalidation(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)

}
function passwordvalidation(password){
    const hasCapitalLetter = /[A-Z]/.test(password); 
    const hasSmallLetter = /[a-z]/.test(password); 
    const hasDigit = /\d/.test(password); 
    const hasSpecialChar = /[\W_]/.test(password);
    const lengthtruevalue= password.length>8;
    return hasCapitalLetter && hasSmallLetter && hasDigit && hasSpecialChar && lengthtruevalue;
}
function id(object){
    if (object){
        return res.status(200).json({id:object})
    }
    else{
        return res.status(409).json({unauthorized:'unauthorized user'})
    }
}
//it is used for getting all the users
async function getuser(req,res){
    const users= await usermodel.find();
    return res.status(200).json(users);
}
// deleting the user 
async function deleteinguser(req,res){
    const userid = req.params.id
    try{
    const deleted= await usermodel.findByIdAndDelete(userid);
    return res.send(deleted);
    }
    catch(error){
        res.status(404).send("there is error")
        console.log(error);
    }
}
// updating specific user status
//here I have to add conncection as well as  the  the group
async  function addingconnection(req,res){
const userid =req.params.id
const {useridadd}= req.body;
try{
const result = await usermodel.findByIdAndUpdate(userid,{
    $push:{connections:useridadd}
})
res.status(200).json(result)
}
catch(error){
    console.log(error)
    res.status(500).json({"error":"there is server error"})
}
}
async  function  addinggroup(req,res){
const userid = req.params.id
const {groupid}=req.body
try{
const result = await usermodel.findByIdAndUpdate(userid,{
    $push:{groups:groupid}
})
res.status(200).json(result)
}
catch(error){
    console.log(error)
    res.status(500).json({"error":"there is server error"})
}



}
async function updateuser(req,res){
    const  userid= req.params.userid;
    const{name,username,email,password,groups,connections}=req.body;   
    const  result=  await usermodel.findByIdAndUpdate(userid,{
        $set:{name:name,
             username:username,
             email:email,
             password:password
       }
    }
    )
    if (!result){
       return  res.status(404).send('there is error')
    }
}
async function signup(req,res){
 const {name,username,email,password,profilepicture,groups,connection}=req.body;
    if (!name || typeof name !== 'string' || !username || typeof username !== 'string' ||  !email || typeof email !== 'string' || !emailvalidation(email) || !passwordvalidation(password)){
       return res.status(400).send("you have  entered  incorrect data type or there is null value")
    }
    const value= await usermodel.find({email:email})
    console.log(value)
    if(value.length>=1){
         return res.status(409).json({error:'the user exists'})
     }
    try{
    const hashedpassword=await bcrypt.hash(password,saltround);
    const newvalue=new usermodel({
    name:name,
    username:username,
    email:email,
    password:hashedpassword,
})
   const saveduser=await newvalue.save();
   console.log("saveduser",saveduser);
   res.status(201).json({message:'user registetered successfully'})
    }
    catch(error){
        res.status(404).send("there is error")
        console.error(error);
}

}
async function signin(req,res){
    const{email,password}=req.body;
    if(!email || !emailvalidation(email) || !password || !passwordvalidation(password)){
        return res.status(400).send("check out you password or the email address")
}
try{
    const hashed= await bcrypt.hash(password,saltround);
    const answer = await usermodel.find({ email:email })
    if(answer.length<1){
        console.log(answer)
       return  res.status(401).send("user does not exist")
    }
    const bcryptvalue= await bcrypt.compare(password,answer[0].password)
    if (!bcryptvalue){
        return res.status(401).json({message:'incorrect password'})
    }
    const objectid=answer[0]._id;
    const username=answer[0].name
    const secretkey=process.env.secretkey
    console.log(secretkey);
    const  token= jwt.sign({objectid,username},secretkey,{
        expiresIn:"2d",
    })
    console.log(token)
    return res.status(200).json({welcome:answer[0].name,userId:objectid,token:token})
}

catch(error){
    console.error("there is error",error);
    return res.status(500).send("there is error")
    
}

}

module.exports={signin,signup,updateuser,deleteinguser,getuser,addingconnection,addinggroup}