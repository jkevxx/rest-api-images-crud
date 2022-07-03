import mongoose from "mongoose";
import "dotenv/config";

// console.log(process.env.MONGO_URL)

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
}
