import mongoose from "mongoose";

const codechefSchema=new mongoose.Schema({
    currentRating:Number,
    maxRating:Number
});

const codechefModel=mongoose.model('Codechef',codechefSchema);

export default codechefModel;