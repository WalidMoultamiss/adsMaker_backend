import { Schema, model } from "mongoose";

export interface IAd{
  id: String;
  title: String;
  user: String;
  components: Array<String>;
  bgImage: String;
  bgColor: String;
  width: number;
  height: number;
  viewCount: number;
  status: String;
  isPremium: boolean;
  createdAt: Date;
}



const schema = new Schema<IAd>(
  {
    title: { type: String, required: true },
    user: { type: String, required: true },
    components: [{ type: Array, required: true }],
    bgImage: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    bgColor: { type: String, required: false},
    viewCount: { type: Number, required: true },
    status: { type: String, required: true },
    isPremium: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const Ad = model<IAd>("Ad", schema);
