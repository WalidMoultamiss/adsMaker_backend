import { Schema, model } from "mongoose";

export interface IImgComp {
  id: String;
  image: String;
  width: number;
  height: number;
  createdAt: Date;
}



const schema = new Schema<IImgComp>(
  {
    image: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const ImgComp = model<IImgComp>("ImgComp", schema);
