import mongoose from "mongoose";

const codeforcesSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

const codeforcesModel=mongoose.model('Codeforces',codeforcesSchema);

export default codeforcesModel;