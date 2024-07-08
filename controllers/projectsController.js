import projectsModel from "../models/Projects.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getProjects = async (req, res) => {
  try {
    const PrData = await projectsModel.find();
    res.status(201).json(PrData);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const setProjects = async (req, res) => {
  try {
    const { title, websiteLink, githubLink, imageUrl, techs, info } = req.body;
    let cloudinaryUrl=imageUrl;

    if (imageUrl.includes('drive.google.com')) {
      const fileIdMatch = imageUrl.match(/[-\w]{25,}/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[0];
        cloudinaryUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }

    if (!cloudinaryUrl.includes('cloudinary.com')) {
      const cloudinaryResponse = await cloudinary.uploader.upload(cloudinaryUrl);
      cloudinaryUrl = cloudinaryResponse.secure_url;
    }
    
    const newPrData = new projectsModel({
      title,
      websiteLink,
      githubLink,
      imageUrl:cloudinaryUrl,
      techs,
      info,
    });
    await newPrData.save();
    res.status(200).json(newPrData);
  } catch (error) {
    res.status(500).send("Invalid Data");
  }
};
