const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  input SignupInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    usernameOrEmail: String!
    password: String!
  }

  type Mutation {
    signup(input: SignupInput!): User
    login(input: LoginInput!): String
  }
`;

module.exports = userSchema;
