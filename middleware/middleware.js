const jwt= require("jsonwebtoken")
async function authmiddleware(req,res,next){
    const file= req.headers.authorization;
    const token=file.split(' ')[1]
    try{
    const {objectid,username}=  jwt.verify(token,process.env.secretkey)
    req.userinfo={objectid,username}
    next()
}
catch(error){
        console.log(error)
    }



}
module.exports=authmiddleware