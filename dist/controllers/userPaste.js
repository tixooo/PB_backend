"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPaste = exports.getAllPosts = void 0;
const paste_model_1 = __importDefault(require("../models/paste_model"));
// const app = express();
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pastes = yield paste_model_1.default.find({});
        res.status(200).json(pastes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllPosts = getAllPosts;
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
const userPaste = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const paste = new paste_model_1.default({
        content: req.body.content,
    });
    try {
        yield paste.save();
        res.status(201).json(paste);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.userPaste = userPaste;
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
//# sourceMappingURL=userPaste.js.map