const { AuthenticationError } = require("apollo-server-express");
const { sendEmail } = require("../utils/nodemailer");

const resolvers = {
  Query: {
    sendMessage: async (parent, args) => {
      const { sentBy, message, contactInfo } = args;

      await sendEmail(sentBy, message, contactInfo);
      return "Email sent";
    },
  },
};

module.exports = resolvers;
