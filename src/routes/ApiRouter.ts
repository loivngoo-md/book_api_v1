import { AuthRouter } from "./auth/AuthRouter";
import * as express from "express";

import { ServiceRouter } from "./services";

import { BaseRouter } from "./base";
import { HttpStatusCode } from "../app/enums";

class ApiRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.use("/services/app", new ServiceRouter()._router);

    this._router.use("/TokenAuth", new AuthRouter()._router);

    this._router.get("/mode/view", async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        return res.status(HttpStatusCode.OK).json({
          status: 200,
          mode: 1,
        });
      } catch (error) {
        next(error);
      }
    })

    this._router.get("/mode/change", async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {

        const mode = req.body

        return res.status(HttpStatusCode.OK).json({
          status: 200,
          mode: 1,
        });
      } catch (error) {
        next(error);
      }
    }),

      this._router.get("/mode", async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {

        const body = req.body



      })

    this._router.get("/comments/views", async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {

        return res.status(HttpStatusCode.OK).json({
          comments: null
        });
      } catch (error) {
        next(error);
      }
    })

    this._router.get(
      "/reviews/views",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => res.status(HttpStatusCode.OK).json({
        reviews: null
      }))
  }
}

export { ApiRouter };
