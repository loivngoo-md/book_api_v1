"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeKeepingRouter = void 0;
const core_1 = require("../../app/core");
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class TimeKeepingRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.TimekeepingController();
        this.init();
    }
    init() {
        this._router.get("/GetMyDetails", core_1.authenticator.authenticate, this.controller.getMyDetails);
    }
}
exports.TimeKeepingRouter = TimeKeepingRouter;
Object.seal(TimeKeepingRouter);
//# sourceMappingURL=Timekeeping.js.map