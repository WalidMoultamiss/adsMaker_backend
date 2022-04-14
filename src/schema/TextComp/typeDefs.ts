import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input TextCompInput {
    content: String!
  }

  type TextComp {
    id: ID!
    content: String!
    createdAt: String!
  }

  type Query {
    getAllTextComps: [TextComp]
  }

  type Mutation {
    createTextComp(input: TextCompInput!): TextComp
  }


`;
