import mongoose from "mongoose";

const projectsSchema=new mongoose.Schema({
    title:String,
    websiteLink:String,
    githubLink:String,
    imgUrl:String,
    techs:[String],
    info:String
});

export default projectsSchema;