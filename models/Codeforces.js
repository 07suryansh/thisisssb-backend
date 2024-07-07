import mongoose from "mongoose";

const codeforcesSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

export default codeforcesSchema;