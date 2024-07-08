import leetcodeModel from "../models/Leetcode.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getLeetcode = async (req, res) => {
  try {
    const ltData = await leetcodeModel.findOne();
    const response=await axios.get(process.env.LEETCODE_API);
    const data=response.data.rating;
    if(!ltData){
      const newLtData=new leetcodeModel({
        maxRating:data,
        currentRating:data,
      });
      await newLtData.save();
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
