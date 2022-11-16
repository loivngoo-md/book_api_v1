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
exports.SessionController = void 0;
const core_1 = require("../core");
const services_1 = require("../services");
const configs_1 = require("../../configs");
const enums_1 = require("../enums");
class SessionController {
    constructor() {
        this._business = new services_1.SessionService();
        this.getCurrentLoginInformations = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = {
                    application: {
                        version: configs_1.APP_VERSION,
                        releaseDate: new Date().toString(),
                        features: {},
                    },
                    user: null,
                    tenant: null,
                };
                let response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                if (!req.headers.authorization) {
                    return res.status(enums_1.HttpStatusCode.OK).json(response);
                }
                const token = req.headers.authorization.split(" ")[1];
                response.result.user = yield this._business.getCurrentLoginInformations(token);
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.SessionController = SessionController;
Object.seal(SessionController);
//# sourceMappingURL=SessionController.js.map