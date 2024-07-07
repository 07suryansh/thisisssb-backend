import express from 'express';
import {getProjects,setProjects} from '../controllers/projectsController.js';

const router=express.Router();

router.get('/',getProjects);
router.post('/',setProjects);

export default router;