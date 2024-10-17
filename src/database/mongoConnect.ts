import mongoose from "mongoose";
import "dotenv/config";

async function mongoConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB not connected", (error as Error).message);
    console.error("mongo erro: " + error);
  }
}

export { mongoConnect };
