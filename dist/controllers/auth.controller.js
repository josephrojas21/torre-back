"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.signup = async (req, res) => {
    console.log(req.body);
    const user = new user_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const verifyUser = await user_1.default.findOne({ email: req.body.email });
    if (verifyUser)
        return res.status(400).json('Email  is already created');
    const savedUser = await user.save();
    const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.SECRET || 'tokenTest');
    res.json({ data: savedUser, tokenT: token });
};
exports.signin = async (req, res) => {
    const user = await user_1.default.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).json('Email or password is wrong');
    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword)
        res.status(400).json('Invalid password');
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET || 'tokenTest', {
        expiresIn: 60 * 60
    });
    res.json({ data: user, tokenT: token });
};
exports.profile = async (req, res) => {
    const user = await user_1.default.findById(req.userId, { password: 0 });
    if (!user)
        return res.status(400).json('No user found');
    res.json(user);
};
//# sourceMappingURL=auth.controller.js.map