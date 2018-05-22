import gql from "graphql-tag";

export const FACEBOOK_CONNECT = gql`
  mutation facebookConnect(
    $email: String
    $firstName: String!
    $lastName: String!
    $userID: Int!
  ) {
    facebookConnect(
      email: $email
      firstName: $firstName
      lastName: $lastName
      userID: $userID
    ) {
      ok
      token
    }
  }
`;
