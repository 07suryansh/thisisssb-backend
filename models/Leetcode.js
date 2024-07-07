import mongoose from "mongoose";

const leetcodeSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

const leetcodeModel=mongoose.model('Leetcode',leetcodeSchema);

export default leetcodeModel;