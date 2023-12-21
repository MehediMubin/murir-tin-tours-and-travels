import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
   name: {
      type: String,
      required: [true, "Please tell us your name!"],
   },
   age: {
      type: Number,
      required: [true, "Please tell us your age!"],
   },
   email: {
      type: String,
      required: [true, "Please provide your email!"],
      unique: true,
      lowercase: true,
   },
   photo: {
      type: String,
   },
   role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
   },
   userStatus: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
   },
});

export const UserModel = model<IUser>("User", userSchema);
