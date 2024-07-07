import mongoose from "mongoose";

const codechefSchema=new mongoose.Schema({
    currentRating:String,
    maxRating:String
});

export default codechefSchema;