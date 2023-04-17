const { AuthenticationError } = require("apollo-server-express");
const { sendEmail } = require("../utils/nodemailer");

const resolvers = {
  Query: {
    message: async (parent, args) => {
      return "Hello World!";
    },
  },
  Mutation: {
    sendMessage: async (parent, args) => {
      const { sentBy, message, contactInfo } = args;

      await sendEmail(sentBy, message, contactInfo);
      return "Email sent";
    },
  },
};

module.exports = resolvers;
