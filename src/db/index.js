import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
async function connection() {
  try {
    const connectionresponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("mongodb is connected baby");
  } catch (error) {
    console.log("error hai bhai");
    process.exit(1);
  }
}
export default connection;
