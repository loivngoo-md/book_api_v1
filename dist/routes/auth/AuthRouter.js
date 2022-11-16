"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class AuthRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.AuthController();
        this.init();
    }
    init() {
        this._router.post("/authenticate", this.controller.authenticate);
    }
}
exports.AuthRouter = AuthRouter;
Object.seal(AuthRouter);
//# sourceMappingURL=AuthRouter.js.map