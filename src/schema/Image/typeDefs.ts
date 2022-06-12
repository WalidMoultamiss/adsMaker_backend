import { gql } from "apollo-server-express";

export const typeDefs = gql`

  input ImageInput {
    src: String!
    alt: String!
    user: String!
  }

  type Image {
    id: ID!
    src: String!
    alt: String!
    user: String!
    createdAt: String!
  }

  type Query {
    getAllImages: [Image]
    getAllImagesByUser(user: String!): [Image]
  }


  type Mutation {
    createImage(input: ImageInput): Image
    deleteImage(id: ID!): Image
  }

`;
