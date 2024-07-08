import leetcodeModel from "../models/Leetcode.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getLeetcode = async (req, res) => {
  try {
    const ltData = await leetcodeModel.find();
    const response=await axios.get(process.env.LEETCODE_API);
    const data=response.rating;
    if(!ltData){
      const ltData=new leetcodeModel({
        maxRating:data,
        currentRating:data,
      });
      await ltData.save();
    }
    if(data>ltData.maxRating){
      ltData.maxRating=data;
    }
    ltData.currentRating=data;
    await ltData.save();
    res.status(200).json(ltData);
  } catch (error) {
    console.error("Error in getLeetcode:", error.message);
    res.status(500).send("Server error");
  }
};
