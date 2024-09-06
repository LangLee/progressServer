const nodemailer = require('nodemailer');

const sendVerificationEmail = async (to, code) => {
    let transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        // host: process.env.EMAIL_HOST,
        // port: process.env.EMAIL_PORT,
        // secureConnection: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: 'Your Email Verification Code',
        text: `Your verification code is: ${code}`
    };

    return transporter.sendMail(mailOptions);
}
const sendVerificationMobile = async (to, code) => {
    // TODO: Implement sending verification code via SMS
}
export {sendVerificationEmail, sendVerificationMobile};