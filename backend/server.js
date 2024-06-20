// const express=require('express')
import express from "express";
const app = express();

let jokes = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
  },
  {
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts.",
  },
  {
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta!",
  },
  {
    setup: "Why did the math book look sad?",
    punchline: "Because it had too many problems.",
  },
];

app.get("/", (req, res) => {
  res.send("hello");
});
//get a list of five jokes
app.get("/api/fivejoks", (req, res) => {
  res.send(jokes);
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(process.env.PORT || 3001, () => {
  console.log(`server is running `);
});
