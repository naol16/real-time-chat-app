const {groupmodel,groupschema}=require("../model/group")
const {messageschema,messagemodel}= require("../model/message")
const {usermodel,userschema}=require("../model/user")
// listing  the groupcreation part
async function groupcreation(req,res){
const {groupchatname,userid }=req.body;
try{
const newgroup= new groupmodel(
{groupchatname:groupchatname,
user:[userid],
messageIds: []
 }
)
await newgroup.save()
res.status(201).json({message:"newgroup group created"});
}
catch(error){
console.log(error);
res.status(500).json({error:"the is error"})
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
    const groupid =req.params.groupid
    const userid =req.params.userid
    await  groupmodel.findByIdAndUpdate(groupid,{
    $push:{userIds:userid}
    });
    res.status(201).send("user stored successfully")
}
catch(error){
    console.log(error);
    res.status(500).send("there is error")
}

}
//adding message to  the group
async function  addmessage(req,res){
const messageid=req.params.messageid
const groupid=req.params.groupid
try{
const update=await  groupmodel.findByIdAndUpdate(groupid,{
$push:{messageIds:messageid}
},{
new:true
}
)
 res.status(200).json(update);
}
catch(error){
    console.log(error)
    res.status(500).send("there is error");
}

}
async function  removeuser(req,res){
    const userid =req.params.userid
    const groupid=req.params.groupid
    try{
const deleted=await groupmodel.findByIdAndRemove(groupid,
{
 $pull:{userIds:userid}
}
)
res.status(200).send(`${deleted} deleted user`)
    }
catch(error){
   return  res.status(500).json(error);
}

}
async function deletegroup(req,res){
    const groupid= req.params.groupid
    try{
    const deleted =  await groupmodel.findByIdAndRemove(groupid)
    console.log(deleted);
    res.status(200).send(`${deleted} deleted  the group`)
    }
    catch(error){
        console.log(error);
        return res.status(500).json("there is error")
    }
}
async function updatingroup(req,res){
    const groupid=req.params.groupid;
    const {groupchatname,userIds,messageIds}=req.body
    try{
        const update= await groupmodel.findByIdAndUpdate(groupid,{
        $set:{
         groupchatname:groupchatname,
         userIds:userIds,
         messageIds:messageIds
        }

        },{new:true})
      return res.status(200).json(update);

    }
    catch(error){
        console.log(error);
        return res.status(500).json({error:"there is error"})
    }

}



export{groupcreation,listofgroups,adduser,addmessage,removeuser,updatingroup,deletegroup}