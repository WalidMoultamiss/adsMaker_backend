import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input QrCodeCompInput {
    url: String!
    image: ID!
  }

  type QrCodeComp {
    id: ID!
    url: String!
    image: Image!
    createdAt: String!
  }

  type Query {
    getAllQrCodeComps: [QrCodeComp]
  }

  type Mutation {
    createQrCodeComp(input: QrCodeCompInput!): QrCodeComp
  }


`;
