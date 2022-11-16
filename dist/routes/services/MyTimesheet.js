"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTimesheetRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
const core_1 = require("../../app/core");
class MyTimesheetRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.MyTimesheetController();
        this.init();
    }
    init() {
        this._router.post("/SaveList", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.saveList);
        this._router.delete("/Delete", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.delete);
        this._router.post("/SaveAndReset", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.save);
        this._router.put("/Update", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.save);
        this._router.post("/SubmitToPending", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.submitToPending);
        this._router.post("/Create", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.save);
        this._router.get("/GetAllTimesheetOfUser", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.getAllTimesheetOfUser);
        this._router.get("/Get", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.get);
    }
}
exports.MyTimesheetRouter = MyTimesheetRouter;
Object.seal(MyTimesheetRouter);
//# sourceMappingURL=MyTimesheet.js.map