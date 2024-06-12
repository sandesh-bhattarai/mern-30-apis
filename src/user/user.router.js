const userrouter=require("express").Router();
const userinfo=require("../user/user.info")
const uploader=require("../middlewares/uploader")



userrouter.route("/human")
.post(uploader.Single('image'),userinfo.usercreate)
.get(userinfo.userread)






module.exports=userrouter