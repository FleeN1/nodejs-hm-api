const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENGRID_API_KEY } = process.env

sgMail.setApiKey(SENGRID_API_KEY)

const sendMail = async (data) => {
    const mail = { ...data, from: 'dimamakievskii@gmail.com' }
    
    sgMail
        .sendMail(mail)
        .then(() => console.log('Mail sent successfully'))
        .catch((e) => console.log(e.message))
}

module.exports = sendMail