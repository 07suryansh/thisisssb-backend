import express from 'express';
import mongoose from "mongoose";
import dbconnect from './config/db.js';

import dotenv from "dotenv";

dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


dbconnect();

app.get('/',(req,res)=>{
    console.log('hi');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})