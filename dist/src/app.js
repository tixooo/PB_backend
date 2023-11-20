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
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const paste_model_1 = __importDefault(require("../models/paste_model"));
const body_parser_1 = __importDefault(require("body-parser"));
const xss_1 = __importDefault(require("xss"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
    next();
});
app.post('/pastes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pasteContent = (0, xss_1.default)(req.body.content);
    const paste = new paste_model_1.default({
        content: pasteContent,
    });
    try {
        yield paste.save();
        res.status(201).json(paste);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
app.delete('/pastes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paste = yield paste_model_1.default.findById(req.params.id);
        if (!paste) {
            return res.status(404).json({ message: 'Paste not found' });
        }
        yield paste.deleteOne();
        res.json({ message: 'Paste deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pastes = yield paste_model_1.default.find();
    res.json(pastes);
}));
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
//# sourceMappingURL=app.js.map