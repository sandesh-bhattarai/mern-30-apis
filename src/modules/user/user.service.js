require("dotenv").config()
const bcrypt = require("bcryptjs");
const { randomString } = require("../../utilities/helpers");
const mailService = require("../../service/mail.service")
class UserService{
    transformUserCreate = async(req)=>{

        const data = req.body;

        const singleUpload = req.file;

        const files = req.files;

        if(req.file){
            data.image = req.file.filename

        }

        data.password = await bcrypt.hash(data.password, 10);
        data.status = "inactive"
        data.activationToken = randomString(100);
        data.activeFor = new Date(Date.now() + (3*60*60*1000))

        return {data, singleUpload};

    }

    sendActivationEmail = async({to, name, token})=>{
        try {
            return await mailService.sendEmail({
                to:to,
                subject:"Activate your account",
                message:`
                 <p>Dear ${name},</p>
                    <p>Your account has been registered successfully.</p>
                    <p>Please click on the link or copy paste the url in the browser for further action.</p>
                    <a href="${process.env.FRONTEND_URL}/activate/${token}">
                    ${process.env.FRONTEND_URL}/activate/${token}
                    </a>
                    <p>------------------------------------------------------------------------</p>
                    <p>Regards,</p>
                    <p>System Admin</p>
                    <p>${process.env.SMTP_FROM}</p>
                    <p>
                        <small>
                            <em>Please do not reply to this email.</em>
                        </small>
                    </p>
                `
             })
        } catch (exception) {

            throw exception;
            
        }
    }
}

module.exports = new UserService();