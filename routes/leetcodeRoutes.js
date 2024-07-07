import express from 'express';
import {getLeetcode,setLeetcode} from '../controllers/leetcodeController.js';

const router=express.Router();

router.get('/',getLeetcode);
router.post('/',setLeetcode);

export default router;