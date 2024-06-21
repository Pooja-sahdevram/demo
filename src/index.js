import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connection from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connection()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port number " + `${process.env.PORT}`);
    });
    console.log("Connection is successful");
  })
  .catch((err) => {
    app.on("error", (err) => {
      console.log("Error in the connection server " + `${err}`);
    });
    console.log("MongoDB connection failed " + err);
  });

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     app.on((error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`server is runing on the port number ${process.env.PORT}`);
//     });
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
