import { Schema, model } from "mongoose";

export interface IQrCodeComp {
  id: string;
  url: string;
  image: string;
  createdAt: Date;
}



const schema = new Schema<IQrCodeComp>(
  {
    url: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const QrCodeComp = model<IQrCodeComp>("QrCodeComp", schema);
