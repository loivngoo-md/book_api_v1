"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const controllers_1 = require("../../app/controllers");
const base_1 = require("../base");
class BookRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this._controller = new controllers_1.BookController();
        this.init();
    }
    init() {
        this._router.post("/save", this._controller.save);
        this._router.delete("/delete", this._controller.delete);
        this._router.get("/getAll", this._controller.getAll);
        this._router.get("/filter", this._controller.findByType);
    }
}
exports.BookRouter = BookRouter;
Object.seal(BookRouter);
//# sourceMappingURL=Book.js.map