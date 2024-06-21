import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connection from "./db/index.js";
dotenv.config();
const app = express();
connection()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is runnig is port number " + `${process.env.PORT}`);
    });
    console.log("connection is sucessfull");
  })
  .catch((err) => {
    app.on("error", (err) => {
      console.log("Error in the connectiong server " + `${err}`);
    });
    console.log("mongodbconnection is failed " + err);
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
