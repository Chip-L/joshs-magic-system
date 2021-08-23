import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        isAdmin
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUserMutation(
    $lastName: String!
    $email: String!
    $password: String!
    $firstName: String
    $isAdmin: Boolean
  ) {
    addUser(
      lastName: $lastName
      email: $email
      password: $password
      firstName: $firstName
      isAdmin: $isAdmin
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        isAdmin
      }
    }
  }
`;
