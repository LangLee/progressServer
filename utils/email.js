const nodemailer = require('nodemailer');

async function sendVerificationEmail(to, code) {
    let transporter = nodemailer.createTransport({
        service: `${process.env.EMAIL_HOST}:${process.env.EMAIL_PORT}`,
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
export default sendVerificationEmail;