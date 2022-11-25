"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTimesheetController = void 0;
const services_1 = require("../services");
const responses_1 = require("../core/responses");
const enums_1 = require("../enums");
class MyTimesheetController {
    constructor() {
        this._business = new services_1.MyTimesheetService();
        this.saveList = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = req.body;
                const userId = +req.app.locals.currentUser.id;
                const result = yield this._business.saveList(items, userId);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.Id;
                const result = yield this._business.delete(id);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.save = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = req.body;
                item.userId = +req.app.locals.currentUser.id;
                const result = yield this._business.create(item);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.CREATEAD).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.get = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.id;
                const result = yield this._business.get(id);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.submitToPending = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { startDate, endDate } = req.body;
                const userId = +req.app.locals.currentUser.id;
                const date = {
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                };
                const result = yield this._business.submitToPending(userId, date);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllTimesheetOfUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const startDate = new Date(String(req.query.startDate));
                const endDate = new Date(String(req.query.endDate));
                const userId = req.app.locals.currentUser.id;
                const result = yield this._business.getAllTimesheetOfUser(userId, startDate, endDate);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.MyTimesheetController = MyTimesheetController;
Object.seal(MyTimesheetController);
//# sourceMappingURL=MyTimesheetController.js.map