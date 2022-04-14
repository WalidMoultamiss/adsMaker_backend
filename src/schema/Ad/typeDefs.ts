import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input AdInput {
    title: String!
    user: ID!
    components: [ID!]!
    bgImage: ID!
    bgColor: String
    width: Int!
    height: Int!
    viewCount: Int!
    isPremium: Boolean!
  }

  type Ad {
    id: ID!
    title: String!
    user: User!
    components: [Component!]!
    bgImage: Image!
    bgColor: String
    width: Int!
    height: Int!
    viewCount: Int!
    isPremium: Boolean!
    createdAt: String!
  }

  type Query {
    getAllAds: [Ad]
    getAllAdsByUser(user: ID!): [Ad]
  }

  type Mutation {
    createAd(input: AdInput!): Ad
    setPremium(id: ID!): Ad
    setFreemium(id: ID!): Ad
    setStatus(id: ID!, status: String!): Ad
    deleteAd(id: ID!): Ad
  }
`;