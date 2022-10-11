import { LibraryDto } from "../dto/common/LibraryDto";

import { IResponse } from "../core/responses/interfaces";

import { NextFunction, Request, Response } from "express";

import { LibraryService } from "../services";

import { HttpStatusCode } from "../enums";

import { ApiResponse } from "../core";

class LibraryController {
    private _business: LibraryService = new LibraryService();

    public save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const book: LibraryDto = req.body;

            const result: LibraryDto = await this._business.save(book);

            const response: IResponse = {
                ...ApiResponse,
                result,
            };
            return res.status(HttpStatusCode.OK).json(response);
        } catch (error) {
            next(error);
        }
    };

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: LibraryDto[] = await this._business.getAll();
            const response: IResponse = {
                ...ApiResponse,
                result,
            };

            return res.status(HttpStatusCode.OK).json(response);
        } catch (error) {
            next(error);
        }
    };

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = +req.query.Id;

            const result: boolean = await this._business.delete(id);

            const response: IResponse = {
                ...ApiResponse,
                result,
            };

            return res.status(HttpStatusCode.OK).json(response);
        } catch (error) {
            next(error);
        }
    };

}

Object.seal(LibraryController);
export { LibraryController };
