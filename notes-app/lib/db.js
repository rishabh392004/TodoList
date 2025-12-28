import mongoose from "mongoose";

let isConnected = false;

if (!process.env.MONGODB_URL) {
  throw new Error("MONGODB_URL is missing");
}

async function dbConnect() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("Failed to connect MongoDB ❌", error);
    throw error;
  }
}

export default dbConnect;
