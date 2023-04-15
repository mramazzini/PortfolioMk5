const nodemailer = require("nodemailer");

async function sendEmail(name, email, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Your Gmail address
        pass: "your-gmail-password", // Your Gmail password
      },
    });

    await transporter.sendMail({
      from: "your-email@gmail.com", // Sender email address
      to: "your-email@gmail.com", // Recipient email address
      subject: `New message from ${name}`,
      html: `<p>${message}</p><br/><p>From: ${email}</p>`,
    });

    console.log(`Email sent from ${email}`);
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error("Failed to send email");
  }
}

module.exports = { sendEmail };
