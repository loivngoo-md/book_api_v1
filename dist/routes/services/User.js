"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const UserController_1 = require("../../app/controllers/UserController");
const base_1 = require("../base");
const core_1 = require("../../app/core");
const core_2 = require("../../app/core");
class UserRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new UserController_1.UserController();
        this.init();
    }
    init() {
        this._router.post("/UpdateYourOwnAvatar", core_2.authenticator.authenticate, core_2.Authorization.confirm("BASICUSER"), core_1.upload.single("file"), this.controller.updateOwnAvatar);
        this._router.get("/GetRoles", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.getRoles);
        this._router.post("/create", 
        // authenticator.authenticate,
        // Authorization.confirm("ADMIN"),
        this.controller.create);
        this._router.get("/GetAllManager", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.getAllManager);
        this._router.delete("/delete", 
        // authenticator.authenticate,
        // Authorization.confirm("ADMIN"),
        this.controller.delete);
        this._router.get("/getUserNotPagging", 
        // authenticator.authenticate,
        // Authorization.confirm("ADMIN"),
        this.controller.getUserNotPagging);
        this._router.post("/GetAllPagging", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.getAllPagging);
        this._router.post("/ActiveUser", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.active);
        this._router.post("/DeactiveUser", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.deactive);
        this._router.post("/UpdateAvatar", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), core_1.upload.single("file"), this.controller.updateAvatar);
        this._router.post("/ResetPassword", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.resetPassword);
        this._router.get("/get", 
        // authenticator.authenticate,
        // Authorization.confirm("ADMIN"),
        this.controller.get);
        this._router.put("/update", core_2.authenticator.authenticate, core_2.Authorization.confirm("ADMIN"), this.controller.update);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=User.js.map