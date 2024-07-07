import express from 'express';
import {getCodeforces,setCodeforces} from '../controllers/codeforcesController.js';

const router=express.Router();

router.get('/',getCodeforces);
router.post('/',setCodeforces);

export default router;