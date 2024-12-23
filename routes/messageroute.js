const {findingthemessage,deletingmessage,creatingmessagetoprivate,creatingmessagetopublic}= require("../controller/messagefunction")
const express= require("express")
const  router= express.Router();
//finding the message based on specific id
router.get('/:id',findingthemessage)
//adding the message to private channel
router.post('/add/private/:id',creatingmessagetoprivate)
// adding the message  to the group
router.post('/add/group/:id',creatingmessagetopublic)
// deleting message
router.delete('/delete:id',deletingmessage)
export   default router