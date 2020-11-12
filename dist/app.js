"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
// settings
app.set('port', process.env.PORT);
// middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
//routes
app.use('/api/auth', auth_1.default);
app.use('/', async (req, res, next) => {
    res.status(200).json({ message: 'Server is online and running' });
});
exports.default = app;
//# sourceMappingURL=app.js.map