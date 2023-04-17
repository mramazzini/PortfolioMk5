const nodemailer = require("nodemailer");
require("dotenv").config();
async function sendEmail(name, message, contact) {
  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.MY_EMAIL,
      subject: `New message from ${name}`,
      text: ``,
      html: `<h3>Sender:</h3><p>${name}</p><h3>Message:</h3><p>${message}</p><h3>Contact information:</h3><p>${contact}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error("Failed to send email");
  }
}

module.exports = { sendEmail };
