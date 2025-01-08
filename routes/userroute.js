const {signup,signin,updateuser,deleteinguser,getuser,addingconnection,addinggroup}=require("../controller/userfunction")
const express= require("express")
const  router= express.Router()
const authmiddleware= require("../middleware/middleware")
// here  we are using this for getting all the user
router.get('/getuser',authmiddleware,getuser)
// here  we are adding newuser  into user 
router.post('/adduser',signup)
// here we are implementing the login logic
router.post('/login',signin)
// here   we are updating some part of user
router.put('/updateuser/:id',updateuser)
// here we are deleting the user
router.delete('/deleteuser/:id',deleteinguser)
// here we are going  to add the   connection  addition part
router.patch('/addconncetion/:id',addingconnection)
router.patch('/addgroup/:id',addinggroup)
module.exports=router
