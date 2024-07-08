import codechefModel from "../models/Codechef.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getCodechef = async (req, res) => {
  try {
    const ccData = await codechefModel.find();
    const response=await axios.get(process.env.CODECHEF_API);
    const data=response.rating;
    if(!ccData){
      const newCcData=new codechefModel({
        maxRating: data,
        currentRating: data,
      })
      await newCcData.save();
      return res.status(200).json(newCcData);
    }
    if(data>ccData.maxRating){
      ccData.maxRating=data;
    }
    ccData.currentRating=data;
    await ccData.save();
    res.status(200).json(ccData);
  } catch (error) {
    console.error("Error in getCodechef:", error.message);
    res.status(500).send("Server error");
  }
};

