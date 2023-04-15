const { gql } = require("apollo-server-express");

// Check if it should be "Number" or "Int" for data type
// Refer to 21-Mern (Module 24)
const typeDefs = gql`
  type Message {
    _id: ID
    message: String
    createdAt: String
    sentBy: String
  }
  type Query {
    messages: [Message]
  }

  type Mutation {
    sendMessage(message: String!): Message
  }
`;

module.exports = typeDefs;
