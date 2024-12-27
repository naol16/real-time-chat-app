const {findingthemessage,deletingmessage,creatingmessagetoprivate,creatingmessagetopublic}= require("../controller/messagefunction")
const express= require("express")
const authmiddleware=require("../middleware/middleware")
const  router= express.Router();
//finding the message based on specific id
router.get('/:id',authmiddleware,findingthemessage)
//adding the message to private channel
router.post('/add/private/:id',authmiddleware,creatingmessagetoprivate)
// adding the message  to the group
router.post('/add/group/:id',authmiddleware,creatingmessagetopublic)
// deleting message
router.delete('/delete/:id',authmiddleware,deletingmessage)
module.exports=router