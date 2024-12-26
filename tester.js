const axios = require('axios');  // Required for making HTTP requests

// Function to send a private message via the REST API
async function sendPrivateMessage(senderId, message, receiverId) {
  try {
    const response = await axios.post(`http://localhost:6214/message/add/private/${senderId}`, {
      message: message,
      messagereciver: receiverId
    });

    console.log('Private message response:', response.data);
  } catch (error) {
    console.error('Error sending private message:', error);
  }
}

// Function to send a group message via the REST API
async function sendGroupMessage(senderId, message, groupId) {
  try {
    const response = await axios.post(`http://localhost:6214/message/add/group/${senderId}`, {
      message: message,
      messagegroup: groupId
    });

    console.log('Group message response:', response.data);
  } catch (error) {
    console.error('Error sending group message:', error);
  }
}

// Function to test sending a private message (e.g., from 'user1' to 'user2')
// setTimeout(() => {
//   sendPrivateMessage('676a90bfdcfeea2fcf880c39', 'This is a private message from user1 to user2', '676af2046f06491fbf53ac75');
// }, 2000);

setTimeout(() => {
  sendGroupMessage('676a90bfdcfeea2fcf880c39', 'This is a group message from user1 to group1', '676aa55f1ca504352f5fdda2');
}, 5000);
