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
exports.AuthService = void 0;
const core_1 = require("../core");
const base_1 = require("./base");
const enums_1 = require("../enums");
const configs_1 = require("../../configs");
const tools_1 = require("../tools");
const repositories_1 = require("../../dataAccess/repositories");
class AuthService extends base_1.BaseService {
    constructor() {
        super(new repositories_1.UserRepository());
        this.authenticate = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { userNameOrEmailAddress, password } = request;
                const user = yield this._repos.findByEmail(userNameOrEmailAddress);
                console.log(user);
                if (!user) {
                    throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, "username is not already exist, please register");
                }
                const isValidPassword = yield tools_1.PasswordManager.compare(password, user.password);
                if (!isValidPassword) {
                    throw new core_1.ApiError(enums_1.HttpStatusCode.BAD_REQUEST, "Password is not match, try again.");
                }
                const userId = user.id;
                const payload = {
                    userId,
                };
                const options = configs_1.TOKEN.OPTIONS;
                const accessToken = yield tools_1.jwtTool.createToken(payload);
                const response = {
                    accessToken,
                    encryptedAccessToken: "string",
                    expireInSeconds: options.expiresIn,
                    userId,
                };
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AuthService = AuthService;
Object.seal(AuthService);
//# sourceMappingURL=AuthService.js.map