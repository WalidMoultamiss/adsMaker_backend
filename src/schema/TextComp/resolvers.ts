import type { Resolvers } from "@generated/types";
import {User , ITextComp , TextComp } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllTextComps: async (): Promise<ITextComp[]> => {
      return await TextComp.find();
    }
  },
  Mutation: {
    //@ts-ignore
    createTextComp: async (_, { input }): Promise<ITextComp> => {
      const textComp = new TextComp(input);
      return await textComp.save();
    }
  }
};