import { LibraryController } from "../../app/controllers";

import { authenticator, Authorization } from "../../app/core";

import { BaseRouter } from "../base";

class LibraryRouter extends BaseRouter {
  private _controller: LibraryController = new LibraryController();

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

Object.seal(LibraryRouter);
export { LibraryRouter };
