
import { LibraryRepository } from "../../dataAccess/repositories";

import { HttpStatusCode } from "../enums";

import { BaseService } from "./base";

import { ApiError } from "../core";
import { LibraryDto } from "../dto/common/LibraryDto";


class LibraryService extends BaseService<LibraryRepository> {
    constructor() {
        super(new LibraryRepository());
    }

    public save = async (item: LibraryDto): Promise<LibraryDto> => {
        try {
            return await this._repos.save(item);
        } catch (error) {
            throw new ApiError(
                HttpStatusCode.BAD_REQUEST,
                `error in business logic: ${error}`
            );
        }
    };

    public getAll = async (): Promise<LibraryDto[]> => {
        try {
            return await this._repos.getAll();
        } catch (error) {
            throw new ApiError(
                HttpStatusCode.BAD_REQUEST,
                `error in business logic: ${error}`
            );
        }
    };

    public delete = async (id: number): Promise<boolean> => {
        try {
            return await this._repos.delete(id);
        } catch (error) {
            throw new ApiError(
                HttpStatusCode.BAD_REQUEST,
                `error in business logic: ${error}`
            );
        }
    };

}

Object.seal(LibraryService);
export { LibraryService };
