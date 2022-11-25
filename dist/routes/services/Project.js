"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRouter = void 0;
const core_1 = require("../../app/core");
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class ProjectRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.ProjectController();
        this.init();
    }
    init() {
        this._router.get("/GetAll", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.getAll);
        this._router.post("/Save", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.save);
        this._router.post("/InActive", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.inActive);
        this._router.post("/Active", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.active);
        this._router.delete("/Delete", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.delete);
        this._router.get("/Get", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this.controller.get);
        this._router.get("/GetProjectsIncludingTasks", core_1.authenticator.authenticate, core_1.Authorization.confirm("BASICUSER"), this.controller.getProjectsIncludingTasks);
        this._router.get("/GetProjectFilterDto");
        this._router.get("/GetProjectPM");
        this._router.get("/GetProjectUser");
        this._router.get("/GetFilter");
    }
}
exports.ProjectRouter = ProjectRouter;
//# sourceMappingURL=Project.js.map