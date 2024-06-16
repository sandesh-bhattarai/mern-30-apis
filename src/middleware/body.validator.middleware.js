const { deleteFile } = require("../utilities/helpers");

const bodyValidator = (schema)=>{
    return async(req,res,next)=>{
        try {
            const data = req.body;

            if(req.file){
                data[req.file.filename] = req.file.filename
            }

            await schema.validateAsync(data, {abortEarly:false})

            next()
            
        } catch (exception) {

            const detail = {};

            if(req.file){
                deleteFile("./"+req.file.path)
            }else if(req.files){
                req.files.map((file)=>{
                    deleteFile("./"+file.path)
                })
            }
            exception.details.map((error)=>{

                detail[error.context.label] = error.message;
            })

            next({status:402, message:"Validation Failed"})
            
        }
    }
}

module.exports = {bodyValidator}