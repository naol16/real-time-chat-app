const {messageschema,messagemodel}=require("../model/message")
async  function findingthemessage(req,res){
    const messageid= req.params.id
    try{
    const message= await messagemodel.findById(messageid);
    res.status(200).json(message)
}
catch(error){
    console.log(error);
    res.status(500).json({
        error:"error created"
    })
}
}
async  function deletingmessage(req,res){
const messageid= req.params.id
try{
 const  message= await messagemodel.findByIdAndRemove(messageid);
 res.status(200).send("deleted successfully")
 
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:"error created"
        })
    }
}
// here we have to create message 
async function creatingmessagetoprivate(req,res){
    const {messagetype,messagesender,messagereciver}=req.body;
    try{
    const messages=  new messagemodel ({
        messagetype:messagetype,
        messagesender:messagesender,
        messagereciver:messagereciver,
    })
    await messages.save();
    res.status(201).json({
        "message":"successfully created"
    })
}
catch(error){
    console.log(error)
    res.status(500).json({
        error:"failed to connect"
    })
}
}
async function creatingmessagetopublic(req,res){
    const {messagetype,messagesender,messagereciver,messagegroup}=req.body;
    try{
    const messages= new messagemodel ({
        messagetype:messagetype,
        messagesender:messagesender,
        messagereciver:messagereciver,
    })
   await  messages.save();
   res.status(201).json({
    'message':"message created successfully",
    data:messages
   })
    }
catch(error){
    console.log(error)
    res.status(500).json({
        error:"error created"
    })
}
}
export {findingthemessage,deletingmessage,creatingmessagetoprivate,creatingmessagetopublic}
