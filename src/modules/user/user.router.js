const userRouter = require("express").Router();


userRouter.route("/")
          .post()
          .get()
          
userRouter.route("/:id")
          .get()
          .put()
          .delete()  

module.exports = userRouter;