"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class CustomerRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this._controller = new controllers_1.CustomerController();
        this.init();
    }
    init() {
        this._router.post("/save", this._controller.save);
        this._router.delete("/delete", this._controller.delete);
        this._router.get("/getAll", this._controller.getAll);
        this._router.post("/getAllPagging", this._controller.getAllPagging);
    }
}
exports.CustomerRouter = CustomerRouter;
Object.seal(CustomerRouter);
//# sourceMappingURL=Customer.js.map