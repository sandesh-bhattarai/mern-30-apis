const http = require('http')
const app = require('./src/config/express.config');

const server = http.createServer(app)

server.listen(5500,'127.0.0.1',(err)=>{
	if (!err) {
		console.log("Server is running on port 5500");
		console.log("press ctrl+c to discontinue server.....");
	}
})
