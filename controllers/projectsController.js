import projectsModel from "../models/Projects.js";

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
    const newPrData = new projectsModel(req.body);
    await newPrData.save();
    res.status(201).json(newPrData);
  } catch (error) {
    res.status(500).send("Invalid Data");
  }
};
