const multer=require("multer")
const fs=require("fs")

const mystorage=multer.diskStorage({ //position of this matters cuz below next() call ,always first
    destination:(req,file,cb)=>{
        const path="./public/uploads"+req.UploadPath


        if(!fs.existsSync(path)){
            fs.mkdirSync(path,{recursive:true})   // it works as the main thing here as creates the place to store files in paths but every times with same file name
        }

        cb(null,path) //error can be written instead null if error occurs
    },
    filename:(req,file,cb)=>{

const ext=file.originalname.split(".").pop()
const random=Math.ceil((Math.random())*99999)

const filename=Date.now()+"--"+random+"."+ext

cb(null,filename)


    }

})



const uploader=multer({
    storage:mystorage,
    fileFilter:(req,file,cb)=>{
        const ext =file.originalname.split(".").pop()
        const allowed=['jpg','jpeg','png','gif','svg','webp','bmp']

        if(allowed.includes(ext.toLowerCase())){
cb(null,true)
    }else{
        cb({status:400,message:"File extension should be correxr"})
    }
},
limits:{
    fileSize:3000000           // the file size should be under 3mb
}
});

const road=(path)=>{
    return(req,res,next)=>{
        req.UploadPath=path; // here we needed some variable to store the updated file path from avbove mkdir func in order to return it back to destination to use it and that is why it is written at last and next() calls always another middleware ,"which comes at first "
        next()
    }
}

module.exports={uploader,road }