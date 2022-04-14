import type { Resolvers } from "@generated/types";
import { IImage, Image, User } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllImages: async (): Promise<IImage[]> => {
      return await Image.find();
    },
    //@ts-ignore
    getAllImagesByUser: async (
      _: any,
      { user }: { user: String }
    ): Promise<IImage[]> => {
      const images = await Image.find({ user });
      if (images) {
        return images;
      }
      throw new Error("Images not found");
    },
  },
  Mutation: {
    //@ts-ignore
    createImage: async (_, { input }): Promise<IImage> => {
      const image = new Image(input);
      return await image.save();
    },
    //@ts-ignore
    deleteImage: async (_, { id }): Promise<IImage> => {
      const image = await Image.findById(id);
      if (image) {
        await image.remove();
        return image;
      }
      throw new Error("Image not found");
    },
  },
};
