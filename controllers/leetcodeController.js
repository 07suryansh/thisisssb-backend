import leetcodeModel from "../models/Leetcode.js";

export const getLeetcode = async (req, res) => {
  try {
    const ltData = await leetcodeModel.find();
    res.status(201).json(ltData);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const setLeetcode = async (req, res) => {
  try {
    const newLtData = new leetcodeModel(req.body);
    const ltData = await leetcodeModel.findOne();
    if (!ltData) {
      await newLtData.save();
      return res.status(201).json(newLtData);
    }
    if (newLtData.maxRating > ltData.maxRating) {
      ltData.maxRating = newLtData.maxRating;
    }
    ltData.currentRating = newLtData.currentRating;
    await ltData.save();
    res.status(200).json(ltData);
  } catch (error) {
    res.status(500).send("Invalid Data");
  }
};
