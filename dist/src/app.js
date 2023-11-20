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
const app = (0, express_1.default)();
(0, db_1.default)();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pastes = yield paste_model_1.default.find();
    res.json(pastes);
    console.log(res.json(pastes));
}));
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
//# sourceMappingURL=app.js.map