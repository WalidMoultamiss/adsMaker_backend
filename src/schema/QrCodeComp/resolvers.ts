import type { Resolvers } from "@generated/types";
import {IQrCodeComp , QrCodeComp} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllQrCodeComps: async (): Promise<IQrCodeComp[]> => {
      return await QrCodeComp.find();
    }
  },
  Mutation: {
    //@ts-ignore
    createQrCodeComp: async (_, { input }): Promise<IQrCodeComp> => {
      const qrCodeComp = new QrCodeComp(input);
      return await qrCodeComp.save();
    }
  }
};