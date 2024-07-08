import mongoose from "mongoose";

const codeforcesSchema=new mongoose.Schema({
    currentRating:Number,
    maxRating:Number
});

const codeforcesModel=mongoose.model('Codeforces',codeforcesSchema);

export default codeforcesModel;