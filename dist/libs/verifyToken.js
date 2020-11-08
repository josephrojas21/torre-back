"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    const token = req.header('authToken');
    if (!token)
        return res.status(401).json('Acces denied');
    const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET || 'tokenTest');
    req.userId = payload._id;
    next();
};
//# sourceMappingURL=verifyToken.js.map