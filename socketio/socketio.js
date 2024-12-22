const express= require("express")
const http= require("http")
const socketio= require("socket-io")
const app= new express()

const serever=http.createServer(app);
const port = process.env.PORT ||5432
const io= socketio(serever)
io.on('connection',(socket)=>{
    console.log(`connected ${socket.id}`);
    socket.on("message",(data)=>{
        console.log(data);
    })
    io.emit("message","you are telba");
socket.on("disconnect",()=>{
    console.log(`disconnected ${socket.id}`)
})
}
)
export{serever,app,io}

