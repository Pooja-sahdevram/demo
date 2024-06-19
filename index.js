const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;
const data = {
  student: {
    id: "S12345",
    firstName: "John",
    lastName: "Doe",
    age: 20,
    gender: "Male",
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "Anystate",
      postalCode: "12345",
      country: "USA",
    },
    courses: [
      {
        courseId: "CSE101",
        courseName: "Introduction to Computer Science",
        grade: "A",
      },
      {
        courseId: "MAT201",
        courseName: "Calculus II",
        grade: "B+",
      },
      {
        courseId: "PHY301",
        courseName: "Physics III",
        grade: "A-",
      },
    ],
    enrollmentYear: 2022,
    graduationYear: 2026,
    gpa: 3.8,
    extraCurricularActivities: [
      {
        activityId: "ACT101",
        activityName: "Soccer Team",
        position: "Forward",
      },
      {
        activityId: "ACT102",
        activityName: "Student Government",
        position: "Secretary",
      },
    ],
  },
};

app.get("/github", (req, res) => {
  res.json(data);
});
app.get("/", (req, res) => {
  res.send("hello i am honnnnme page");
});
app.get("/ret", (req, res) => {
  res.send(`<h1>Sufi</h1>`);
});
app.listen(process.env.PORT, () => {
  console.log(`example app listen in the port number ${port}`);
});

console.log("Pooja");
