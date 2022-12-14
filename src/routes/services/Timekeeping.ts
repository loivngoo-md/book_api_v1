import { authenticator } from "../../app/core";

import { TimekeepingController } from "../../app/controllers";

import { BaseRouter } from "../base";

class TimeKeepingRouter extends BaseRouter {
  private controller: TimekeepingController = new TimekeepingController();
  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.get(
      "/GetMyDetails",
      authenticator.authenticate,
      this.controller.getMyDetails
    );

    this._router.patch(
      "/create",
      this.controller.create
    );

    this._router.post(
      "/update",
      this.controller.update
    );

    this._router.get(
      "/view/:id",
      this.controller.view
    );

    this._router.get(
      "/get",
      this.controller.get
    );

  }


}

Object.seal(TimeKeepingRouter);
export { TimeKeepingRouter };
