import mongoose from "mongoose";

const projectsSchema=new mongoose.Schema({
    title:String,
    websiteLink:String,
    githubLink:String,
    imgUrl:String,
    techs:[String],
    info:String
});

const projectsModel=mongoose.model('Projects',projectsSchema);

export default projectsModel;