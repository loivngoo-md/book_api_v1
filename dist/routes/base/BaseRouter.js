"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
class BaseRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    get _router() {
        return this.router;
    }
}
exports.BaseRouter = BaseRouter;
Object.seal(BaseRouter);
//# sourceMappingURL=BaseRouter.js.map