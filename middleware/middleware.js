const jwt=require("jsonwebtoken")
async function authmiddleware(req,res,next){
    const file= req.headers.authorization;
    try{
        const file= req.headers.authorization
        console.log(file)
        console.log(process.env.secretkey)
        if (!file || !file.startsWith('Bearer ')){
            return res.status(400).json({msg:"error"})
        }
        const token=file.split(' ')[1]
    const {objectid,username}=  jwt.verify(token,process.env.secretkey)
    req.userinfo={objectid,username}
    next()
}
catch(error){
        console.log(error)
    }
}
module.exports=authmiddleware