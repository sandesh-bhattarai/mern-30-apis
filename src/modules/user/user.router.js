const allowUser = require("../../middleware/allow.user.middleware");
const { bodyValidator } = require("../../middleware/body.validator.middleware");
const checkLogin = require("../../middleware/check.login.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const userController = require("./user.controller");
const { userCreateDTO } = require("./user.request");
const userRouter = require("express").Router();


userRouter.route("/")
          .post(checkLogin,allowUser,setPath("/user"),uploader.single('image'), bodyValidator(userCreateDTO), userController.createUser)
          .get()
          
userRouter.route("/:id")
          .get()
          .put()
          .delete()  

module.exports = userRouter;