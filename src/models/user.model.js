import mongoose from "mongoose";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
const userSChema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      require: true,
      trim: true,
      index: true,
    },
    avtart: {
      type: String, //cloudnary service
      require: true,
    },
    coverimage: {
      type: String, //cloudnary service
    },
    watchhistory: [(type = mongoose.Schema.Types.ObjectId), (ref = "video")],
    password: {
      type: String,
      require: [true, "password is require baby"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSChema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bycrpt.hash(this.password, 10);
  next();
});
userSChema.methods.ispasswordsCorrect = async function (password) {
  return await bycrpt.compare(password, this.password);
};
userSChema.methods.generateAccesstoken = async function () {
  return await jwt.sign(
    {
      _id: this.ObjectId,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSChema.methods.RefreshToken = async function () {
  return await jwt.sign(
    {
      _id: this.ObjectId,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const usermodel = mongoose.model("usermodel", userSChema);
