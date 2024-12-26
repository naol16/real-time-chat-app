const {messageschema,messagemodel}=require("../model/message")
const {serever,app,io,users}=require("../socketio/socketio")
async  function findingthemessage(req,res){
    const messageid= req.params.id
    if(!messageid){
        return res.status(404).send("there is error")
    }
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
if (!messageid){
    return res.status(404).send("there is error");
}
try{
 const  message= await messagemodel.findByIdAndDelete(messageid);
 return res.status(200).send("deleted successfully")
 
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
    const senderid=req.params.id
    const {message,messagereciver}=req.body;
    try{
    const messages=  new messagemodel ({
        messagetype:message,
        messagesender:senderid,
        messagereciver:messagereciver,
    })
    await messages.save();
    const recipientSocketId = users[recipientId];
    if (recipientSocketId) {
      io.to(recipientSocketId).emit("message-received", {
        senderid,
        message,
        timestamp: messages.createdAt,
      });
    }

    res.status(201).json({ message: "Message sent successfully", data: newMessage })
    return res.status(201).json({
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
    const senderid=req.params.id
    const {message,messagegroup}=req.body;
    try{
    const messages= new messagemodel ({
        messagetype:message,
        messagesender:senderid,
        messagegroup:messagegroup
    })
   await  messages.save();

   io.to(groupId).emit("message-received", {
    senderid,
    groupId,
    content,
    timestamp: messages.createdAt,
  });


   
   res.status(200).json({
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
module.exports={findingthemessage,deletingmessage,creatingmessagetoprivate,creatingmessagetopublic}
