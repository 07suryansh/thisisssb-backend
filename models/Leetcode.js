import mongoose from "mongoose";

const leetcodeSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

export default leetcodeSchema;