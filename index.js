import express from 'express';
import mongoose from "mongoose";
import dbconnect from './config/db.js';
import codechefRoutes from './routes/codechefRoutes.js';
import codeforcesRoutes from './routes/codeforcesRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import leetcodeRoutes from './routes/leetcodeRoutes.js';
import axios from 'axios';
import dotenv from "dotenv";
import cors from 'cors';

app.use(cors());

dotenv.config();
dbconnect();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/codeforces',codeforcesRoutes);
app.use('/codechef',codechefRoutes);
app.use('/leetcode',leetcodeRoutes);
app.use('/projects',projectsRoutes);

app.get('/', async (req, res) => {
    res.status(200).json("Welcome to api");
  });

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})