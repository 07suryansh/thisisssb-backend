import codechefModel from "../models/Codechef.js";

export const getCodechef = async (req, res) => {
  try {
    const cfData = await codechefModel.find();
    res.status(201).json(cfData);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const setCodechef = async (req, res) => {
  try {
    const newCcData = new codechefModel(req.body);
    const ccData = await codechefModel.findOne();
    if (!ccData) {
      await newCcData.save();
      return res.status(201).json(newCcData);
    }
    if (newCcData.maxRating > ccData.maxRating) {
      ccData.maxRating = newCcData.maxRating;
    }
    ccData.currentRating = newCcData.currentRating;
    await ccData.save();
    res.status(200).json(ccData);
  } catch (error) {
    res.status(500).send("Invalid Data");
  }
};
