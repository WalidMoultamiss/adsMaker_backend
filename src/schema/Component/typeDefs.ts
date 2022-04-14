import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input ComponentInput {
    CompType: String!
    CompId: ID!
    x: Int!
    y: Int!
    zoom: Int!
    tw:String!
    ad:String!
  }

  type Component {
    id: ID!
    CompType: String!
    CompId: ID!
    x: Int!
    y: Int!
    zoom: Int!
    tw:String!
    ad:String!
    createdAt: String!
  }

  type Query {
    getAllComponents: [Component]
    getAllComponentsByAd(ad: String!): [Component]
  }

  type Mutation {
    createComponent(input: ComponentInput!): Component
    deleteComponent(id: ID!): Component
  }
`;