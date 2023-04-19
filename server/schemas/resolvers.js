const { AuthenticationError } = require("apollo-server-express");
const { sendEmail } = require("../utils/nodemailer");

const resolvers = {
  Query: {
    message: async (parent, args) => {
      return "Hello World!";
    },
    discordStatus: async (parent, args) => {
      const response = await fetch("https://discord.com/api/v9/users/@me", {
        headers: {
          Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
        },
      });

      const data = await response.json();
      return data;
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
