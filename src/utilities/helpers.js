const fs = require("fs")

const randomString = (length)=>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const len = chars.length
    let random = "";
    for(let i=0; i<length; i++){
        const position = Math.ceil(Math.random()*(len-1))
        random += chars[position]
    }   
    return random;
}

const deleteFile = (filePath)=>{
    if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath)
    }
}

module.exports = {randomString, deleteFile}