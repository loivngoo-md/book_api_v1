import { BaseRepository } from "./base";

import { ITimeKeeping } from "../../interfaces";

import { TaskSchema } from "../schemas";

class TimeKeepingRepository extends BaseRepository<ITimeKeeping> {
    constructor() {
        super("timekeeping", TaskSchema);
    }

    public getAll = async () => {
        return await this._model.find();
    };
}

Object.seal(TimeKeepingRepository);
export { TimeKeepingRepository };
