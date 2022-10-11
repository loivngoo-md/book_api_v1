import { CommentDto } from "../dto/common/CommentDto";

import { IResponse } from "../core/responses/interfaces";

import { NextFunction, Request, Response } from "express";

import { CommentService } from "../services";

import { HttpStatusCode } from "../enums";

import { ApiResponse } from "../core";

class CommentController {
    private _business: CommentService = new CommentService();

    public save = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const book: CommentDto = req.body;

            const result: CommentDto = await this._business.save(book);

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
            const result: CommentDto[] = await this._business.getAll();
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

Object.seal(CommentController);
export { CommentController };
