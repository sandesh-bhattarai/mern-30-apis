const allowUser = require("../../middleware/allow.user.middleware");
const checkLogin = require("../../middleware/check.login.middleware");

const userRouter = require("express").Router();


userRouter.route("/")
          .post(checkLogin,allowUser)
          .get()
          
userRouter.route("/:id")
          .get()
          .put()
          .delete()  

module.exports = userRouter;