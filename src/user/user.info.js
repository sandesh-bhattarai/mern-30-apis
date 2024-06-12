class UserInfo{
usercreate=(req,res,next)=>{
try{
    res.json({
        result:req.body,
        message:"User created successfully",
        meta:null
    })
    
    }catch(exception){
        throw(exception)
    
}
}

userread=(req,res,next)=>{
    try{
        res.json({
            result:req.body,
            message:"Get user successfully",
            meta:null
        })
        
        }catch(exception){
            throw(exception)
        
    }
    }



}
const userinfo=new UserInfo();
module.exports=userinfo
