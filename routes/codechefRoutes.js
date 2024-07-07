import express from 'express';
import {getCodechef,setCodechef} from '../controllers/codechefController.js';

const router=express.Router();

router.get('/',getCodechef);
router.post('/',setCodechef);

export default router;