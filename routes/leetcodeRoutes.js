import express from 'express';
import {getLeetcode} from '../controllers/leetcodeController.js';

const router=express.Router();

router.get('/',getLeetcode);

export default router;