import { Schema, model } from "mongoose";

const logSchema = new Schema(
  {
    from: { type: String },
    to: { type: [String] },
    subject: { type: String },
    text: { type: String },
    html: { type: String },
  },
  {
    timestamps: true,
  }
);

const Log = model("Log", logSchema);

export { Log };
