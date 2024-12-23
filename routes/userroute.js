const {signup,signin,updateuser,deleteinguser,getuser}=require("../controller/userfunction")

const express= require("express")
const  router= express.Router();
// here  we are using this for getting all the user
router.get('/getuser',getuser)
// here  we are adding newuser  into user 
router.post('/adduser',signup)
// here we are implementing the login logic
router.post('/login',signin)
// here   we are updating some part of user
router.put('/updateuser/:id',updateuser)
// here we are deleting the user
router.delete('/deleteuser/:id',deleteinguser)
export   default router