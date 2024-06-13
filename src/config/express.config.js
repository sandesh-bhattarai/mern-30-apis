const express = require('express');
const router = require('../routes/router.config');

const app = express()


// body parsers
app.use(express.json())
app.use(express.urlencoded(
	{
		extended: true
	}
))

// endpoint: 
app.use(router)


// 404 error
app.use((req,res,next)=>{
	next({status:404, message:"Resource not Found"})
})

// error handeling
app.use((err, req, res, next) => {
	let status = err.status || 500
	let message = err.message || "Server errro..."
	let result = err.detail || null

	res.status(status).json({
		result : result,
		meta : null,
		message : message
	})
})

module.exports = app;