const allowUser = require("../../middleware/allow.user.middleware");
const { bodyValidator } = require("../../middleware/body.validator.middleware");
const checkLogin = require("../../middleware/check.login.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { userCreateDTO } = require("./user.request");
const userRouter = require("express").Router();


userRouter.route("/")
          .post(checkLogin,allowUser,setPath("/user"),uploader.single('image'), bodyValidator(userCreateDTO))
          .get()
          
userRouter.route("/:id")
          .get()
          .put()
          .delete()  

module.exports = userRouter;