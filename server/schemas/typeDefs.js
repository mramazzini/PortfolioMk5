const { gql } = require("apollo-server-express");

// Check if it should be "Number" or "Int" for data type
// Refer to 21-Mern (Module 24)
const typeDefs = gql`
  type Query {
    message(message: String!, sentBy: String!, contactInfo: String!): String!
    discordStatus: String!
  }
  type Mutation {
    sendMessage(
      message: String!
      sentBy: String!
      contactInfo: String!
    ): String!
  }
`;

module.exports = typeDefs;
