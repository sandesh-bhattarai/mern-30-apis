const router = require('express').Router();
const UserRouter = require('../modules/user/user.router');


router.use("/user",UserRouter)

module.exports = router