import codeforcesModel from "../models/Codeforces.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getCodeforces = async (req, res) => {
  try {
    const cfData = await codeforcesModel.findOne();
    const response = await axios.get(process.env.CODEFORCES_API);
    const data = response.data.result[0];
    if (!cfData) {
      const newCfData = new codeforcesModel({
        maxRating: data.maxRating,
        currentRating: data.rating,
      });
      await newCfData.save();
      return res.status(200).json(newCfData);
    }
    if (data.maxRating > cfData.maxRating) {
      cfData.maxRating = data.maxRating;
    }
    cfData.currentRating = data.rating;
    await cfData.save();
    res.status(200).json(cfData);
  } catch (error) {
    console.error("Error in getCodeforces:", error.message);
    res.status(500).send("Server error");
  }
};
