
import { CommentRepository } from "../../dataAccess/repositories";

import { HttpStatusCode } from "../enums";

import { BaseService } from "./base";

import { ApiError } from "../core";
import { CommentDto } from "../dto/common/CommentDto";


class CommentService extends BaseService<CommentRepository> {
    constructor() {
        super(new CommentRepository());
    }

    public save = async (item: CommentDto): Promise<CommentDto> => {
        try {
            return await this._repos.save(item);
        } catch (error) {
            throw new ApiError(
                HttpStatusCode.BAD_REQUEST,
                `error in business logic: ${error}`
            );
        }
    };

    public getAll = async (): Promise<CommentDto[]> => {
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

Object.seal(CommentService);
export { CommentService };
