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
exports.TaskController = void 0;
const enums_1 = require("../enums");
const services_1 = require("../services");
const core_1 = require("../core");
class TaskController {
    constructor() {
        this._business = new services_1.TaskService();
        this.save = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const task = req.body;
                const result = yield this._business.save(task);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.Id;
                const result = yield this._business.delete(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.getAll();
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.archive = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.query.Id;
                const result = yield this._business.archive(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.deArchive = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.body.id;
                const result = yield this._business.deArchive(id);
                const response = Object.assign(Object.assign({}, core_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TaskController = TaskController;
Object.seal(TaskController);
//# sourceMappingURL=TaskController.js.map