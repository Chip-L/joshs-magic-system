const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    isAdmin: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String
      lastName: String!
      email: String!
      password: String!
      isAdmin: Boolean
    ): Auth

    # updateUser(
    #   firstName: String
    #   lastName: String
    #   email: String
    #   password: String
    #   isAdmin: Boolean
    # ): User
  }
`;

module.exports = typeDefs;
