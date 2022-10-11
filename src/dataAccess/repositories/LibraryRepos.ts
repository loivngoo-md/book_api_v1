import { BaseRepository } from "./base";

import { ILibrary } from "../../interfaces";

import { LibrarySchema } from "../schemas";

class LibraryRepository extends BaseRepository<ILibrary> {
  constructor() {
    super("libraries", LibrarySchema);
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

Object.seal(LibraryRepository);
export { LibraryRepository };
