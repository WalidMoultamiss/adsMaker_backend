import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }


  input LoginInput {
    email: String
    password: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    token: String!
    createdAt: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    register(input: UserInput): User
    login(input: LoginInput): User
  }
`;
