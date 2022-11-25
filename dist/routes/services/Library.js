"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class LibraryRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this._controller = new controllers_1.LibraryController();
        this.init();
    }
    init() {
        this._router.post("/save", this._controller.save);
        this._router.delete("/delete", this._controller.delete);
        this._router.get("/getAll", this._controller.getAll);
    }
}
exports.LibraryRouter = LibraryRouter;
Object.seal(LibraryRouter);
//# sourceMappingURL=Library.js.map