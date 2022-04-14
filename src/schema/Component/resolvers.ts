import type { Resolvers } from "@generated/types";
import { IComponent, Component, User , Ad , IAd } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllComponents: async (): Promise<IComponent[]> => {
      return await Component.find();
    },
    //@ts-ignore
    getAllComponentsByAd: async (
      _: any,
      { adId }: { adId: String }
    ): Promise<IComponent[]> => {
      const components = await Component.find({ adId });
      if (components) {
        return components;
      }
      throw new Error("Components not found");
    },
  },
  Mutation: {
    //@ts-ignore
    createComponent: async (_, { input }): Promise<IComponent> => {
      const component = new Component(input);
      return await component.save();
    },

    //@ts-ignore
    deleteComponent: async (_, { id }): Promise<IComponent> => {
      const component = await Component.findById(id);
      if (component) {
        await component.remove();
        return component;
      }
      throw new Error("Component not found");
    },
  },
  Component: {
    ad: async (component: IComponent): Promise<IAd> => {
      const ad = await Ad.findById(component.ad);
      if (ad) {
        return ad;
      }
      throw new Error("Ad not found");
    },
  }
};