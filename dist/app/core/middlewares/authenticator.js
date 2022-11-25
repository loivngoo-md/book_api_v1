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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = void 0;
const tools_1 = require("../../tools");
const repositories_1 = require("../../../dataAccess/repositories");
const enums_1 = require("../../enums");
const exceptions_1 = require("../exceptions");
class Authenticator {
    constructor() {
        this.authenticate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.headers.authorization) {
                    throw new exceptions_1.ApiError(enums_1.HttpStatusCode.UNAUTHORIZED, `Required token before you can access`);
                }
                const token = req.headers.authorization.split(" ")[1];
                const decoded = yield tools_1.jwtTool.verifyToken(token);
                if (!decoded) {
                    throw new exceptions_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, `Invalid Token`);
                }
                //@ts-ignore
                const user = yield this._repos.findById(decoded.userId);
                req.app.locals.currentUser = user;
                next();
            }
            catch (error) {
                next(error);
            }
        });
        this._repos = new repositories_1.UserRepository();
    }
}
exports.authenticator = new Authenticator();
//# sourceMappingURL=authenticator.js.map