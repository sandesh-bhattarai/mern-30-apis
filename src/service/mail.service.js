require("dotenv").config();
const nodemailer = require("nodemailer")

class MailService{
    #transport;

    constructor(){
        try {

            const connectionOpts = {
                host:process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth:{
                    user:process.env.SMTP_USERNAME,
                    pass:process.env.SMTP_PASSWORD
                }
                
            }

            if(process.env.SMTP_PROVIDER==='gmail'){
                connectionOpts['service']= 'gmail';
            }

            this.#transport = nodemailer.createTransport(connectionOpts)
            
        } catch (exception) {

            console.log(exception)
            console.log("Error connection SMTP Server...")
            throw {status:500, message:"Error connecting SMTP Server...", detail:exception}
            
        }
    }

    sendEmail = async({to, subject, message, attachements = null})=>{

        try {

            const msgOpts = {
                to:to,
                from: process.env.SMTP_FROM,
                subject:subject,
                html:message
            }

            if(attachement){
                msgOpts['attachements'] = attachements
            }

           await  this.#transport.sendMail(msgOpts);
           return true;
            
        } catch (exception) {

            console.log("Error sending email...")
            console.log(exception)
            throw {status:500, message:"Error sending email...", detail:exception}
            
        }

    }
}

const mailService = new MailService();
module.exports = mailService