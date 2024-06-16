const allowUser = require("../../middleware/allow.user.middleware");
const checkLogin = require("../../middleware/check.login.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const userRouter = require("express").Router();


userRouter.route("/")
          .post(checkLogin,allowUser,setPath("/user"),uploader.single('image'))
          .get()
          
userRouter.route("/:id")
          .get()
          .put()
          .delete()  

module.exports = userRouter;