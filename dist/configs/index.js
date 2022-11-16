"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_VERSION = exports.TOKEN = exports.NODE_ENV = exports.MONGO_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: ".env",
});
const NODE_ENV = process.env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
const PORT = process.env.PORT;
exports.PORT = PORT;
const OPTIONS = {
    expiresIn: +process.env.EXPIRESIN_TOKEN,
};
const MONGO_URI = process.env.MONGO_URI;
exports.MONGO_URI = MONGO_URI;
const TOKEN = {
    SECRET_KEY: process.env.SECRET_KEY,
    OPTIONS,
};
exports.TOKEN = TOKEN;
const APP_VERSION = process.env.APP_VERSION;
exports.APP_VERSION = APP_VERSION;
//# sourceMappingURL=index.js.map