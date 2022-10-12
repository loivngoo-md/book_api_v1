import { BaseRepository } from "./base";

import { IBook } from "../../interfaces";

import { BookSchema } from "../schemas";

class BookRepository extends BaseRepository<IBook> {
  constructor() {
    super("books", BookSchema);
  }

  public findByType = async (type: string) => {
    const data = await this._model.find({ type })
    return data
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

Object.seal(BookRepository);
export { BookRepository };
