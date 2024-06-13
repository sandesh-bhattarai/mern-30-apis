class userController{
	createUser = (request, responce)=>{

		const data = request.query;

		responce.status(200).json({
			result : data,
			message : "New user created",
			meta: {}

		})
	}
}

const CtrlUser = new userController()
module.exports = CtrlUser