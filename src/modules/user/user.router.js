const UserRouter = require("express").Router();
const CheckLogin = require("../../middleware/auth.middleware");
const CtrlUser = require("./user.controller");



UserRouter.post("/",CheckLogin,CtrlUser.createUser)

module.exports = UserRouter;