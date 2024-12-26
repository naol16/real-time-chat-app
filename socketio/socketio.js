const express= require("express")
const http= require("http")
const socketio= require("socket.io")
const app= new express()
const serever=http.createServer(app);
const io= socketio(serever)
const users = {};

io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);

  // Store userId and socketId mapping when user connects
  socket.on('user-connected', (userId) => {
    users[userId] = socket.id;
    console.log(`User ${userId} connected with socket ID: ${socket.id}`);
  });
  io.emit("message","you are telba");
socket.on("join-group", (groupId) => {
 socket.join(groupId); 
console.log(`User ${socket.id} joined group: ${groupId}`);
      });
      socket.on("leave-group", (groupId) => {
        socket.leave(groupId);
        console.log(`User ${socket.id} left group: ${groupId}`);
      });

  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    for (let userId in users) {
      if (users[userId] === socket.id) {
        delete users[userId];
        break;
      }
    }
  });
});

module.exports={app,serever,io,users}

