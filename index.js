const http = require("http")
const app = require("./src/config/express.config")

const server = http.createServer(app)

const PORT = 9002

const LOCAL_HOST = '127.0.0.1'

server.listen(PORT,LOCAL_HOST,(err)=>{
    if(!err){
        console.log(`Server is running on port ${PORT}`)
        console.log("press CTRL+C to stop server...")
    }
})