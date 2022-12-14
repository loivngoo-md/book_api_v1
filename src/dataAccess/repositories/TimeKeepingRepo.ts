import { BaseRepository } from "./base";

import { ITimeKeeping } from "../../interfaces";

import { TaskSchema } from "../schemas";

class TimeKeepingRepository extends BaseRepository<ITimeKeeping> {
    constructor() {
        super("tasks", TaskSchema);
    }

    public getAll = async () => {
        return await this._model.find({}, "name id");
    };

    public archive = async (id: number) => {
        const isActived = await this._model.updateOne(
            { id },
            { $set: { isDeleted: true } }
        );

        return true ? isActived : false;
    };

    public deArchive = async (id: number) => {
        const isActived = await this._model.updateOne(
            { id },
            { $set: { isDeleted: false } }
        );

        return true ? isActived : false;
    };

    public edit( ) {
        
    }
}

Object.seal(TimeKeepingRepository);
export { TimeKeepingRepository };
