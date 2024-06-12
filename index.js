const http=require("http")
const exp=require("./src/config/express.config")


const api=http.createServer(
// imported config to start over 
exp
)

api.listen(9000,"localhost",(err)=>{
    if(!err){
        console.log("Server is running on port 9000")
        console.log("press ctrl+c to exit ")
        console.log("if no debug is left,port is ready to be test in postman ")
    }
}
)
