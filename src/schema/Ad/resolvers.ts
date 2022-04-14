import type { Resolvers } from "@generated/types";
import {
  IAd,
  Ad,
  Component,
  IImage,
  Image,
  User,
  IUser,
  Admin,
  IAdmin,
  IComponent,
  TextComp,
  ITextComp,
  QrCodeComp,
  IQrCodeComp,
  ImgComp,
  IImgComp,
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllAds: async (): Promise<IAd[]> => {
      return await Ad.find();
    },
    getAllAdsByUser: async (
      _: any,
      { user }: { user: String }
    ): Promise<IAd[]> => {
      const ads = await Ad.find({ user });
      if (ads) {
        return ads;
      }
      throw new Error("Ads not found");
    },
  },
  Mutation: {
    //@ts-ignore
    createAd: async (_, { input }): Promise<IAd> => {
      const ad = new Ad(input);
      return await ad.save();
    },
    //@ts-ignore
    deleteAd: async (_, { id }): Promise<IAd> => {
      const ad = await Ad.findById(id);
      if (ad) {
        await ad.remove();
        return ad;
      }
      throw new Error("Ad not found");
    },
  },
  Ad: {
    user: async (ad: IAd): Promise<IUser> => {
      const user = await User.findById(ad.user);
      if (user) {
        return user;
      }
      throw new Error("User not found");
    },
    components: async (ad: IAd): Promise<IComponent[]> => {
      const components = await Component.find({ ad: ad.id });
      if (components) {
        return components;
      }
      throw new Error("Components not found");
    },
  },
};
