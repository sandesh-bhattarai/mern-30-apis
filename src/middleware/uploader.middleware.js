const multer= require("multer")

const fs = require("fs");
const { randomString } = require("../utilities/helpers");

const myStorage = multer.diskStorage({
    destination : (req,file, cb)=>{
        const path = "./public/uploads/user/"+req.uploadPath;
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, {recursive:true})
        }

    },
    filename:(req,file,cb)=>{
        const ext = file.originalname.split(".").pop()
        const random = Math.ceil((Math.random() * 9999))

        const filename = randomString(25) + "." + ext;
        
        cb(null,filename)
    }
})

const uploader = multer({
    storage:myStorage,
    fileFilter:(req,file,cb)=>{
        const ext = file.originalname.split(".").pop()
        const allowed = ["jpg","jpeg","png","gif","svg","webp","bmp"]

        if(allowed.includes(ext.toLowerCase())){
            cb(null,true)
        }else{
            cb({status:400, message:"File format not supported"}, false)
        }
    },
    limits:{
        fileSize:3000000
    }
})

const setPath = (path)=>{
    return (req,res,next)=>{
        req.uploadPath = path;
        next()
    }
}

module.exports = {uploader, setPath}