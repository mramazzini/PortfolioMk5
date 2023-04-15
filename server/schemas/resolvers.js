const { AuthenticationError } = require("apollo-server-express");

const { signToken } = require("../utils/auth");
const fs = require("fs").promises;

const resolvers = {
  Mutation: {},
};

module.exports = resolvers;
