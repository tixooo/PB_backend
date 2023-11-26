"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const body_parser_1 = __importDefault(require("body-parser"));
const paste_route_1 = __importDefault(require("../routes/paste-route"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
    next();
});
app.use('/', paste_route_1.default);
app.use('/pastes', paste_route_1.default);
app.use('/pastes', paste_route_1.default);
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
//# sourceMappingURL=app.js.map