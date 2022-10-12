import { GridParam } from "../dto/requests/GridParam";

import { BookDto } from "../dto/common/BookDto";

import { IResponse } from "../core/responses/interfaces";

import { NextFunction, Request, Response } from "express";

import { BookService } from "../services";

import { HttpStatusCode } from "../enums";

import { ApiResponse } from "../core";

class BookController {
    private _business: BookService = new BookService();

    public findByType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const type = req.query?.type as string
            const key = type.charAt(0).toUpperCase() + type.slice(1);
            console.log(key);


            const result: BookDto[] = await this._business.findByType(key);

            const response: IResponse = {
                ...ApiResponse,
                result,
            };
            return res.status(HttpStatusCode.OK).json(response);
        } catch (error) {
            next(error);
        }
    }

    public save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const book: BookDto = req.body;

            const result: BookDto = await this._business.save(book);

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
            const result: BookDto[] = await this._business.getAll();
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

Object.seal(BookController);
export { BookController };
