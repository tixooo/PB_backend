import express from 'express';
import {getAllPastes, userPaste, getPasteById, deletePostByID} from "../controllers/userPaste";

const router = express.Router()

router.get('/', getAllPastes)
router.get('/:id', getPasteById)
router.post('/', userPaste)
router.delete('/:id', deletePostByID)

export default router