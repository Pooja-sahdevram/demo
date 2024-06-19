const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;
app.get("/", (req, res) => {
  res.send("hello i am home page");
});
app.get("/ret", (req, res) => {
  res.send(`<h1>Sufi</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`example app listen in the port number ${port}`);
});

console.log("Pooja");
