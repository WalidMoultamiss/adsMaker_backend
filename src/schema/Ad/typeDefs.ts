import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input AdInput {
    title: String!
    user: ID!
    width: Int!
    adImage: String!
    json: String!
    height: Int!
    viewCount: Int
    isPremium: Boolean
  }

  type Ad {
    id: ID!
    title: String!
    user: User!
    width: Int!
    json: String!
    adImage: String!
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