const nodemailer = require("nodemailer");
const CustomErrorHandler = require("./custom-error-handler");

module.exports = async function (code, email) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "baltabaykalandarov@gmail.com",
                pass: process.env.APP_KEY
            }
        })

        await transporter.sendMail({
            from: "baltabaykalandarov@gmail.com",
            to: email,
            subject: "Cars verification",
            text: "ushbu xabarda sizning tasdiqlash kodingiz mavjud",
            html: `<h1>Your verification code is: ${code}</h1>`
        })
    } catch (error) {
        throw CustomErrorHandler.BadRequest(error.message);
    }
}