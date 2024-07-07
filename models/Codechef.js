import mongoose from "mongoose";

const codechefSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

const codechefModel=mongoose.model('Codechef',codechefSchema);

export default codechefModel;