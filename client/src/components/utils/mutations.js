import { gql } from "@apollo/client";
export const SEND_MESSAGE = gql`
  mutation sendMessage(
    $sentBy: String!
    $message: String!
    $contactInfo: String!
  ) {
    sendMessage(sentBy: $sentBy, message: $message, contactInfo: $contactInfo)
  }
`;
