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
exports.AuthController = void 0;
const services_1 = require("../services");
const enums_1 = require("../enums");
class AuthController {
    constructor() {
        this._business = new services_1.AuthService();
        this.authenticate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield this._business.authenticate(request);
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.AuthController = AuthController;
Object.seal(AuthController);
//# sourceMappingURL=AuthController.js.map