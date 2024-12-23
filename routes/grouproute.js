const express= require("express")
const {groupcreation,listofgroups,adduser,addmessage,removeuser,updatingroup,deletegroup}=require("../controller/groupfunction")
const  router= express.Router();
//listing all the users
router.get('/groups',listofgroups)
// adding user  into   the group
router.post('/new/groupid/:userid',adduser)
// adding groups into   group
router.post("/addgroup",groupcreation)
router.post("/addmessage/:groupid/:messageid",addmessage)
//updating the group status
router.put('/group/:groupid',updatingroup)
//deleting the user from the group
router.delete('/deletegroup/:groupid',deletegroup)
// removing the user  from the group
router.delete('/deleteuser/:groupid/:userid',removeuser)
export   default router