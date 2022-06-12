import { Schema, model } from "mongoose";

export interface IAd{
  id: string;
  title: string;
  user: string;
  components: Array<string>;
  bgImage: string;
  bgColor: string;
  json: string;
  adImage: string;
  width: number;
  height: number;
  viewCount: number;
  status: string;
  isPremium: boolean;
  createdAt: Date;
}



const schema = new Schema<IAd>(
  {
    title: { type: String, required: true },
    user: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    adImage: { type: String, required: true},
    json: { type: String, required: true},
    viewCount: { type: Number, required: true },
    status: { type: String, required: false },
    isPremium: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const Ad = model<IAd>("Ad", schema);
