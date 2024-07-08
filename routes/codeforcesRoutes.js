import express from 'express';
import {getCodeforces} from '../controllers/codeforcesController.js';

const router=express.Router();

router.get('/',getCodeforces);

export default router;