import express from 'express';
import {getAllPastest, userPaste} from "../controllers/userPaste";

const router = express.Router()

router.get('/', getAllPastest)
router.post('/', userPaste)

export default router