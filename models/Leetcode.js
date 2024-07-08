import mongoose from "mongoose";

const leetcodeSchema=new mongoose.Schema({
    currentRating:Number,
    maxRating:Number
});

const leetcodeModel=mongoose.model('Leetcode',leetcodeSchema);

export default leetcodeModel;