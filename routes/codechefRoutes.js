import express from 'express';
import {getCodechef} from '../controllers/codechefController.js';

const router=express.Router();

router.get('/',getCodechef);

export default router;