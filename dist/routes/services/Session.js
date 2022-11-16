"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class SessionRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.SessionController();
        this.init();
    }
    init() {
        this._router.get("/GetCurrentLoginInformations", this.controller.getCurrentLoginInformations);
    }
}
exports.SessionRouter = SessionRouter;
Object.seal(SessionRouter);
//# sourceMappingURL=Session.js.map