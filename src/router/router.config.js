const userRouter = require("../modules/user/user.router");

const router = require("express").Router()

router.use("/user", userRouter);


module.exports = router;