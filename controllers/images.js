import multer from "multer";
import * as cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloud = cloudinary.v2;

cloud.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: "uploads",
  },
});

export const upload = multer({ storage: storage });
