const allowUser = (req,res,next)=>{

    //Check permission here

    next();
}
module.exports = allowUser;