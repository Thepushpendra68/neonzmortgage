const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
});

module.exports = transporter;
