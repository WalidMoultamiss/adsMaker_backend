import { Schema, model } from "mongoose";

export interface IImage {
  id: String;
  src: String;
  alt: String;
  user: String;
  createdAt: Date;
}

const schema = new Schema<IImage>({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Image = model<IImage>("Image", schema);
