"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config;
config = {
    secret: process.env.JWT_SECRET,
    port: 5000,
    databaseURL: process.env.DATABASE_URI,
};
exports.default = { ...config };
//# sourceMappingURL=index.js.map