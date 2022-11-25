"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTool = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("../../configs");
class JWT {
    constructor() {
        this.OPTIONS = configs_1.TOKEN.OPTIONS;
        this.SECRET_KEY = configs_1.TOKEN.SECRET_KEY;
    }
    createToken(payload) {
        return `${jsonwebtoken_1.default.sign(payload, this.SECRET_KEY, this.OPTIONS)}`;
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.SECRET_KEY);
    }
}
Object.seal(JWT);
exports.jwtTool = new JWT();
//# sourceMappingURL=jwt-tool.js.map