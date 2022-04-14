import type { Resolvers } from "@generated/types";
import { IImgComp, ImgComp, User } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllImgComps: async (): Promise<IImgComp[]> => {
      return await ImgComp.find();
    }
  },
  Mutation: {
    //@ts-ignore
    createImgComp: async (_, { input }): Promise<IImgComp> => {
      const imgComp = new ImgComp(input);
      return await imgComp.save();
    }
  }
};