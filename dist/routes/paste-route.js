"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userPaste_1 = require("../controllers/userPaste");
const router = express_1.default.Router();
router.get('/', userPaste_1.getAllPastes);
router.get('/:id', userPaste_1.getPasteById);
router.post('/', userPaste_1.userPaste);
router.delete('/:id', userPaste_1.deletePostByID);
exports.default = router;
//# sourceMappingURL=paste-route.js.map