import express from 'express';
import {getAllPastes, userPaste} from "../controllers/userPaste";

const router = express.Router()

router.get('/', getAllPastes)
router.post('/', userPaste)

export default router