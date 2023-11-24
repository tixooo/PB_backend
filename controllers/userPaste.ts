import Paste from "../models/paste_model";
import {Request, Response, NextFunction} from 'express';
// const app = express();

export const getAllPastes = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const pastes = await Paste.find({})
        res.status(200).json(pastes)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// app.get('/pastes', async (req, res) => {
//     const pastes = await Paste.find()
//     res.json(pastes)
// });
//
// app.get('/pastes/:id', async (req, res) => {
//     try {
//         const paste = await Paste.findById(req.params.id);
//         if (!paste) {
//             return res.status(404).json({ message: 'Paste not found' });
//         }
//         res.json(paste);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

export const userPaste = async (req: Request, res: Response, next: NextFunction) => {
    const paste = new Paste({
        content: req.body.content,
    });
    try {
        await paste.save();
        res.status(201).json(paste);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// app.delete('/pastes/:id', async (req, res) => {
//     try {
//         const paste = await Paste.findById(req.params.id);
//         if (!paste) {
//             return res.status(404).json({ message: 'Paste not found' });
//         }
//         await paste.deleteOne();
//         res.json({ message: 'Paste deleted' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })