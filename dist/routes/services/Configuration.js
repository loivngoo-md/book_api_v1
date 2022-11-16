"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class ConfigurationRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.controller = new controllers_1.ConfigurationController();
        this.init();
    }
    init() {
        this._router.get("/GetWorkingTimeConfigAllBranch", this.controller.getWorkingTimeConfigAllBranch);
    }
}
exports.ConfigurationRouter = ConfigurationRouter;
Object.seal(ConfigurationRouter);
//# sourceMappingURL=Configuration.js.map