"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetRouter = void 0;
const TimesheetController_1 = require("../../app/controllers/TimesheetController");
const base_1 = require("../base");
const core_1 = require("../../app/core");
class TimesheetRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new TimesheetController_1.TimesheetController();
        this.init();
    }
    init() {
        this._router.get("/GetAll", core_1.authenticator.authenticate, core_1.Authorization.confirm("PROJECTMANAGER"), this.controller.retrieve);
        this._router.post("/ApproveTimesheets", core_1.authenticator.authenticate, core_1.Authorization.confirm("PROJECTMANAGER"), this.controller.approve);
        this._router.post("/RejectTimesheets", core_1.authenticator.authenticate, core_1.Authorization.confirm("PROJECTMANAGER"), this.controller.reject);
    }
}
exports.TimesheetRouter = TimesheetRouter;
Object.seal(TimesheetRouter);
//# sourceMappingURL=Timesheet.js.map