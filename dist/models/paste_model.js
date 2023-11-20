"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const pasteSchema = new Schema({
    content: { type: String, required: true },
});
const Paste = mongoose_1.default.model('Paste', pasteSchema);
exports.default = Paste;
//# sourceMappingURL=paste_model.js.map