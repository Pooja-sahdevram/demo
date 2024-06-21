import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videosschema = new mongoose.Schema(
  {
    videoFIle: {
      type: String, //cloudnary
      require: true,
    },
    thumbnail: {
      type: String, //cloudnary
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number, //it get from cloudenary
      require: true,
    },
    views: {
      type: Number,
      default: 0,
      require: true,
    },
    ispublic: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodel",
      require: true,
    },
  },
  { timestamps: true }
);
videosschema.plugin(mongooseAggregatePaginate);
export const video = mongoose.model("video", videosschema);
