import { GridResultCustomer } from "../dto/responses/customer/GridResultCustomer";

import { BookRepository } from "../../dataAccess/repositories";

import { GridParam } from "../dto/requests/GridParam";

import { HttpStatusCode } from "../enums";

import { BaseService } from "./base";

import { ApiError } from "../core";
import { BookDto } from "../dto/common/BookDto";


class BookService extends BaseService<BookRepository> {
    constructor() {
        super(new BookRepository());
    }

    public save = async (item: BookDto): Promise<BookDto> => {
        try {
            return await this._repos.save(item);
        } catch (error) {
            throw new ApiError(
                HttpStatusCode.BAD_REQUEST,
                `error in business logic: ${error}`
            );
        }
    };

    public getAll = async (): Promise<BookDto[]> => {
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

Object.seal(BookService);
export { BookService };
