require("dotenv").config();
const userService = require("./user.service")
class UserController{
    createUser = async(req,res,next)=>{
        try {
            const {data,singleUpload} = await userService.transformUserCreate(req);
            await userService.sendActivationEmail({to:data.email, name:data.name, token:data.activationToken})

            res.json({
                result:{
                    data:data,
                    file:singleUpload,
                },
                message:"User Created",
                meta:null
            })
        } catch (exception) {
            next(exception)
            
        }
    }
}

module.exports = new UserController();