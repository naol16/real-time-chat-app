const {groupmodel,groupschema}=require("../model/group")
const {messageschema,messagemodel}= require("../model/message")
const {usermodel,userschema}=require("../model/user")
// listing  the groupcreation part
async function groupcreation(req,res){

const {groupchatname,userid ,messageid}=req.body;
try{
const newgroup= new groupmodel(
{groupchatname:groupchatname,
user:[userid],
messageIds: 
     []

 }
)
}
catch(error){
console.log(error);
}
}
//listing  all the groups
async function  listofgroups(req,res){

try{
const groups = await  groupmodel.find();
res.status(200).json(groups)

}
catch(error){
    console.log(error);
    res.status(500).send('server error')
}
}
//adding add user  functionality
async function  adduser(req,res){
    try{
    const{userid,groupid}=req.body
    await  groupmodel.findByIdAndUpdate(groupid,{
    $push:{userIds:userid}
    });
}
catch(error){
    console.log(error);
}

}
//adding message to  the group
async function  addmessage(req,res){
const {messageid,groupid}=req.body
await  groupmodel.findByIdAndUpdate(groupid,{
$push:{messageIds:messageid}
}

)

}
async function  removeuser(req,res){
    const {userid,groupid}=req.body
await groupmodel.FindbyIdAnduUpdate(groupid,
{
 $pull:{userIds:userid}
}
)

}



export{groupcreation,listofgroups,adduser,addmessage,removeuser}