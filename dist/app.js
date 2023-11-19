"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://tixo:y9diHvw3GruGB4Ww@pbp.wyezxh2.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
//# sourceMappingURL=app.js.map