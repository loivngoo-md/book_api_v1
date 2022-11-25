"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
const core_1 = require("../../app/core");
class RoleRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this._controller = new controllers_1.RoleController();
        this.init();
    }
    init() {
        this._router.post("/create", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.create);
        this._router.delete("/delete", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.delete);
        this._router.get("/getAll", core_1.authenticator.authenticate, core_1.Authorization.confirm("ADMIN"), this._controller.getAll);
        this._router.get("/getRoleForEdit");
    }
}
exports.RoleRouter = RoleRouter;
Object.seal(RoleRouter);
//# sourceMappingURL=Role.js.map