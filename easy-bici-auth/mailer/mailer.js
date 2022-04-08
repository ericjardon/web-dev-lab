const nodemailer = require('nodemailer')


// update with createTestAccount
const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'steve.jaskolski27@ethereal.email',
        pass: 'PZDRzedxX6y6QncVYp'
    }
}

module.exports = nodemailer.createTransport(mailConfig);