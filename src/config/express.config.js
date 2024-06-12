const express=require("express");
const userrouter = require("../user/user.router");




const exp=express();

// here we define body parser for raw data 

//body parser
// note this parser should be written before the .use function 
exp.use(express.json());  //raw json data only for payload

exp.use(userrouter)// imported router material user 


//error handler always at last 
// next({}) with argument is always an error handler call
// its the middleware function with 4 parameters

exp.use((error,req,res,next)=>{
    let status=error.status ||500
    let message=error.message || "server error .........."
    let result=error.detail || null;

    res.status(status).json({
        result:result,
        message:message,
        status:status,
        meta:null
    })
})

module.exports=exp