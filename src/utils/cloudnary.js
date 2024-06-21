import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRATE,
});

const uploadoncloudnary = async (loacalFilePathg) => {
  try {
    if (!loacalFilePathg) {
      console.log("localfilepath not found");
      return null;
    }
    //cloudinary uploader
    const response = await cloudinary.v2.uploader.upload(loacalFilePathg, {
      resource_type: "auto",
    });
    console.log("file is uploaded in cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(loacalFilePathg); //remove the locally saved temprory file as the upload the operation
    return null;
  }
};
export { uploadoncloudnary };
