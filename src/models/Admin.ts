import { Schema, model } from "mongoose";

export interface IAdmin {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  token: String;
}

const schema = new Schema<IAdmin>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: false },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const Admin = model<IAdmin>("Admin", schema);
