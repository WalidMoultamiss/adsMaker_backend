import { Schema, model } from "mongoose";

export interface IComponent{
  id: String;
  CompType: String;
  CompId: String;
  x: number;
  y: number;
  zoom: number;
  tw:String;
  ad:String;
  createdAt: Date;
}



const schema = new Schema<IComponent>(
  {
    CompType: { type: String, required: true },
    CompId: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    zoom: { type: Number, required: true },
    tw: { type: String, required: true },
    ad: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export const Component = model<IComponent>("Component", schema);
