import { BaseRepository } from "./base";

import { IComment } from "../../interfaces";

import { CommentSchema } from "../schemas";

class CommentRepository extends BaseRepository<IComment> {
  constructor() {
    super("comments", CommentSchema);
  }

  public getAll = async () => {
    return await this._model.find();
    
    // return await this._model.find({}, "name id");
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
}

Object.seal(CommentRepository);
export { CommentRepository };
