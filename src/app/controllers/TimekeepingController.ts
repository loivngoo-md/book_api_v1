import { Request, Response } from "express";
import { TimeKeepingRepository } from "../../dataAccess/repositories";
import { ITimeKeeping } from "src/interfaces";

import { FAKE_TIMEKEEPING } from "../constants";

import { HttpStatusCode } from "../enums";

class TimekeepingController {
  private repo: TimeKeepingRepository = new TimeKeepingRepository();

  async getMyDetails(req: Request, res: Response) {
    const response = [FAKE_TIMEKEEPING, FAKE_TIMEKEEPING];
    return res.status(HttpStatusCode.OK).json(response);
  }


  async get(req: Request, res: Response) {
    return await this.repo.retrieve()
  }

  async create(req: Request, res: Response) {
    const item: ITimeKeeping = req.body
    return this.repo.save(item)
  }

  async update(req: Request, res: Response) {
    const item = req.body
    return this.repo.update(item)
  }

  async view(req: Request, res: Response) {
    const id = +req.query.id
    return this.repo.findById(id)
  }


}

Object.seal(TimekeepingController);
export { TimekeepingController };
