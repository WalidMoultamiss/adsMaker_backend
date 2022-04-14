import { Schema, model } from "mongoose";

export interface ITextComp {
  id: string;
  content: string;
  component: string;
  createdAt: Date;
}



const schema = new Schema<ITextComp>(
  {
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const TextComp = model<ITextComp>("TextComp", schema);
