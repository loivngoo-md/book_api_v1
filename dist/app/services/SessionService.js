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
exports.SessionService = void 0;
const tools_1 = require("../tools");
const base_1 = require("./base");
const repositories_1 = require("../../dataAccess/repositories");
class SessionService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.UserRepository());
        this.getCurrentLoginInformations = (token) => __awaiter(this, void 0, void 0, function* () {
            const decoded = tools_1.jwtTool.verifyToken(token);
            //@ts-ignore
            const currentUser = yield this._repos.findById(decoded.userId);
            return currentUser;
        });
    }
}
exports.SessionService = SessionService;
Object.seal(SessionService);
//# sourceMappingURL=SessionService.js.map