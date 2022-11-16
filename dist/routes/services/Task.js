"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
const core_1 = require("../../app/core");
class TaskRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this._controller = new controllers_1.TaskController();
        this.init();
    }
    init() {
        this._router.post("/save", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.save);
        this._router.delete("/delete", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.delete);
        this._router.get("/getAll", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.getAll);
        this._router.delete("/archive", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.archive);
        this._router.post("/deArchive", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.deArchive);
    }
}
exports.TaskRouter = TaskRouter;
Object.seal(TaskRouter);
//# sourceMappingURL=Task.js.map