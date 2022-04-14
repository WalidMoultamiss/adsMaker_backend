import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input ImgCompInput {
    image: ID!
    width: Int!
    height: Int!
  }

  type ImgComp {
    id: ID!
    image: Image!
    width: Int!
    height: Int!
    createdAt: String!
  }

  type Query {
    getAllImgComps: [ImgComp]
  }

  type Mutation {
    createImgComp(input: ImgCompInput!): ImgComp
  }

`;
