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
exports.ApiRouter = void 0;
const AuthRouter_1 = require("./auth/AuthRouter");
const services_1 = require("./services");
const base_1 = require("./base");
const enums_1 = require("../app/enums");
class ApiRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.init();
    }
    init() {
        this._router.use("/services/app", new services_1.ServiceRouter()._router);
        this._router.use("/TokenAuth", new AuthRouter_1.AuthRouter()._router);
        this._router.get("/mode/view", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(enums_1.HttpStatusCode.OK).json({
                    status: 200,
                    mode: 1,
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this._router.get("/mode/change", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const mode = req.body;
                return res.status(enums_1.HttpStatusCode.OK).json({
                    status: 200,
                    mode: 1,
                });
            }
            catch (error) {
                next(error);
            }
        })),
            this._router.get("/comments/views", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const mode = req.body;
                    return res.status(enums_1.HttpStatusCode.OK).json({
                        comments: 'https://google.com'
                    });
                }
                catch (error) {
                    next(error);
                }
            }));
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=ApiRouter.js.map