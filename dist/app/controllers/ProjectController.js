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
exports.ProjectController = void 0;
const responses_1 = require("../core/responses");
const services_1 = require("../services");
const enums_1 = require("../enums");
class ProjectController {
    constructor() {
        this._business = new services_1.ProjectService();
        this.save = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._business.save(req.body);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const status = +req.query.status;
                const search = String(req.query.seach);
                const result = yield this._business.getAll(status, search);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.inActive = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = +req.body.id;
                const result = yield this._business.inActive(id);
                const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
                return res.status(enums_1.HttpStatusCode.OK).json(response);
            }
            catch (error) {
                next(error);
            }
        });
        this.active = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.body.id;
            const result = yield this._business.active(id);
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.query.Id;
            const result = yield this._business.delete(id);
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.get = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.query.input;
            const result = yield this._business.get(id);
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.getProjectsIncludingTasks = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.app.locals.currentUser.id;
            const result = yield this._business.getProjectIncludingTasks(userId);
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.getFilter = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._business.getFilter();
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.getProjectPM = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._business.getProjectPM();
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
        this.getProjectUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this._business.getProjectUser();
            const response = Object.assign(Object.assign({}, responses_1.ApiResponse), { result });
            return res.status(enums_1.HttpStatusCode.OK).json(response);
        });
    }
}
exports.ProjectController = ProjectController;
Object.seal(ProjectController);
//# sourceMappingURL=ProjectController.js.map