const io= require("socket.io-client")
const  socket=io("http://localhost:6214")
//what am going to do using the socket io
// creating the connection
socket.on("sendmessage",(data)=>{
    console.log(data);
})