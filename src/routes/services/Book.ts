import { BookController } from "../../app/controllers";

import { authenticator, Authorization } from "../../app/core";

import { BaseRouter } from "../base";

class BookRouter extends BaseRouter {
  private _controller: BookController = new BookController();

  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.post("/save", this._controller.save);
    this._router.delete("/delete", this._controller.delete);
    this._router.get("/getAll", this._controller.getAll);
  }
}

Object.seal(BookRouter);
export { BookRouter };
