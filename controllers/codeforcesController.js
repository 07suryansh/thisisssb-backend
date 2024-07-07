import codeforcesModel from "../models/Codeforces.js";

export const getCodeforces = async (req, res) => {
  try {
    const cfData = await codeforcesModel.find();
    res.status(201).json(cfData);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const setCodeforces = async (req, res) => {
  try {
    const newCfData = new codeforcesModel(req.body);
    const cfData = await codeforcesModel.findOne();
    if (!cfData) {
      await newCfData.save();
      return res.status(201).json(newCfData);
    }
    if (newCfData.maxRating > cfData.maxRating) {
      cfData.maxRating = newCfData.maxRating;
    }
    cfData.currentRating = newCfData.currentRating;
    await cfData.save();
    res.status(201).json(cfData);
  } catch (error) {
    res.status(500).send("Invalid Data");
  }
};
