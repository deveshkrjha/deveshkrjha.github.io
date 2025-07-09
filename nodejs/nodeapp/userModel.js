import mongoose from "mongoose";
const userSchema=moongoose.Schema(
     {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export{userSchema}